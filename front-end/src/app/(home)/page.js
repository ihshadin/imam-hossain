import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import HeroSection from "./HeroSection";
import PortfolioSection from "./PortfolioSection";
import ServicesSection from "./ServicesSection";
import TestimonialSection from "./TestimonialSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialSection />
      <ContactSection />
    </>
  );
}
