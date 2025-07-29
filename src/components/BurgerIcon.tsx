interface BurgerIconProps {
  className: string;
  onClick: () => void;
  isOpen: boolean;
}

const BurgerIcon = ({ className, onClick, isOpen }: BurgerIconProps) => {
  return (
    <div
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label="toggle-menu"
      className={className}
    >
      {isOpen ? (
        <svg
          fill="none"
          width="20"
          height="20"
          viewBox="-2 -2 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.5 3.33331H17.5V4.99998H2.5V3.33331ZM2.5 9.16665H17.5V10.8333H2.5V9.16665ZM2.5 15H17.5V16.6666H2.5V15Z"
            fill="currentColor"
          />
        </svg>
      )}
    </div>
  );
};

export default BurgerIcon;
