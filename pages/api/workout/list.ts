import DataSource from "../../../data/DataSource";
import Workout from "../../../data/Workout";
import { NextApiRequest, NextApiResponse } from "next";

export default async function workouts(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    const dataSource = new DataSource();
    await dataSource.connect();
    const workout = new Workout();

    const query = req.body;
    const queryObj = await JSON.parse(query);

    const workouts = await workout.getWorkoutsList(queryObj);

    res.status(200).json(workouts);
    dataSource.disconnect();
  } catch (error) {
    res.json(error);
  }
}
