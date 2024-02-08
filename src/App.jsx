import Navbar from "./Components/Navbar/Navbar";
import "./app.scss";
import Test from "./Test";
import Hero from "./Components/Hero/Hero";
import Portafolio from "./Components/Portafolio/Portafolio";
import Contact from "./Components/Contact/Contact";
import AboutMe from "./Components/AboutMe/AboutMe";
import Parallax from "./Components/Parallax/Parallax";

const App = () => {
  return (
    <div>
      <section id="Inicio">
        <Navbar />
        <Hero />
      </section>
      <section id="Sobre mi">
        <AboutMe/>
      </section>
      <section id="Portafolio">
        <Parallax type="Portafolio"/>
      </section>
      <Portafolio />
      <section id="Contacto">
        <Contact/>
      </section>
      {/* <Test/> */}
    </div>
  );
};

export default App;
