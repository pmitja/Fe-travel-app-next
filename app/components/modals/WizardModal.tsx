"use client";

import { useMemo, useState } from "react";
import DesitnationTypeCard from "../DestinationTypeCard";
import Modal from "./Modal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "../inputs/Input";
import useWizardModal from "@/app/hooks/useWizardModal";
import RangeDatePicker from "../inputs/RangeDatePicker";
import CurrencyInput from "../inputs/CurrencyInput";
import SelectWithSearch from "../inputs/SelectWithSearch";

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
  const wizardModal = useWizardModal();

  const [step, setStep] = useState(STEPS.TYPE);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      type: "",
      continent: "",
      date: "",
      budget: "",
      style: "",
      start: "",
    },
  });

  const type = watch("type");
  const continent = watch("continent");
  const date = watch("date");
  const budget = watch("budget");
  const style = watch("style");
  const start = watch("start");

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
    console.log({
      ...data,
    });
  };

  const setCustomValue = (id: string, value: any) => {
    console.log(id, value);
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
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
              onChange={(type) => setCustomValue("type", type)}
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
                onChange={(continent) => setCustomValue("continent", continent)}
                key={type.label}
              />
            );
          })}
        </div>
      </div>
    );
  }

  if (step === STEPS.INFO) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <div
          className="
            grid 
            grid-cols-1 
            gap-3
            max-h-[70vh]
            overflow-y-auto
          "
        >
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <RangeDatePicker
              label="Dates"
              id="date"
              disabled={isLoading}
              register={register}
              errors={errors}
              onChange={(date) => setCustomValue("date", date)}
            />
            <CurrencyInput
              label="Set a budget"
              id="budget"
              disabled={isLoading}
              register={register}
              errors={errors}
              prefix="€"
              onChange={(budget) => setCustomValue("budget", budget)}
            />
            <SelectWithSearch
              label="Set a travel style"
              id="style"
              disabled={isLoading}
              register={register}
              errors={errors}
              onChange={(style) => setCustomValue("style", style)}
              options={[
                {
                  value: "1",
                  label: "Budget",
                },
                {
                  value: "2",
                  label: "Luxury",
                },
                {
                  value: "3",
                  label: "Active",
                },
              ]}
            />
            <Input
              disabled={isLoading}
              register={register}
              errors={errors}
              required
              id="start"
              label="Set a starting point"
              type="text"
              onChange={(start) => setCustomValue("start", start)}
            />
          </form>
        </div>
      </div>
    );
  }

  return (
    <Modal
      disabled={isLoading}
      isOpen={wizardModal.isOpen}
      title="What do you love most about traveling ?"
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.TYPE ? undefined : onBack}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      onClose={wizardModal.onClose}
    />
  );
};

export default WizardModal;
