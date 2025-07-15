import Logo from "../assets/Logo.svg";
import LinksNav from "./LinksNav";
import Button from "./Button";
import BurgerIcon from "./BurgerIcon";
import { useState } from "react";
import BurgerMenu from "./BurgerMenu";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleBurgerMenu = () => setIsOpen(prev => !prev)
  return (
    <div className="flex flex-row justify-between items-center gap-24 px-4 pt-4 md:p-8 xl:px-28">
      <img src={Logo} className="w-28 h-8"></img>
      <BurgerIcon 
      onClick={toggleBurgerMenu}
      className="lg:hidden text-neutral-600 hover:text-neutral-900 cursor-pointer 
      ring-0 outline-none rounded-sm focus:ring-4 focus:ring-[#444ce7]/12"
       />
      <BurgerMenu isOpen={isOpen}/>
      
      <div className="hidden lg:block">
        <LinksNav className="flex-row gap-8"/>
      </div>
      <div className="hidden lg:flex flex-row gap-4">
        <Button style="secondary">Learn More</Button>
        <Button style="primary">See pricing</Button>
      </div>
    </div>
  );
};

export default NavBar;
