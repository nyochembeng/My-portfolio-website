import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonial from './components/testimonial/Testimonial';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <header id="header"><Header/></header>
      <Navbar/>
      <section id="about"><About/></section>
      <section id="experience"><Experience/></section>
      <section id="services"><Services/></section>
      <section id="portfolio"><Portfolio/></section>
      <section id="testimonial"><Testimonial/></section>
      <section id="contact"><Contact/></section>
      <Footer/>
    </>
  );
}

export default App;
