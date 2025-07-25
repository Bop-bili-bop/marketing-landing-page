import checkIcon from "../assets/check-fill.svg"
import Button from "./Button";

const PriceCard = () => {
  return (
    <div className="flex flex-col justify-center w-full p-8 gap-8 text-left border-2 border-neutral-200 shadow-sm">
      <div className="flex flex-col gap-2">
        <h5 className="text-2xl font-semibold">Basic Plan</h5>
        <p className="text-base text-neutral-600">
          Access to a curated selection of abstract images
        </p>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row items-end gap-0.5 ">
          <h4 className="text-5xl font-semibold">$9.99</h4>
          <p className="text-base">/ month</p>
        </div>
        <p className="text-base text-neutral-600 gap-2">Billed monthly</p>
      </div>
      <div className="flex flex-col gap-5 h-full">
        <div className="flex flex-row gap-3">
          <img src={checkIcon} className="w-6 h-6" alt="check-icon" />
          <p className="text-base text-neutral-600">Standart quality images</p>
        </div>
        <div className="flex flex-row gap-3">
          <img src={checkIcon} className="w-6 h-6" alt="check-icon" />
          <p className="text-base text-neutral-600">Standart quality images</p>
        </div>
        <div className="flex flex-row gap-3">
          <img src={checkIcon} className="w-6 h-6" alt="check-icon" />
          <p className="text-base text-neutral-600">Standart quality images</p>
        </div>
      </div>
      <Button variant="secondary">Buy now</Button>
    </div>
  );
};

export default PriceCard;
