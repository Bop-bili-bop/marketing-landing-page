import type { ReactNode } from "react";

interface SectionFeatureProps {
  children?: ReactNode;
  tagLabel: string;
  sectionHeader: string;
  sectionDescription: string;
  vertical: boolean;
  img?: string;
}

const SectionFeature = ({
  children,
  tagLabel,
  sectionHeader,
  sectionDescription,
  vertical,
  img,
}: SectionFeatureProps) => {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-16 py-24">
      <div className="flex flex-col gap-5 ">
        <div className="flex-col gap-3">
          <h2 className="text-indigo-700 font-semibold">{tagLabel}</h2>
          <h3 className="text-neutral-900 font-semibold text-3xl md:text-5xl">
            {sectionHeader}
          </h3>
        </div>
        <p className="text-neutral-600 text-xl">{sectionDescription}</p>
      </div>
      <section
        className={`grid  ${
          vertical
            ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 2xl:gap-16"
            : "grid-cols-1 lg:grid-cols-2 gap-10  "
        }  w-full`}
      >
        {children}
        {img && (
          <img
            src={img}
            className="rounded-xl shadow-[#000]/10 shadow-xl w-full  h-full"
            alt="image"
          />
        )}
      </section>
    </div>
  );
};

export default SectionFeature;
