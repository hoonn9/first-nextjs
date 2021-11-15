import { Link } from "@chakra-ui/layout";
import { NextComponentType } from "next";
import NextLink, { LinkProps } from "next/link";
import { FC, useMemo } from "react";

type Props = {
  href: string;
  path: string;
};

const LinkItem: FC<Props> = ({ children, href, path }) => {
  console.log(href, path);

  const activate = useMemo(() => href === path, [href, path]);

  return (
    <NextLink href={href}>
      <Link bg={activate ? "#325432" : undefined}>{children}</Link>
    </NextLink>
  );
};

export default LinkItem;
