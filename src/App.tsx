import Main from "./components/Main";
import NavBar from "./components/NavBar";
import SectionBrandLogos from "./components/SectionBrandLogos";
import SectionFeature from "./components/SectionFeature";
import SectionHero from "./components/SectionHero";

function App() {
  return (
    <div className="min-h-screen w-full bg-linear-to-r from-[#f9fafb] to-[#d2d6db] p-4">
      <NavBar />
      <Main>
        <SectionHero />
        <SectionBrandLogos/>
        <SectionFeature tagLabel="Premium abstract images"
        sectionHeader="Easy access to top quality images" />
      </Main>
    </div>
  );
}

export default App;
