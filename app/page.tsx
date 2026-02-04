import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import { getAboutData } from "./lib/getAboutFromExcel";
import TeamSection from "./components/TeamSection";
import { getTeamAxes } from "./components/teamAxesData";
import NewsSection from "./components/NewsSection";
import { getNewsFromExcel } from "./lib/getNewsFromExcel";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";

export default function Home() {
  const axes = getTeamAxes();
  const news = getNewsFromExcel();
  const about = getAboutData();
  return (
    <div className="w-full bg-white">
      <Header />
      <HeroSection />
      <AboutSection about={about} />
      <TeamSection axes={axes} />
      <NewsSection news={news} />
      <MapSection />
      <Footer />
    </div>
  );
}
