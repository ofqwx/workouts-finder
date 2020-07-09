import styled from "styled-components";
import { Flex, Box } from "../grid";
import {Node} from 'react';

const StyledBox = styled(Box)`
  max-width: 800px;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;

type TCardListProps = {
  children: ReactNode;
}

export default function CardList({children}: TCardListProps) {
  return (
    <Flex alignItems="center" justifyContent="center" wrap="wrap">
      <StyledBox>{children}</StyledBox>
    </Flex>
  );
}
