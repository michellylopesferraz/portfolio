import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import LandingPages from "./components/LandingPages";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#0a0f1a] min-h-screen">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <LandingPages />
      <Footer />
    </div>
  );
}

export default App;
