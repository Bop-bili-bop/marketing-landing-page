const BurgerIcon = ({className, onClick} : {className:string}) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      tabIndex={0}
      onClick={onClick}
      type="button"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="toggle-menu"
      className={className}
      onKeyDown={e => {
        if(e.key === 'Enter' || e.key === ' '){
            e.preventDefault();
            onClick()
        }
      }}
    >
      <path
        d="M2.5 3.33331H17.5V4.99998H2.5V3.33331ZM2.5 9.16665H17.5V10.8333H2.5V9.16665ZM2.5 15H17.5V16.6666H2.5V15Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default BurgerIcon;
