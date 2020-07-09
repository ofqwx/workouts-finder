import styled from "styled-components";
import { Flex, Box } from "../grid";

export const Wrapper = styled.footer`
  height: 100px;
  border-top: 1px solid #eaeaea;
`;

export default function Footer() {
  return (
    <Wrapper>
      <Flex justifyContent="center" alignItems="center">
        <Box padding="1em">
          <p>Made with &#10084; by Antuá</p>
        </Box>
      </Flex>
    </Wrapper>
  );
}
