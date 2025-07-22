interface FeatureProps {
  vertical: boolean;
  featureHeader: string;
  featureDescription: string;
  icon: string;
}

const Feature = ({
  vertical = true,
  featureHeader,
  featureDescription,
  icon,
}: FeatureProps) => {
  return (
    <div
      className={`flex  gap-5 ${
        vertical ? "justify-center items-center flex-col" : "flex-row text-left items-start"
      }`}
    >
      <div className="w-12 h-12 shrink-0 bg-white shadow-sm shadow-[#000000]/10 rounded-full flex justify-center items-center">
        <img src={icon} className="w-6 h-6 mix-blend-multiply" alt="feature-icon" />
      </div>
      <div
        className={`flex flex-col gap-2 ${vertical ? "" : " py-2.5 flex-grow"}`}
      >
        <h4 className="text-neutral-900 text-xl font-semibold w-full">
          {featureHeader}
        </h4>
        <p className="text-neutral-600 text-base w-full">
          {featureDescription}
        </p>
      </div>
    </div>
  );
};

export default Feature;
