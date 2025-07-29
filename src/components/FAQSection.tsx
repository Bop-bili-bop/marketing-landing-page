import type { ReactNode } from "react";

interface FAQSectionProps {
  children: ReactNode;
}

const FAQSection = ({ children }: FAQSectionProps) => {
  return (
    <div className="flex flex-col gap-12 lg:p-24">
      <div className="flex flex-col text-center justify-center items-center gap-5">
        <h4 className="text-3xl md:text-5xl text-neutral-900 font-semibold max-w-xs md:max-w-none">Frequently asked questions</h4>
        <p className="text-lg md:text-xl text-neutral-600">
          Choose any questions you need
        </p>
      </div>
      <div className="flex flex-col gap-7">{children}</div>
    </div>
  );
};

export default FAQSection;
