import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <div>
      <HStack justify="space-between" padding="10px">
        <Image src={logo} boxSize="60px" padding="10px" />
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
