import { useState } from "react";
import minusIcon from "../assets/Vector.svg";
import plusIcon from "../assets/plus-circle-svgrepo-com.svg";
import classNames from "classnames";

interface AccordionProps {
  question: string;
  answer: string;
}

const Accordion = ({ question, answer }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="border-b-2 last:border-0 pb-7 border-neutral-300">
      <div
        className="flex flex-row justify-between gap-4 items-start cursor-pointer"
        onClick={toggleAccordion}
      >
        <div className="flex flex-col gap-2 text-left">
          <h4 className="text-lg text-neutral-900 font-medium">{question}</h4>
        </div>
        <img
          src={isOpen ? minusIcon : plusIcon}
          className={classNames(
            "mt-1 w-5 h-5 transition-transform duration-300",
            {
              "rotate-180": isOpen,
              "rotate-0": !isOpen,
            },
          )}
          alt="accordion toggle"
        />
      </div>

      <div
        className={classNames(
          "overflow-hidden transition-all duration-300 ease-in",
          {
            "max-h-40 opacity-100 mt-2": isOpen,
            "max-h-0 opacity-0": !isOpen,
          },
        )}
      >
        <p className="text-base text-neutral-600">{answer}</p>
      </div>
    </div>
  );
};

export default Accordion;
