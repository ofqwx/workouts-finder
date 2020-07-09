import styled from "styled-components";
import { ReactNode } from "react";

const Wrapper = styled.div`
  height: ${props => props.height || ""};
  width: ${props => props.width || ""};
  margin: ${props => props.margin || ""};
  padding: ${props => props.padding || "8px"};

  flex-basis: ${props => props.flexBasis || "auto"};
  flex-grow: ${props => (props.flexGrow !== undefined ? props.flexGrow : 0)};
  flex-shrink: ${props =>
    props.flexShrink !== undefined ? props.flexShrink : 1};
  align-self: ${props => props.alignSelf || "stretch"};

  overflow: ${props => (props.scroll ? "scroll" : null)};

  /* Prevent margin collapsing of Flex containers */
  ::before,
  ::after {
    content: " ";
    display: table;
  }
`;

type TBoxProps = {
  children: ReactNode;
  height?: string;
  width?: string;
  margin?: string;
  padding?: string | number;
  flexBasis?: string;
  flexGrow?: number;
  flexShrink?: number;
  alignSelf?: string;
  scroll?: boolean;
  className?: string;
};

export default function Box({
  children,
  height,
  width,
  margin,
  padding,
  flexBasis,
  flexGrow,
  flexShrink,
  alignSelf,
  scroll,
  className
}: TBoxProps) {
  return (
    <Wrapper
      height={height}
      width={width}
      margin={margin}
      padding={padding}
      flexBasis={flexBasis}
      flexGrow={flexGrow}
      flexShrink={flexShrink}
      alignSelf={alignSelf}
      scroll={scroll}
      className={className}
    >
      {children}
    </Wrapper>
  );
}
