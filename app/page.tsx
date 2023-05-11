import AbilitiesSection from "@/components/pages/Home/AbilitiesSection";
import Header from "@/components/pages/Home/Header/Header";
import IntroductionSection from "@/components/pages/Home/IntroductionSection";
import OurTeam from "@/components/pages/Home/OurTeam/OurTeam";
import HomeContainer from "@/components/pages/Home/HomeContainer";
import TeamProjects from "@/components/pages/Home/TeamProjects";
import ContactInfo from "@/components/pages/Home/ContactInfo";
import Footer from "@/components/pages/Home/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />

      <HomeContainer>
        <IntroductionSection />

        <AbilitiesSection />

        <OurTeam />

        <TeamProjects />

        <ContactInfo />
      </HomeContainer>

      <Footer />
    </div>
  );
}
