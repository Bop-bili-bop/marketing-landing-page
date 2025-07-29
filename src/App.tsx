import Main from "./components/Main";
import NavBar from "./components/NavBar";
import SectionBrandLogos from "./components/SectionBrandLogos";
import SectionFeature from "./components/Features/SectionFeature";
import SectionHero from "./components/SectionHero";
import featurePic from "./assets/unsplash_rAtzDB6hWrU.svg";
import reversedFeaturePic from "./assets/unsplash_dsaasd.svg";
import MappedFeature from "./components/Features/MappedFeature";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import Accordion from "./components/Accordion";
import { FAQData } from "./utils/FAQData";
import CustomerSupport from "./components/CustomerSupport";
import SectionNewsletter from "./components/SectionNewsLetter";
import SectionContact from "./components/SectionContact";
import InputField from "./components/InputField";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="min-h-screen w-full bg-linear-to-r from-[#f9fafb] to-[#d2d6db] p-4">
      <NavBar />
      <Main>
        <SectionHero />
        <SectionBrandLogos />
        <SectionFeature
          tagLabel="Premium abstract images"
          sectionHeader="Easy access to top quality images"
          sectionDescription="In a world where storytelling constantly evolves, we lead with groundbreaking images designed for your presentation excellence."
        >
          <MappedFeature vertical={true} sliceStart={0} sliceEnd={6} />
        </SectionFeature>
        <SectionFeature
          tagLabel="High quality images"
          sectionHeader="For designers, by designers"
          sectionDescription="Unleash boundless creativity with a large repository of images optimized for designers"
          img={featurePic}
        >
          <MappedFeature vertical={false} sliceStart={6} sliceEnd={9} />
        </SectionFeature>
        <SectionFeature
          tagLabel="Best-in-class support"
          sectionHeader="Convenience and licensing that empowers"
          sectionDescription="In a world where storytelling constantly evolves,don't let licensing and poor support hold you down."
          img={reversedFeaturePic}
          reverseRowDirection
        >
          <MappedFeature vertical={false} sliceStart={9} sliceEnd={12} />
        </SectionFeature>
        <SectionFeature
          tagLabel="Pricing Tiers"
          sectionHeader="Fit for all your needs"
          sectionDescription="Pick the plan that suits you today and step up as your demands grow - our flexible options have your journey mapped out."
          pricing={true}
        >
          <PricingSection />
        </SectionFeature>
        <FAQSection>
          {FAQData.map((data, key) => (
            <Accordion
              key={key}
              question={data.qusetion}
              answer={data.answer}
            />
          ))}
          <CustomerSupport />
        </FAQSection>
        <SectionNewsletter />
        <SectionContact>
          <ContactForm/>
        </SectionContact>
      </Main>
    </div>
  );
}

export default App;
