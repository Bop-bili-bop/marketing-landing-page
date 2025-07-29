import classNames from "classnames";
import { useState } from "react";

interface TextAreaProps {
  label: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  error?: string;
  charLimit?: number;
}

const TextArea = ({
  label,
  value = "",
  onChange,
  disabled = false,
  error,
  charLimit = 500,
}: TextAreaProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const charCount = value.length;
  const isOverLimit = charCount > charLimit;

  return (
    <div className="flex flex-col col-span-2 items-start gap-1.5 w-full">
      <label htmlFor="message" className="text-sm font-medium">
        {label}
      </label>
      <textarea
        name="message"
        id="message"
        placeholder="Write your message..."
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={classNames(
          "outline-none border-2 pt-3 pb-6 px-3.5 resize-none rounded-lg w-full transition-colors",
          {
            "bg-neutral-100 cursor-not-allowed border-neutral-200 text-neutral-400":
              disabled,
            "bg-neutral-50 border-neutral-200": !disabled && !isFocused && !error,
            "ring-4 border-[#444ce7] ring-[#444ce7]/12": isFocused && !error,
            "border-[#D92D20]/20 ring-4 ring-[#D92D20]/12": (error || isOverLimit) && isFocused,
            "border-[#D92D20]/20": (error || isOverLimit) && !isFocused,
          }
        )}
      ></textarea>
      {error && (
        <p className="text-sm text-[#D92D20] mt-1">{error}</p>
      )}
      <p
        className={classNames("ml-auto text-sm", {
          "text-neutral-500": !isOverLimit && !error,
          "text-[#D92D20]": isOverLimit || error,
        })}
      >
        {charCount}/{charLimit}
      </p>
    </div>
  );
};

export default TextArea;
