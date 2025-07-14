import Links from "../utils/links";

const LinksNav = () => {
  return (
    <div id="links" className="flex flex-row gap-8 font-medium text-neutral-700">
      {Links.map((link) => (
        <div>{link}</div>
      ))}
    </div>
  );
};

export default LinksNav;
