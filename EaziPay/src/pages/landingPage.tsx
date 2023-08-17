import Nav from "../components/Nav";
import Hero from "../components/Hero";
import BrandInfo from "../components/BrandInfo";
import HowItWorks from "../components/HowItWorks";
import Cta from "../components/Cta";
import Demo from "../components/Demo";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <section className={``}>
      <Nav />
      <Hero />
      <BrandInfo />
      <HowItWorks />
      <Cta />
      <Demo />
      <Footer />
    </section>
  );
};

export default LandingPage;
