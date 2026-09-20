import './App.scss';
import {
  AboutSection,
  Coverage,
  CtaSection,
  FaqSection,
  Footer,
  Header,
  HeroSection,
  LocationSection,
  ReviewsSection,
  ServicesSection,
  TeamSection,
} from './components/layout/';
import { landing_data } from './data/data';

function App() {
  const {
    header,
    hero,
    services,
    team,
    about,
    reviews_section,
    cta_section,
    faq_section,
    coverage_section,
    location_section,
    footer,
  } = landing_data;

  return (
    <div className='app'>
      <Header data={header} />
      <HeroSection data={hero} />
      <ServicesSection data={services} />
      <TeamSection data={team} />
      {/* <AboutSection data={about} /> */}
      {/* <ReviewsSection data={reviews_section} /> */}
      <CtaSection data={cta_section} />
      <FaqSection data={faq_section} />
      <Coverage data={coverage_section} />
      <LocationSection data={location_section} />
      <Footer data={footer} />
      {/* eliminar  */}
      <span className='credito'>Diseñado por Codefex</span>
      {/* eliminar */}
    </div>
  );
}

export default App;
