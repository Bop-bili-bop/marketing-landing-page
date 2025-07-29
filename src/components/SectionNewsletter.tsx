import newsPicture from "../assets/Image.svg";
import checkIcon from "../assets/check-fill.svg";

const SectionNewsletter = () => {
  const facts = [
    "Exclusive access to new abstract images and collections",
    "Unlock special promotions only for subscribers",
    "Regular doses of artistic inspiration",
  ];
  return (
    <div className="flex flex-col justify-center items-center lg:flex-row gap-8 py-8">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-16">
          <h4 className="text-5xl font-semibold">
            Get the finest curated abstracts delivered weekly to your inbox
          </h4>
          <div className="flex flex-col gap-5">
            {facts.map((fact, key) => (
              <div key={key} className="flex flex-row items-center gap-3">
                <img src={checkIcon} className="w-6 h-6" alt="check" />
                <p  className="text-lg text-neutral-600">
                  {fact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <img src={newsPicture} className="w-full h-full" alt="picture" />
    </div>
  );
};

export default SectionNewsletter;
