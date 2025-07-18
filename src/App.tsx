import Carousel from "./components/Carousel";
import NavBar from "./components/NavBar";
import SectionHero from "./components/SectionHero";

function App() {
  return (
    <div className="min-h-screen w-full bg-linear-to-r from-[#f9fafb] to-[#d2d6db] p-4">
      <NavBar />
      <div className="bg-white w-full min-h-screen py-12 px-3 xl:p-24 mt-4 shadow-lg">
        <SectionHero />
        <Carousel autoFill={true}/>
      </div>
    </div>
  );
}

export default App;
