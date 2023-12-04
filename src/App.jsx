
import Hero from "./Components/hero/Hero";
import Navbar from "./Components/navbar/Navbar";
import Parallax from "./Components/parrallax/Parallax";
import Services from "./Components/services/Services";
import "./app.scss";

const App = () => {
  return <div>

    <section id="Homepage" >
      <Navbar />
      <Hero />
    </section>
    <section id="Services"><Parallax type="services" /></section>
    <section id="Portfolio"><Services /></section>
    <section ><Parallax /></section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact">Contact</section>
  </div>;
};

export default App;
