import { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { Flex, Box } from "../grid";
import { DatePicker} from "../atoms";
import formatDate from '../transformers/formatDate';

const Wrapper = styled.div`
  select {
    width: 100%;
  }
  fieldset {
    min-height: 60px;
  }
  text-align: center;
`;

const SubmitButton = styled.button`
  width: 150px;
  height: 40px;
`;

type TFilters = {
  category: string;
  startDate: string;
};

type TFiltersProps = {
  loading: boolean;
  onApplyFilters: (TFilters) => void;
};

export default function Filters({ loading, onApplyFilters }: TFiltersProps) {
  const { query } = useRouter();
  const [startDate, setStartDate] = useState();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const categories = ["c1", "c2", "c3", "c4", "c5", "c6", "c7"];
  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);

  function onSubmit(e) {
    e.preventDefault();

    onApplyFilters({
      categories: selectedCategories,
      startDate,
    });
  }

  function handleChangeCategory(e) {
    const checkbox = e.target;

    if (checkbox.checked) {
      setSelectedCategories((prevState) => [...prevState, checkbox.value]);

      return undefined;
    }

    setSelectedCategories((prevState) =>
      prevState.filter((category) => category !== checkbox.value)
    );
  }

  // Set initial values from url
  useEffect(() => {
    if (query.categories) {
      setSelectedCategories(query.categories.split(","));
    }

    if (query.startDate) {
      setStartDate(formatDate(query.startDate));
    }
  }, [query.categories, query.startDate]);

  return (
    <Wrapper>
      <form onSubmit={onSubmit}>
        <Flex direction="column">
          <Box flexBasis="100%">
            <fieldset>
              <legend>Start date</legend>
              <DatePicker
                selected={startDate ? new Date(startDate) : null}
                onChange={(date) => {
                  setStartDate(formatDate(date));
                }}
                minDate={minDate}
                maxDate={maxDate}
                placeholderText="Pick a date"
              />
            </fieldset>
          </Box>

          <Box flexBasis="100%">
            <fieldset>
              <legend>Category</legend>
              <Flex>
                {categories.map((category) => (
                  <Box key={category}>
                    <Flex direction="column">
                      <Box padding="0">
                        <input
                          type="checkbox"
                          onClick={handleChangeCategory}
                          value={category}
                          checked={selectedCategories.includes(category)}
                        />
                      </Box>

                      <Box padding="0">
                        <label>{category}</label>
                      </Box>
                    </Flex>
                  </Box>
                ))}
              </Flex>
            </fieldset>
          </Box>

          <Box>
            <SubmitButton type="submit">Search</SubmitButton>
          </Box>

          <Box>{loading ? <p>Loading...</p> : null}</Box>
        </Flex>
      </form>
    </Wrapper>
  );
}
