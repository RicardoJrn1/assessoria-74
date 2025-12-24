import Header from "../components/header"
import HeroSection from '../components/hero-section';
import ParceriasSection from '../components/parcerias-section';
import NumerosFalamSection from '../components/depoimento-section';
import TrintaDiasSection from '../components/trinta-dias-section';
import InvistaSection from "../components/invista-section";
import QuatrocentosMilhoesSection from "../components/400milhoes-section";
import ResultadosSection from "../components/resultados-section";
import ResultadosReaisSection from "../components/resultadosreais-section";
import QuemSomosSection from "../components/quemsomos-section";


const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ParceriasSection />
      <NumerosFalamSection />
      <TrintaDiasSection />
      <InvistaSection />
      <QuatrocentosMilhoesSection />
      <ResultadosSection />
      <ResultadosReaisSection />
      <QuemSomosSection />
    </>
  );
};

export default HomePage;