"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

interface DesitnationTypeCardProps {
  label: string;
  srcImage: string;
  onChange: (value: string) => void;
}

const DesitnationTypeCard = ({
  label,
  srcImage,
  onChange,
}: DesitnationTypeCardProps) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div
      className="relative h-auto cursor-pointer m-1 shadow-md"
      onClick={() => {
        onChange(label);
        setIsSelected(!isSelected);
      }}
    >
      <Image
        alt="Type image"
        src={srcImage}
        height={1000}
        width={1000}
        className={clsx(
          "rounded-md object-cover h-full",
          isSelected && "outline outline-offset-2 outline-sky-500 rounded-md"
        )}
      />
      <span className="absolute bottom-1 left-2 text-white font-semibold">
        {label}
      </span>
    </div>
  );
};

export default DesitnationTypeCard;
