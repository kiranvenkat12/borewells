import { Header } from "@/components/Header";
import { Banner } from "@/components/Banner";
import { MainContent } from "@/components/MainContent";
import { Reviews } from "@/components/Reviews";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Banner />
      <MainContent />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Index;