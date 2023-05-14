"use client";

import { useMemo, useState } from "react";
import DesitnationTypeCard from "../DestinationTypeCard";
import Modal from "./Modal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export const destinationTypes = [
  {
    label: "Nature",
  },
  {
    label: "Culture",
  },
  {
    label: "Urban",
  },
  {
    label: "Wildlife",
  },
  {
    label: "Shopping",
  },
  {
    label: "Beach",
  },
  {
    label: "Adventures",
  },
  {
    label: "Food",
  },
];

export const destinationContient = [
  {
    label: "Europe",
    url: "/images/europe.jpg",
  },
  {
    label: "Africa",
    url: "/images/africa.jpg",
  },
  {
    label: "North America",
    url: "/images/northAmerica.jpg",
  },
  {
    label: "South America",
    url: "/images/southAmerica.jpg",
  },
  {
    label: "Asia",
    url: "/images/asia.jpg",
  },
  {
    label: "Australia",
    url: "/images/australia.jpg",
  },
  {
    label: "Antartica",
    url: "/images/antartica.jpg",
  },
];

enum STEPS {
  TYPE = 0,
  CONTINENT = 1,
  INFO = 2,
}

const WizardModal = () => {
  const [step, setStep] = useState(STEPS.TYPE);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      types: [],
      continent: "",
    },
  });

  const continent = watch("continent");

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (step !== STEPS.INFO) {
      return onNext();
    }
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.INFO) {
      return "Generate";
    }

    return "Next";
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.TYPE) {
      return undefined;
    }

    return "Back";
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <div
        className="
          grid 
          grid-cols-1 
          md:grid-cols-3 
          gap-3
          max-h-[70vh]
          overflow-y-auto
        "
      >
        {destinationTypes.map((type) => {
          return (
            <DesitnationTypeCard
              label={type.label}
              srcImage={`/images/${type.label}.jpg`}
              key={type.label}
            />
          );
        })}
      </div>
    </div>
  );

  if (step === STEPS.CONTINENT) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <div
          className="
            grid 
            grid-cols-1 
            md:grid-cols-3 
            gap-3
            max-h-[70vh]
            overflow-y-auto
          "
        >
          {destinationContient.map((type) => {
            return (
              <DesitnationTypeCard
                label={type.label}
                srcImage={type.url}
                key={type.label}
              />
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <Modal
      disabled={false}
      isOpen={true}
      title="What do you love most about traveling ?"
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.TYPE ? undefined : onBack}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
};

export default WizardModal;
