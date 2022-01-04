import { Link } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { FC, useMemo } from "react";

type Props = {
  href: string;
  path: string;
};

const LinkItem: FC<Props> = ({ children, href, path }) => {
  const activate = useMemo(() => href === path, [href, path]);
  return (
    <NextLink href={href}>
      <Link color={useColorModeValue(activate ? "black" : "gray.100", activate ? "white" : "gray")} fontWeight="bold">
        {children}
      </Link>
    </NextLink>
  );
};

export default LinkItem;
