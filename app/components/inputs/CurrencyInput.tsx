import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { InputNumber } from "antd";

interface CurrencyInputProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
  label: string;
  id: string;
  prefix: string;
  onChange: (value: string) => void;
}

const CurrencyInput = ({
  label,
  id,
  disabled,
  errors,
  register,
  prefix,
  onChange,
}: CurrencyInputProps) => {
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
        <InputNumber
          formatter={(value) =>
            `${prefix} ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
          size={"large"}
          className="
            w-full
            ring-gray-300
            focus:ring-[1.5px] 
            focus:ring-inset 
            focus:ring-sky-600
          "
          onChange={(event) => onChange("" + event)}
        />
      </div>
    </div>
  );
};

export default CurrencyInput;
