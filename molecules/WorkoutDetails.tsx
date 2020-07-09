import { useEffect, useState } from "react";
import { Heading } from "../atoms";
import { Flex, Box } from "../grid";
import { TWorkout } from "../data/Workout";
import formatDate from "../transformers/formatDate";

type TWorkoutDetailsProps = {
  id: string;
};

export default function WorkoutDetails({ id }: TWorkoutDetailsProps) {
  const [workoutDetails, setWorkoutDetails] = useState<TWorkout | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getWorkoutDetails() {
      try {
        setLoading(true);

        const response = await fetch(`/api/workout/detail/${id}`);
        const data = await response.json();

        setWorkoutDetails(data);
        setLoading(false);
      } catch (error) {
        throw new Error(error);
      }
    }

    getWorkoutDetails();
  }, [id]);

  if (loading || !workoutDetails) {
    return (
      <Flex direction="column">
        <Box alignSelf="center">
          <Heading level={2}>loading...</Heading>
        </Box>
      </Flex>
    );
  }

  return (
    <Flex direction="column">
      <Box alignSelf="center">
        <Heading level={1} margin="0">
          {workoutDetails.name}{" "}
          <small>{`cat: ${workoutDetails.category}`}</small>
        </Heading>
      </Box>

      <Flex justifyContent="center">
        <Box flexBasis="800px">
          <Flex direction="column">
            <Box alignSelf="start">
              <Heading level={3} margin="0">{`Start date: ${formatDate(
                workoutDetails.startDate
              )}`}</Heading>
            </Box>

            <Box alignSelf="start">
              <p>{workoutDetails.description}</p>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}
