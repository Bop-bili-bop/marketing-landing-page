import type { ReactNode } from "react";
import buildingIcon from "../assets/FeatureIcons/building-line.svg";
import phoneIcon from "../assets/FeatureIcons/phone-line.svg"
import mailIcon from "../assets/FeatureIcons/mail-line.svg"

interface SectionContactProps {
  children: ReactNode;
}

const SectionContact = ({ children }: SectionContactProps) => {
  const contactInfo = [
    {data: "123 Maple Street, Springfield, IL, USA",
      icon: buildingIcon
    },
    {data: "+1 (650) 555-0198",
      icon: phoneIcon
    },
    {data: "hello@abstractly.com",
      icon: mailIcon
    },
  ];
  return (
    <div className="flex flex-col py-24">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 p-8">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <h4 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-neutral-900">
              Talk to our team
            </h4>
            <p className="text-lg md:text-xl text-neutral-600">
              We're committed to delivering the support you require to make your
              experience as smooth as possible.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            {contactInfo.map((data, key) => (
              <div key={key} className="flex flex-row gap-3 items-center">
                <div className="w-12 h-12 shrink-0 bg-white shadow-sm shadow-[#000000]/10 rounded-full flex justify-center items-center">
                  <img
                    src={data.icon}
                    className="w-6 h-6 mix-blend-multiply"
                    alt="contact-icon"
                  />
                </div>
                <p className="text-base text-neutral-600 font-medium">{data.data}</p>
              </div>
            ))}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default SectionContact;
