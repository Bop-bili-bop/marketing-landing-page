import Carousel from "./Carousel";

const SectionBrandLogos = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-12 md:py-16 xl:py-24 gap-8">
        <p className="text-base text-neutral-600">
          Used by the teams that you love
        </p>
      </div>
      <div className="-mx-3 xl:-mx-24">
        <Carousel autoFill={true} />
      </div>
    </>
  );
};

export default SectionBrandLogos;
