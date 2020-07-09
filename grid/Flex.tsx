import { Node } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: ${(props) => props.height || "100%"};
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  align-items: ${(props) => props.alignItems || "stretch"};
  justify-content: ${(props) => props.justifyContent || "start"};
`;

type TFlexProps = {
  children: Node,
  direction?: string,
  wrap?: string,
  alignItems?: string,
  justifyContent?: string,
  height?: string,
};

export default function Flex({
  children,
  direction,
  wrap,
  alignItems,
  justifyContent,
  height,
}: TFlexProps) {
  return (
    <Wrapper
      direction={direction}
      wrap={wrap}
      alignItems={alignItems}
      justifyContent={justifyContent}
      height={height}
    >
      {children}
    </Wrapper>
  );
}
