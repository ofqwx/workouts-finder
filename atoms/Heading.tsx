import { ReactNode } from "react";
import styled from "styled-components";

const Heading1 = styled.h1`
  text-align: ${(props) => props.align || "center"};
  margin: ${(props) => props.margin || "1em 0"};
  line-height: 1.15;
`;

const Heading2 = Heading1.withComponent("h2");
const Heading3 = Heading1.withComponent("h3");

type THeadingProps = {
  level: number;
  align?: string;
  margin?: string;
  props?: any;
  children: ReactNode;
};

export default function Heading({ level, children, ...props }: THeadingProps) {
  switch (level) {
    case 2:
      return <Heading2 {...props}>{children}</Heading2>;
    case 3:
      return <Heading3 {...props}>{children}</Heading3>;
    default:
      return <Heading1 {...props}>{children}</Heading1>;
  }
}
