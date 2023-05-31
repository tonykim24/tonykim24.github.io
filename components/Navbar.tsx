import { Flex, Stack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { Pages } from "../utils/consts";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="navbar">
      <Link href={Pages.HOME}>Home</Link>
      <Link href={Pages.CHAT}>Chat</Link>
    </div>
  );
};

export default Navbar;
