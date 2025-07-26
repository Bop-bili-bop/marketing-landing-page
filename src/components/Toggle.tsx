import Button from "./Button";
import classNames from "classnames";

interface ToggleProps {
  selected: "monthly" | "annually";
  setSelected: (value: "monthly" | "annually") => void;
}

const Toggle = ({ selected, setSelected }: ToggleProps) => {
  return (
    <>
      <div></div>
      <div className="flex justify-center gap-4">
        <Button
          onClick={() => setSelected("monthly")}
          variant={
            classNames({
              secondary: selected === "monthly",
              toggle: selected !== "monthly",
            }) as "secondary" | "toggle"
          }
        >
          Monthly
        </Button>
        <Button
          onClick={() => setSelected("annually")}
          variant={
            classNames({
              secondary: selected === "annually",
              toggle: selected !== "annually",
            }) as "secondary" | "toggle"
          }
        >
          Annual
        </Button>
      </div>
      <div></div>
    </>
  );
};

export default Toggle;
