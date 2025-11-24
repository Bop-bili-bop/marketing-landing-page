import Marquee from "react-fast-marquee";
import { LOGOS } from "../utils/importBrandLogos";


const Carousel = ({ ...marqueeProps }) => {
  return (
    <Marquee {...marqueeProps} className="w-full">
      {LOGOS.map((el) => (
        <img src={el} alt="logo" className="w-[218px] h-[96px] p-6 mx-4 md:mx-2 xl:mx-8" />
      ))}
    </Marquee>
  );
};

export default Carousel;
