import Marquee from "react-fast-marquee";
import { LOGOS } from "../utils/importLogos";

const Carousel = ({...marqueeProps }) => {
  return (
    <div className="">
        <Marquee {...marqueeProps}>
          {LOGOS.map((el) => (
            <img src={el} />
          ))}
        </Marquee>
    </div>
  );
};

export default Carousel;
