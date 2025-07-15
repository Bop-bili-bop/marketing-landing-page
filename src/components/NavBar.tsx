import Logo from "../assets/Logo wrap.png";
import LinksNav from "./LinksNav";
import Button from "./Button";
import Burger from "../assets/Button.svg"

const NavBar = () => {
  return (
    <div className="flex flex-row justify-between items-center gap-24 px-4 pt-4 md:p-8 xl:px-28">
      <img src={Logo} className="w-28 h-8"></img>
      <img src={Burger} alt="burger" className="block xl:hidden hover:text-neutral-900 cursor-pointer"/>
      <div className="hidden xl:block">
        <LinksNav />
      </div>
      <div className="hidden xl:flex flex-row gap-4">
        <Button style="secondary">Learn More</Button>
        <Button style="primary">See pricing</Button>
      </div>
    </div>
  );
};

export default NavBar;
