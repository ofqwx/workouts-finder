import DataSource from "../../../../data/DataSource";
import Workout from "../../../../data/Workout";
import { NextApiRequest, NextApiResponse } from "next";

export default async function workoutDetails(
  req: NextApiRequest,
  res: NextApiResponse
): void {
  try {
    const dataSource = new DataSource();
    await dataSource.connect();

    const workout = new Workout();

    const { query } = req;
    const workoutDetail = await workout.getWorkoutDetails(query.id);

    res.status(200).json(workoutDetail);

    dataSource.disconnect();
  } catch (error) {
    res.json(error);
  }
}
