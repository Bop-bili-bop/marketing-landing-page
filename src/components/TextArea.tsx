import classNames from "classnames";
import { forwardRef } from "react";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  charLimit?: number;
  value?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    { label, error, charLimit = 500, value = "", disabled = false, ...rest },
    ref,
  ) => {
    const charCount = value?.length || 0;
    const isOverLimit = charCount > charLimit;

    return (
      <div className="flex flex-col col-span-2 items-start gap-1.5 w-full">
        <label htmlFor="message" className="text-sm font-medium">
          {label}
        </label>
        <textarea
          id="message"
          placeholder="Write your message..."
          disabled={disabled}
          ref={ref}
          className={classNames(
            "outline-none border-2 pt-3 pb-6 px-3.5 resize-none rounded-lg w-full transition-colors",
            "bg-neutral-50 border-neutral-200",
            "focus:ring-4 focus:border-[#444ce7] focus:ring-[#444ce7]/12",
            {
              "bg-neutral-100 cursor-not-allowed border-neutral-200 text-neutral-400":
                disabled,
              "border-[#D92D20] focus:ring-4 focus:ring-[#D92D20]/12":
                (error || isOverLimit),
              
            },
          )}
          {...rest}
        />
        {error && <p className="text-sm text-[#D92D20] mt-1">{error}</p>}
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
  },
);

export default TextArea;
