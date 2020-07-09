const mongoose = require("mongoose");

export const workoutSchema = new mongoose.Schema({
  name: String,
  description: String,
  startDate: Date,
  category: String,
  content: String,
});

export type TWorkout = {
  name: string;
  description: string;
  startDate: string;
  category: string;
  content: string;
};

export type TPagination = {
  totalPages: number;
  totalItems: number;
  page: number;
};

type TGetWorkoutsListResponse =
  | {
      workouts: TWorkout[];
      pagination: TPagination;
    }
  | Error;

type TGetWorkoutDetailsResponse = TWorkout | Error;

type TFilters = {
  category: string;
  startDate: string;
};

type TQuery = {
  page: number;
  categories?: string;
  startDate?: string;
};

export default class Workout {
  private workout;

  constructor() {
    try {
      // Trying to get the existing model to avoid OverwriteModelError
      this.workout = mongoose.model("Workout");
    } catch {
      this.workout = mongoose.model("Workout", workoutSchema);
    }
  }

  async getWorkoutsList(query: TQuery): Promise<TGetWorkoutsListResponse> {
    const { page = 1, categories, startDate } = query;
    const pageSize = 20;
    const skips = pageSize * (Number(page) - 1);

    try {
      const filters = {};

      if (categories) {
        const categoriesArray = categories.split(",");

        if (categories.length) {
          filters.category = { $in: categoriesArray };
        }
      }

      if (startDate) {
        filters.startDate = { $gte: new Date(startDate) };
      }

      // Pagination data
      const workoutsCount = await this.workout.find(filters).countDocuments();
      const totalPages = Math.ceil(workoutsCount / pageSize);

      // Get filter and sort data
      const workouts = await this.workout
        .find(filters, { content: 0 })
        .sort({ startDate: -1 })
        .skip(skips)
        .limit(pageSize);

      return {
        workouts,
        pagination: {
          totalPages,
          totalItems: workoutsCount,
          page: Number(page),
        },
      };
    } catch (error) {
      throw new Error(error);
    }
  }

  async getWorkoutDetails(id: string): Promise<TGetWorkoutDetailsResponse> {
    try {
      const workoutDetails = await this.workout.findOne({ _id: id });

      return workoutDetails;
    } catch (error) {
      throw new Error(error);
    }
  }

  populate(workouts: TWorkout[]): void {
    return this.workout.insertMany(workouts);
  }
}
