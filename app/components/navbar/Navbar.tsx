"use client";

import Container from "../Container";
import { AiFillHome } from "react-icons/ai";
import {
  BsAirplaneFill,
  BsFillHeartFill,
  BsFillMapFill,
  BsFillPersonFill,
} from "react-icons/bs";
import NavbarItem from "./NavbarItem";
import { usePathname, useSearchParams } from "next/navigation";

const NavbarItems = [
  {
    label: "home",
    icon: AiFillHome,
  },
  {
    label: "user",
    icon: BsFillPersonFill,
  },
  {
    label: "discover",
    icon: BsAirplaneFill,
  },
  {
    label: "trips",
    icon: BsFillMapFill,
  },
  {
    label: "favorite",
    icon: BsFillHeartFill,
  },
];
const Navbar = () => {
  const pathname = usePathname();
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
            {NavbarItems.map((item) => {
              return (
                <NavbarItem
                  icon={item.icon}
                  main={pathname === "/" + item.label}
                  key={item.label}
                />
              );
            })}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
