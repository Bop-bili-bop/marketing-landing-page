import type { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}
const Main = ({children} : MainProps) => {
  return (
    <div className="bg-white w-full min-h-screen py-12 px-3 xl:p-24 mt-4 shadow-lg">
      {children}
    </div>
  );
};

export default Main;
