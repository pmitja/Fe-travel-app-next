import Image from "next/image";
import Button from "../components/Button";
import Navbar from "../components/navbar/Navbar";
import WizardModal from "../components/modals/WizardModal";
import { DiscoverButton } from "../components/DiscoverButton";

const Discover = () => {
  return (
    <div className="bg-gray-100 w-full h-full">
      <div className="w-full flex overflow-hidden relative bg-black h-2/5">
        <Image
          alt="Logo"
          src="/images/hero1.jpg"
          className="opacity-40 object-cover"
          fill
        />
        <div className="flex flex-col justify-end px-3 mb-5">
          <p className="mt-5 text-lg text-white opacity-90">Hey user,</p>
          <h1 className=" text-2xl md:text-4xl text-white font-bold drop-shadow-lg">
            Discover your next adventure!
          </h1>
        </div>
      </div>
      <div className="w-full flex justify-center translate-y-[-17.5px]">
        <DiscoverButton />
      </div>
      <Navbar />
      <WizardModal />
    </div>
  );
};

export default Discover;
