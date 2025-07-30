import classNames from "classnames";
import { forwardRef } from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  placeholder: string;
  type: string;
  label?: string;
  error?: string;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ id, placeholder, type, label, error, ...rest }, ref) => {

    return (
      <div className="flex flex-col items-start gap-1.5 w-full">
        {label && (
          <label className="text-sm font-medium" htmlFor={id}>
            {label}
          </label>
        )}

        <input
          id={id}
          type={type}
          placeholder={placeholder}
          ref={ref}
          className={classNames(
            "py-2.5 px-3.5 outline-none border-2 border-neutral-200 bg-neutral-50 rounded-lg w-full",
            "ring-0 focus:ring-4 focus:border-[#444ce7] focus:ring-[#444ce7]/12",
            {
              "border-red-500": error,
            },
          )}
          {...rest}
        />

        {error && <span className="text-sm text-red-600 mt-1">{error}</span>}
      </div>
    );
  },
);

export default InputField;
