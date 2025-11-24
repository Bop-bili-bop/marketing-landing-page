import newsPicture from "../assets/Image.svg";
import checkIcon from "../assets/check-fill.svg";
import Button from "./Button";
import InputField from "./InputField";

const SectionNewsletter = () => {
  const facts = [
    "Exclusive access to new abstract images and collections",
    "Unlock special promotions only for subscribers",
    "Regular doses of artistic inspiration",
  ];
  return (
    <div className="grid grid-cols-1 justify-center items-center lg:grid-cols-2 gap-8 py-8">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-12">
            <h4 className="text-5xl font-semibold">
              Get the finest curated abstracts delivered weekly to your inbox
            </h4>
            <div className="flex flex-col gap-5">
              {facts.map((fact, key) => (
                <div key={key} className="flex flex-row items-center gap-3">
                  <img src={checkIcon} className="w-6 h-6" alt="check" />
                  <p className="text-lg text-neutral-600">{fact}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row w-full max-w-md gap-4 ">
              <InputField
                type="email"
                placeholder="Enter your email"
                id="email"
              />
              <Button type="button" size="md" variant="primary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
      <img src={newsPicture} className="w-full h-full" alt="picture" />
    </div>
  );
};

export default SectionNewsletter;
