import classNames from "classnames";
import { useState } from "react";
interface InputFieldProps {
  id: string;
  placeholder: string;
  type: string;
  label?: string;
}

const InputField = ({ id, placeholder, type, label }: InputFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="flex flex-col items-start gap-1.5">
      <label className="text-sm font-medium" htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={classNames(
          "py-2.5 px-3.5 outline-none border-2 bg-neutral-50 rounded-lg w-full",
          {
            "ring-4 border-[#444ce7] ring-[#444ce7]/12 ":
              isFocused,
            "ring-0 border-neutral-200": !isFocused,
          },
        )}
      />
    </div>
  );
};

export default InputField;
