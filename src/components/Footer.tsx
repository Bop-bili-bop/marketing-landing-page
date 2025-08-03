import LinksNav from "./LinksNav";
import SocialMediaIcons from "./SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center gap-8">
      <LinksNav className="gap-4" size="md" />
      <div className="flex flex-col justify-center items-center gap-4">
        <SocialMediaIcons />
        <p className="text-sm">© 2024 Abstractly, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
