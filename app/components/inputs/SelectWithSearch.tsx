import { Select } from "antd";
import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface SelectWithSearchProps {
  label: string;
  id: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}

const SelectWithSearch = ({
  label,
  id,
  register,
  required,
  errors,
  disabled,
  onChange,
  options,
}: SelectWithSearchProps) => {
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
      <div className="mt-2"></div>
      <Select
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        className={clsx(
          "",
          errors[id] && "focus:ring-rose-500",
          disabled && "opacity-50 cursor-default"
        )}
        showSearch
        style={{
          width: 200,
        }}
        placeholder="Search to Select"
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? "").includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
            .toLowerCase()
            .localeCompare((optionB?.label ?? "").toLowerCase())
        }
        options={options}
        onChange={(event) => onChange(options[event - 1].label)}
      />
    </div>
  );
};

export default SelectWithSearch;
