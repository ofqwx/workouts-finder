import styled from "styled-components";

const Heading1 = styled.h1`
  text-align: ${props => props.align || "center"};
  margin: 1em 0;
  line-height: 1.15;
`;

const Heading2 = Heading1.withComponent("h2");
const Heading3 = Heading1.withComponent("h3");

type THeadingProps = {
  level: number;
  align?: string;
  props?: any;
};

export default function Heading({ level, ...props }: THeadingProps) {
  switch (level) {
    case 2:
      return <Heading2 {...props} />;
    case 3:
      return <Heading3 {...props} />;
    default:
      return <Heading1 {...props} />;
  }
}