import Container from "../Container";
import { AiFillHome } from "react-icons/ai";
import {
  BsAirplaneFill,
  BsFillHeartFill,
  BsFillMapFill,
  BsFillPersonFill,
} from "react-icons/bs";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm bottom-0">
      <div
        className="
          py-4 
          border-b-[1px]
        "
      >
        <Container>
          <div
            className="
            flex 
            flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-0
          "
          >
            <NavbarItem icon={AiFillHome} />
            <NavbarItem icon={BsFillPersonFill} />
            <NavbarItem icon={BsAirplaneFill} main />
            <NavbarItem icon={BsFillMapFill} />
            <NavbarItem icon={BsFillHeartFill} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
