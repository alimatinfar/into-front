import AbilitiesSection from "@/components/pages/Home/AbilitiesSection";
import Header from "@/components/pages/Home/Header/Header";
import IntroductionSection from "@/components/pages/Home/IntroductionSection";
import OurTeam from "@/components/pages/Home/OurTeam/OurTeam";
import HomeContainer from "@/components/pages/Home/HomeContainer";

export default function Home() {
  return (
    <div>
      <Header />

      <HomeContainer>
        <IntroductionSection />

        <AbilitiesSection />

        <OurTeam />
      </HomeContainer>
    </div>
  );
}
