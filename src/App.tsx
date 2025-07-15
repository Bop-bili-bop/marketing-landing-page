import NavBar from "./components/NavBar";
import SectionHero from "./components/SectionHero";


function App() {
  return (
    <div className="min-h-screen w-full bg-linear-to-r from-[#f9fafb] to-[#d2d6db] p-4">
      <NavBar />
      <SectionHero/>
    </div>
  );
}

export default App;
