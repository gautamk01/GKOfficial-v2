
import { Contact } from "./Components/contact/Contact";
import Hero from "./Components/hero/Hero";
import Navbar from "./Components/navbar/Navbar";
import Parallax from "./Components/parrallax/Parallax";
import Portfolio from "./Components/portfolio/portfolio";
import Services from "./Components/services/Services";
import "./app.scss";

const App = () => {
  return <div>

    <section id="Homepage" >
      <Navbar />
      <Hero />
    </section>
    <section ><Parallax type="services" /></section>
    <section id="Services"><Services /></section>
    <section ><Parallax /></section>
    <div id="Portfolio"><Portfolio /></div>
    <section id="Contact"><Contact /></section>
  </div>;
};

export default App;
