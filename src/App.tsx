import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="min-h-screen w-full bg-linear-to-r from-[#f9fafb] to-[#d2d6db] p-4">
      <NavBar />
      <section
        id="hero"
        className="bg-white w-full min-h-screen flex justify-between items-center mt-4"
      >
        <div className="flex flex-col gap-6">
          <div className="text-6xl text-shadow-lg font-semibold">Well crafted abstract images</div>
          <div className="text-xl text-neutral-600">High quality abstract images for your projects, wallpaper and presentations.</div>
        </div>
        <div className=""></div>
      </section>
    </div>
  );
}

export default App;
