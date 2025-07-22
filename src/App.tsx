import Feature from "./components/Features/Feature";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import SectionBrandLogos from "./components/SectionBrandLogos";
import SectionFeature from "./components/Features/SectionFeature";
import SectionHero from "./components/SectionHero";
import { FEATURE_ICONS } from "./utils/importFeatureIcons";
import featurePic from "./assets/unsplash_rAtzDB6hWrU.svg";

function App() {
  return (
    <div className="min-h-screen w-full bg-linear-to-r from-[#f9fafb] to-[#d2d6db] p-4">
      <NavBar />
      <Main>
        <SectionHero />
        <SectionBrandLogos />
        <SectionFeature
          vertical={true}
          tagLabel="Premium abstract images"
          sectionHeader="Easy access to top quality images"
          sectionDescription="In a world where storytelling constantly evolves, we lead with groundbreaking images designed for your presentation excellence."
        >
          <Feature
            vertical={true}
            icon={FEATURE_ICONS.downloadIcon}
            featureHeader="Infinite Download"
            featureDescription="Once you subscribe to our plans, they're all yours. Download as many
          as you want and use them for work presentations, wallpapers, and much
          more."
          />
          <Feature
            vertical={true}
            icon={FEATURE_ICONS.brushIcon}
            featureHeader="Purely Handcrafted"
            featureDescription=" No AI, no generic images. Crafted from various chemicals, fabrics, clouds, or even particles as small as dust."
          />
          <Feature
            vertical={true}
            icon={FEATURE_ICONS.copyrightIcon}
            featureHeader="All Are Under licensed"
            featureDescription="The only limitation with these abstract images is that you are not able to sell them in any form, whether digital or hard copy (such as paintings or prints on paper)."
          />
          <Feature
            vertical={true}
            icon={FEATURE_ICONS.refundIcon}
            featureHeader="Cancel Anytime"
            featureDescription="Subscribe at your own pace, and cancel when you feel it's enough."
          />
          <Feature
            vertical={true}
            icon={FEATURE_ICONS.teamIcon}
            featureHeader="Empowering For Team"
            featureDescription="We support multiple seats at once, requiring only a single payment."
          />
          <Feature
            vertical={true}
            icon={FEATURE_ICONS.refreshIcon}
            featureHeader="No Limitations"
            featureDescription="Use as many as you want, from Dribbble presentations to PowerPoint presentations."
          />
        </SectionFeature>
        <SectionFeature
          tagLabel="High quality images"
          sectionHeader="For designers, by designers"
          sectionDescription="Unleash boundless creativity with a large repository of images optimized for designers"
          vertical={false}
          img={featurePic}
        >
          <div>
            <Feature
              vertical={false}
              icon={FEATURE_ICONS.hdIcon}
              featureHeader="5K resolution support"
              featureDescription="All images boast a minimum resolution of 5K, ensuring crisp, crystal-clear quality."
            />
            <Feature
              vertical={false}
              icon={FEATURE_ICONS.waterPercentIcon}
              featureHeader="From water to glass"
              featureDescription="We offer a wide array of abstractions, ranging from water to glass, and encompassing various styles including 3D and vector."
            />
            <Feature
              vertical={false}
              icon={FEATURE_ICONS.rainbowIcon}
              featureHeader="Portrait or landscape"
              featureDescription="Effortlessly adapt your images for any platform - whether it's a stunning wallpaper or captivating Instagram reels and stories."
            />
          </div>
          
        </SectionFeature>
      </Main>
    </div>
  );
}

export default App;
