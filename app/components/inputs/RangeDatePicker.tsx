import { DatePicker } from "antd";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

const { RangePicker } = DatePicker;

interface RangeDatePickerProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
  label: string;
  id: string;
  onChange: (value: string) => void;
}

const RangeDatePicker = ({
  label,
  id,
  disabled,
  errors,
  register,
  onChange,
}: RangeDatePickerProps) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="
          block 
          text-sm 
          font-medium 
          leading-6 
          text-gray-900
        "
      >
        {label}
      </label>
      <div className="mt-2">
        <RangePicker
          size={"large"}
          format={"DD MMM YYYY"}
          className="
            w-full 
            rounded-md 
            border-0 
            py-1.5 
            text-gray-900 
            shadow-sm 
            ring-1 
            ring-inset 
            ring-gray-300 
            placeholder:text-gray-400 
            focus:ring-2 
            focus:ring-inset 
            focus:ring-sky-600 
            sm:text-sm 
            sm:leading-6
          "
          onChange={(event) => {
            let dates: string[] = [];
            event?.map((date) => {
              if (date) {
                return dates.push(date?.format("DD MMM YYYY"));
              }
            });
            onChange(dates.join(" "));
          }}
        />
      </div>
    </div>
  );
};

export default RangeDatePicker;
