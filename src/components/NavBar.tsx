import Logo from "../assets/Logo wrap.png";
import LinksNav from "./LinksNav";
import Button from "./Button";

const NavBar = () => {
  return (
    <div className="flex flex-row justify-between items-center gap-24 pt-4 px-28">
      <img src={Logo} className="w-28 h-8"></img>
      <LinksNav />
      <div className="flex flex-row gap-4">
        <Button style="secondary">Learn More</Button>
        <Button style="primary">See pricing</Button>
      </div>
    </div>
  );
};

export default NavBar;
