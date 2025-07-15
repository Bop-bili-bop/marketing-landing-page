import Links from "../utils/links";

const LinksNav = ({className}:{className:string}) => {
  return (
    <div
      id="links"
      className={`flex font-medium text-neutral-700 ${className}`}
    >
      {Links.map((link) => (
        <a
          href="#"
          className="px-0.5 text-neutral-600 hover:text-neutral-900 cursor-pointer 
      ring-0 outline-none rounded-sm focus:ring-4 focus:ring-[#444ce7]/12"
        >
          {link}
        </a>
      ))}
    </div>
  );
};

export default LinksNav;
