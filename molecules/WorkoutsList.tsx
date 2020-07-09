import { Heading, CardList, Card } from "../atoms";
import { TWorkout, TPagination } from "../data/Workout";
import { Box, Flex } from "../grid";
import Pagination from "./Pagination";
import {useRouter} from 'next/router';

type TWorkoutsListProps = {
  loading: boolean;
  data: {
    workouts: TWorkout[];
    pagination: TPagination;
  };
};

export default function WorkoutsList({ loading, data }: TWorkoutsListProps) {
  const { asPath } = useRouter();
  const { workouts, pagination } = data;

  if (workouts?.length) {
    return (
      <Flex direction="column">
        <Box alignSelf="center">
          {`${pagination.totalItems} workouts found`}
        </Box>

        <CardList>
          {workouts.map((workout) => (
            <Card
              key={workout._id}
              url={`/workout-details/${workout._id}?referrer=${encodeURIComponent(asPath)}`}
            >
              <Heading level={3} align="left">
                {workout.name}
              </Heading>
              <p>{workout.description}</p>
            </Card>
          ))}
        </CardList>

        <Box>
          <Pagination pagination={pagination} />
        </Box>
      </Flex>
    );
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Heading level={2}>
      We couldn&apos;t find any workout for you now :(
    </Heading>
  );
}
