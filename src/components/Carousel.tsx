import Marquee from "react-fast-marquee";
import { LOGOS } from "../utils/importLogos";

const Carousel = ({ className, ...marqueeProps }) => {
  return (
    <Marquee {...marqueeProps} className={className}>
      {LOGOS.map((el) => (
        <img src={el} alt="logo" className="w-[218px] h-[96px] p-6 mx-4 md:mx-2 xl:mx-8" />
      ))}
    </Marquee>
  );
};

export default Carousel;
