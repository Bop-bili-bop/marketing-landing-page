import NavBar from "./components/NavBar";
import HeroImg from "./assets/Hero image.png"
import Button from "./components/Button";

function App() {
  return (
    <div className="min-h-screen w-full bg-linear-to-r from-[#f9fafb] to-[#d2d6db] p-4">
      <NavBar />
      <section
        id="hero"
        className="bg-white w-full min-h-screen flex flex-col xl:flex-row py-12 px-3 gap-12 xl:p-24 xl:gap-8 items-center mt-4 shadow-lg"
      >
        <div className="flex flex-col gap-8 lg:gap-16 w-full max-w-1xl">
          <div className="flex flex-col gap-4 lg:gap-6">
            <div className="text-4xl lg:text-5xl xl:text-6xl text-shadow-lg font-semibold">Well crafted abstract images</div>
            <div className="text-lg xl:text-xl text-neutral-600">High quality abstract images for your projects, wallpaper and presentations.</div>
          </div>
          <div className="flex flex-row gap-4 lg:gap-8">
            <Button style="secondary">Learn more</Button>
            <Button style="primary">See pricing</Button>
          </div>
        </div>
        <img src={HeroImg} className="w-full h-auto object-contain max-w-7xl mx-auto"></img>
      </section>
    </div>
  );
}

export default App;
