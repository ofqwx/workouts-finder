import { useState, useEffect } from "react";
import { Box, Flex } from "../grid";
import { TPagination } from "../data/Workout";
import { useRouter } from "next/router";
import Link from "next/link";
import { ReactNode } from "react";
import createQueryString from "../transformers/createQueryString";

type TPaginationProps = {
  pagination: TPagination;
};

type TPaginationLinkProps = {
  disabled: boolean;
  url: string;
  children: ReactNode;
};

function PaginationLink({ disabled, url, children }: TPaginationLinkProps) {
  if (disabled) {
    return <p style={{ color: "gray" }}>{children}</p>;
  }

  return (
    <Link href={url}>
      <a>{children}</a>
    </Link>
  );
}

export default function Pagination({ pagination }: TPaginationProps) {
  const router = useRouter();
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");

  useEffect(() => {
    const query = router.query;

    const nextQueryString = createQueryString({
      ...query,
      page: query.page ? Number(query.page) + 1 : 2,
    });

    const prevQueryString = createQueryString({
      ...query,
      page: query.page && query.page > 1 ? Number(query.page) - 1 : 0,
    });

    setNextUrl(`/?${nextQueryString}`);
    setPrevUrl(`/?${prevQueryString}`);
  }, [router.query]);

  return (
    <Flex justifyContent="space-between">
      <Box alignSelf="start">
        <PaginationLink disabled={pagination.page === 1} url={prevUrl}>
          Prev
        </PaginationLink>
      </Box>

      <Box>
        {pagination.page}/{pagination.totalPages}
      </Box>

      <Box>
        <PaginationLink
          disabled={pagination.page === pagination.totalPages}
          url={nextUrl}
        >
          Next
        </PaginationLink>
      </Box>
    </Flex>
  );
}
