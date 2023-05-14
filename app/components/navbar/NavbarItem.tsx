import clsx from "clsx";
import { IconType } from "react-icons";

interface NavbarItemProps {
  icon: IconType;
  main?: boolean;
}
const NavbarItem = ({ icon: Icon, main }: NavbarItemProps) => {
  return (
    <div
      className={clsx(
        `p-2 bg-gray-300 rounded-md shadow-sm flex items-center justify-center cursor-pointer transition hover:bg-gray-400 focus-visible:outline-gray-60`,
        main && "!bg-sky-500 hover:!bg-sky-600 focus-visible:!outline-sky-600"
      )}
    >
      <Icon size={18} fill="white" />
      {main && (
        <div className="absolute bottom-1 w-1 h-1 bg-sky-500 rounded-full"></div>
      )}
    </div>
  );
};

export default NavbarItem;
