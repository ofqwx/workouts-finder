import React, { ReactNode } from "react";
import Head from "next/head";
import { Flex, Box } from "../grid";
import { Header } from "../molecules";
import { Footer } from "../molecules";

type TLayoutProps = {
  title: string | Node;
  topBarLinks?: ReactNode;
  children: ReactNode;
};

export default function Layout({ title, topBarLinks, children }: TLayoutProps) {
  return (
    <Flex direction="column" alignItems="center" justifyContent="space-between" height="100vh">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Box width="100%">
        <Header>{topBarLinks || null}</Header>
      </Box>

      <Box padding="0 0.5rem" flexGrow={1}>
        {children}
      </Box>

      <Box>
        <Footer />
      </Box>
    </Flex>
  );
}
