import classNames from "classnames";
import Links from "../utils/links";

interface LinksNavProps {
  className?: string;
  size: string;
}

const LinksNav = ({ className, size }: LinksNavProps) => {
  return (
    <ul id="links" className={`flex font-medium text-neutral-700 ${className}`}>
      {Links.map((link, key) => (
        <li>
          <ul>
            <a
              key={key}
              href="#"
              className={classNames(
                "px-0.5 text-neutral-600 outline-none rounded-sm cursor-pointer",
                "ring-0 hover:text-neutral-900 focus:ring-4 focus:ring-[#444ce7]/12",
                {
                  "text-base": size === "lg",
                  "text-sm": size === "md",
                },
              )}
            >
              {link}
            </a>
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default LinksNav;
