import "./css/App.css";
import "./css/sections.css";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header/Header";
import Banner from "./components/Sections/Banner";
import Skills from "./components/Sections/Skills";
import Footer from "./components/Footer/Footer";
import Education from "./components/Sections/Education";
import Proyects from "./components/Sections/Proyects";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Header />
      <Banner />

      <Skills />
      <Education />
      <Proyects />
      <Footer />
    </>
  );
}

export default App;
