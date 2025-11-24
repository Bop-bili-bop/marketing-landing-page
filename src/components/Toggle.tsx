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
        <Button type="button"
          size="lg"
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
        type="button"
          size="lg"
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
