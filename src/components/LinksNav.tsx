import Links from "../utils/links";

interface LinksNavProps {
  className: string;
}

const LinksNav = ({ className }: LinksNavProps) => {
  return (
    <ul id="links" className={`flex font-medium text-neutral-700 ${className}`}>
      {Links.map((link) => (
        <li>
          <a
            href="#"
            className="px-0.5 text-neutral-600 hover:text-neutral-900 cursor-pointer 
                ring-0 outline-none rounded-sm focus:ring-4 focus:ring-[#444ce7]/12"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default LinksNav;
