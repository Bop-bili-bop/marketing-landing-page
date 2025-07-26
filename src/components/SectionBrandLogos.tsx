import Carousel from "./Carousel";

const SectionBrandLogos = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center pt-12 md:pt-16 xl:pt-24 pb-8">
        <p className="text-base text-neutral-600">
          Used by the teams that you love
        </p>
      </div>
      <div className="-mx-3 xl:-mx-24 xl:pb-24 md:pb-16 pb-12">
        <Carousel autoFill={true} />
      </div>
    </>
  );
};

export default SectionBrandLogos;
