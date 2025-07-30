import classNames from "classnames";
import LinksNav from "./LinksNav";
import Logo from "../assets/Logo.svg";

interface BurgerMenuProps {
  isOpen: boolean;
}

const BurgerMenu = ({ isOpen }: BurgerMenuProps) => {
  return (
    <div
      className={classNames(
        "lg:hidden bg-white fixed w-60 h-full inset-0 right-0 top-0 z-20 transform transition-transform duration-300 ease-in-out",
        { "translate-x-0": isOpen, "-translate-x-full": !isOpen },
      )}
    >
      <img src={Logo} className="m-2" /> 
      <LinksNav size="lg" className="flex-col border-t-2 border-neutral-300 pt-3 gap-2 m-3" />
    </div>
  );
};

export default BurgerMenu;
