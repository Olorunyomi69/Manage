import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Testimonials from "./Testimonials"; 
import Cta from "./cta";
import Footer from "./Footer";

function App() {
 
  return (
    <>
      <Navbar />
      <Hero/>
      <Features/>
      <Testimonials/>
      <Cta/>
      <Footer/>
    </>
  );
}

export default App;
