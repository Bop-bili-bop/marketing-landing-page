import classNames from "classnames";
import checkIcon from "../assets/check-fill.svg";
import Button from "./Button";

interface PriceCardProps {
  paymentPlan: "monthly" | "annually";
  data: {
    popular: boolean;
    planName: string;
    planDescription: string;
    priceMonthly: number;
    priceAnnualy: number;
    planFacts: string[];
  };
}

const PriceCard = ({ paymentPlan, data }: PriceCardProps) => {
  return (
    <div
      className={classNames(
        "flex flex-col justify-center rounded-lg h-full justify-items-stretch w-full p-8 gap-8 text-left border ",
        { "border-indigo-600 shadow-2xl": data.popular },
        { "border-neutral-200 shadow-sm": !data.popular },
      )}
    >
      <div className="flex flex-col gap-8 flex-grow">
        {data.popular && (
          <h5 className=" text-center bg-indigo-50 text-xl py-4 font-bold text-indigo-700">
            Most popular
          </h5>
        )}
        <div className="flex flex-col gap-2">
          <h5 className="text-2xl font-semibold">{data.planName}</h5>
          <p className="text-base text-neutral-600">{data.planDescription}</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-end gap-0.5 ">
            <h4 className="text-5xl font-semibold">
              ${" "}
              {paymentPlan === "monthly"
                ? data.priceMonthly
                : data.priceAnnualy}
            </h4>
            <p className="text-base">/ {paymentPlan}</p>
          </div>
          <p className="text-base text-neutral-600 ">Billed {paymentPlan}</p>
        </div>
        <div className="flex flex-col gap-5 h-full pb-10">
          {data.planFacts.map((fact, i) => (
            <div key={i} className="flex flex-row gap-3">
              <img src={checkIcon} className="w-6 h-6" alt="check-icon" />
              <p className="text-base text-neutral-600">{fact}</p>
            </div>
          ))}
        </div>
      </div>
      <Button
        className="mt-8 border border-neutral-200"
        variant={data.popular ? "primary" : "secondary"}
      >
        Buy now
      </Button>
    </div>
  );
};

export default PriceCard;
