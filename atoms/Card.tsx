import { Node } from "react";
import styled from "styled-components";
import Link from "next/link";
import { Box } from "../grid";

const Wrapper = styled(Box)`
  &:hover,
  :focus,
  :active {
    color: var(--color-accent);
    border-color: #0070f3;
  }

  a {
    color: #fff;
    text-decoration: none;
  }
`;

type TCardProps = {
  url?: string;
  children: Node;
};

export default function Card({ url, children }: TCardProps) {
  if (url) {
    return (
      <Wrapper>
        <Link href={url}>
          <a>
            <Wrapper width="100%">{children}</Wrapper>
          </a>
        </Link>
      </Wrapper>
    );
  }

  return <Box width="100%">{children}</Box>;
}
