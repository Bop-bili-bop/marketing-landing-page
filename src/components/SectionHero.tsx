import HeroImg from "../assets/Hero image.svg"
import Button from "./Button";

const SectionHero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col xl:flex-row gap-12 xl:pb-24 md:pb-16 pb-12 xl:gap-8 items-center "
    >
      <div className="flex flex-col gap-8 lg:gap-16 w-full max-w-1xl">
        <div className="flex flex-col gap-4 lg:gap-6">
          <div className="text-4xl lg:text-5xl xl:text-6xl text-shadow-lg font-semibold">
            Well crafted abstract images
          </div>
          <div className="text-lg xl:text-xl text-neutral-600">
            High quality abstract images for your projects, wallpaper and
            presentations.
          </div>
        </div>
        <div className="flex flex-row gap-4 lg:gap-8">
          <Button type="button" size="2xl" variant="secondary">Learn more</Button>
          <Button type="button" size="2xl" variant="primary">See pricing</Button>
        </div>
      </div>
      <img
        src={HeroImg}
        className="w-full h-auto object-contain max-w-7xl mx-auto"
      ></img>
    </section>
  );
};

export default SectionHero;
