import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { MainContent } from "../components/MainContent";
import { Reviews } from "../components/Reviews";
import { Footer } from "../components/Footer";

const Index = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#0f172a' }}>
      <Header />
      <Banner />
      <MainContent />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Index;