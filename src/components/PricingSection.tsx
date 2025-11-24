import { useState } from "react";
import Toggle from "./Toggle";
import PriceCard from "./PriceCard";

const pricingData = [
  {
    popular: false,
    planName: "Basic Plan",
    planDescription: "Access to a curated selection of abstract images",
    priceMonthly: 9.99,
    priceAnnualy: 99.99,
    planFacts: [
      "Standard quality images",
      "Limited to personal use",
      "Email support",
    ],
  },
  {
    popular: true,
    planName: "Standart Plan",
    planDescription: "Next-level Integrations, priced economically",
    priceMonthly: 19.99,
    priceAnnualy: 199.99,
    planFacts: [
      "Expanded library with more diverse abstract images",
      "High-resolution images available",
      "Suitable for commercial use",
      "Priority email support",
      "Advanced analytics",
    ],
  },
  {
    popular: false,
    planName: "Premium Plan",
    planDescription: "Experience limitless living for power users",
    priceMonthly: 29.99,
    priceAnnualy: 299.99,
    planFacts: [
        "Full access to the entire image library, including exclusive content",
        "Highest quality images, including premium collections",
        "Commercial and resale rights",
        "Dedicated customer support line",
        "24/7 support response time",
        "Advanced analytics and insights"
    ]
  },
];

const PricingSection = () => {
    const [selected, setSelected] = useState<"monthly" | "annually">("monthly");
  
  return (
    <>
      <Toggle selected={selected} setSelected={setSelected} />
      {pricingData.map((data, key) => (
        <PriceCard key={key} data={data} paymentPlan={selected} />
      ))}
    </>
  );
};

export default PricingSection;
