import classNames from "classnames";

const styles = {
  primary: "bg-indigo-700 hover:bg-indigo-800  text-white ",
  secondary: "bg-white text-neutral-900 border-neutral-200 hover:bg-neutral-50",
  toggle: "bg-white text-neutral-600 hover:bg-neutral-200/20 shadow-none",
};
interface ButtonProps {
  variant: "primary" | "secondary" | "toggle";
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  size:  "md" | "lg" | "xl" | "2xl";
}

const Button = ({
  variant,
  disabled,
  onClick,
  children,
  className,
  size,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={classNames(
        "text-center font-medium text-base shadow-md ring-0 focus:ring-4 focus:ring-[#444ce7]/12 outline-none rounded-md gap-1.5 cursor-pointer disabled:bg-gray-100 disabled:text-gray-400 disabled:shadow-none disabled:cursor-not-allowed",
        styles[variant],
        className,
        {
          "py-2.5 px-3.5": size === "md",
          "py-2.5 px-4": size === "lg",
          "py-3 px-5": size === "xl",
          "py-4 px-6 text-lg": size === "2xl",
        },
      )}
    >
      <span className="px-0.5">{children}</span>
    </button>
  );
};

export default Button;
