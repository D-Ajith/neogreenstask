import React from "react";
import  Header  from "./components/Header";
import Herosection from "./components/HeroSection";
import ProductProBanner from "./components/ProductProBanner";
import ProductBenefitsSection from "./components/ProductBenefitsSection";
import NutrientsHeroSection from "./components/NutrientsHeroSection";
import ComparisonTable from "./components/ComparisonTable";
import LifestyleSection from "./components/LifestyleSection";
import Testimonials from "./components/Testimonials";
import ReadySection from "./components/ReadySection";
import Footer from "./components/Footer";
import BenefitsSection from "./components/BenefitsSection";

function App() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-white">
  <Header />
 <main className="pt-16 md:pt-20 lg:pt-24">
    <Herosection />
    <ProductProBanner />
    <BenefitsSection />
    <ProductBenefitsSection />
    <NutrientsHeroSection />
    <ComparisonTable />
    <LifestyleSection />
    <Testimonials />
    <ReadySection />
    <Footer />
  </main>
</div>

  );
}

export default App;
