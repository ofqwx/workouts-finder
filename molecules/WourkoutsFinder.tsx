import { useEffect, useState } from "react";
import { Heading } from "../atoms";
import {Filters} from '../molecules';
import { Flex, Box } from "../grid";
import { useRouter } from "next/router";
import createQueryString from "../transformers/createQueryString";
import { WorkoutsList } from ".";

export default function WourkoutsFinder() {
  const [workoutsListData, setWorkoutsListData] = useState({
    workouts: [],
    pagination: {},
  });
  const [loading, setLoading] = useState(false);
  const { query } = useRouter();

  useEffect(() => {
    async function getWorkouts(query) {
      try {
        setLoading(true);

        const response = await fetch("/api/workout/list", {
          method: "POST",
          body: JSON.stringify(query),
        });
        const data = await response.json();

        setWorkoutsListData(data);
        setLoading(false);
      } catch (error) {
        throw new Error(error);
      }
    }

    getWorkouts(query);
  }, [query]);

  return (
    <Flex direction="column" justifyContent="center" alignItems="center">
      <Box>
        <Flex direction="column" justifyContent="center" alignItems="center">
          <Box>
            <Heading level={1}>Find the perfect workout for you!</Heading>
          </Box>

          <SearchBar loading={loading && workoutsListData.workouts?.length} />
          
          <WorkoutsList loading={loading} data={workoutsListData} />

        </Flex>
      </Box>
    </Flex>
  );
}


type TSearchBarProps = {
  loading: boolean
}

function SearchBar({loading}: TSearchBarProps) {
  const router = useRouter();

  function onApplyFilters(filters) {
    const queryString = createQueryString(filters);

    router.push(`/?${queryString}&page=1`);
  }

  return (
    <Flex>
      <Box width="100%">
        <Filters loading={loading} onApplyFilters={onApplyFilters} />
      </Box>
    </Flex>
  );
}
