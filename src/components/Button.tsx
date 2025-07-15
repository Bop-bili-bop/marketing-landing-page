const styles = {
  primary: "bg-indigo-700 hover:bg-indigo-800  text-white ",
  secondary: "bg-white text-neutral-900 border-neutral-200 hover:bg-neutral-50",
};

const Button = ({ style, disabled, onClick, children } : {style: string, children:string}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`flex justify-center font-medium text-base px-[26px] py-3 
        shadow-md ring-0 focus:ring-4 focus:ring-[#444ce7]/12 
        outline-none rounded-md gap-1.5 cursor-pointer 
        disabled:bg-gray-100 disabled:text-gray-400 disabled:shadow-none disabled:cursor-not-allowed 
        ${styles[style]}`}
    >
      {children}
    </button>
  );
};

export default Button;
