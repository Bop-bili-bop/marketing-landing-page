import LinksNav from "./LinksNav";
import Logo from "../assets/Logo.svg";

interface BurgerMenuProps{
  isOpen: boolean;
}

const BurgerMenu = ({ isOpen }: BurgerMenuProps) => {
  return (
    <div
      className={`lg:hidden bg-white fixed w-60 h-full inset-0 left-0 top-0 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <img src={Logo} className="m-2 " />
      <LinksNav className="flex-col border-t-2 border-neutral-300 pt-3 gap-2 m-3" />
    </div>
  );
};

export default BurgerMenu;
