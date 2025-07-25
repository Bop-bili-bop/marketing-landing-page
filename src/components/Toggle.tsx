import { useState } from "react";
import Button from "./Button";
import classNames from "classnames";

const Toggle = () => {
  const [selected, setSelected] = useState<"monthly" | "annual">("monthly");

  return (
    <>
      <div></div>
      <div className="flex justify-center gap-4">
        <Button
          onClick={() => setSelected("monthly")}
          variant={classNames({
            secondary: selected === "monthly",
            toggle: selected !== "monthly",
          }) as "secondary" | "toggle"}
        >
          Monthly
        </Button>
        <Button
          onClick={() => setSelected("annual")}
          variant={classNames({
            secondary: selected === "annual",
            toggle: selected !== "annual",
          }) as "secondary" | "toggle"}
        >
          Annual
        </Button>
      </div>
      <div></div>
    </>
  );
};

export default Toggle;
