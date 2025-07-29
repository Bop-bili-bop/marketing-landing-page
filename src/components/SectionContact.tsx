import type { ReactNode } from "react";

interface SectionContactProps {
    children: ReactNode;
}

const SectionContact = ({children} : SectionContactProps) => {
  return (
    <div className="flex flex-col gap-16 py-24">
      <div className="grid lg:grid-cols-2 grid-cols-1 p-8">
            {children}
      </div>
    </div>
  );
};

export default SectionContact;
