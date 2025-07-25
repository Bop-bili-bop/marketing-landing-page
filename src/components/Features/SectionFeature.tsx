import classNames from "classnames";
import type { ReactNode } from "react";

interface SectionFeatureProps {
    children?: ReactNode;
    tagLabel: string;
    sectionHeader: string;
    sectionDescription: string;
    img?: string;
    reverseRowDirection?: boolean
  }

const SectionFeature = ({
  children,
  tagLabel,
  sectionHeader,
  sectionDescription,
  img,
  reverseRowDirection,
}: SectionFeatureProps) => {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-16 py-24">
      <div className="flex flex-col gap-5">
        <div className="flex-col gap-3">
          <h2 className="text-indigo-700 font-semibold">{tagLabel}</h2>
          <h3 className="text-neutral-900 font-semibold text-3xl md:text-5xl">
            {sectionHeader}
          </h3>
        </div>
        <p className="text-neutral-600 text-xl">{sectionDescription}</p>
      </div>

      <section
        className={classNames(
          "grid w-full items-stretch",
          img
            ? "grid-cols-1 lg:grid-cols-2 gap-10"
            : "grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 2xl:gap-16"
        )}
      >
        {!img ? (
          children
        ) : (
          <div className="flex flex-col gap-10 2xl:gap-20">{children}</div>
        )}

        {img && (
          <img
            src={img}
            alt="image"
            className={classNames(
              "rounded-xl shadow-[#000]/10 shadow-xl w-full object-cover h-full",
              { "order-first": reverseRowDirection }
            )}
          />
        )}
      </section>
    </div>
  );
};

export default SectionFeature;
