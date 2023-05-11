import AbilitiesSection from "@/components/pages/Home/AbilitiesSection";
import Header from "@/components/pages/Home/Header/Header";
import IntroductionSection from "@/components/pages/Home/IntroductionSection";
import OurTeam from "@/components/pages/Home/OurTeam/OurTeam";
import TeamProjects from "@/components/pages/Home/TeamProjects";
import ContactInfo from "@/components/pages/Home/ContactInfo";
import Footer from "@/components/pages/Home/Footer/Footer";


export default function Home() {
  return (
    <div>
      <Header/>

      <div className='relative overflow-hidden'>
        <IntroductionSection/>

        <AbilitiesSection/>

        <img
          className='absolute w-full left-0 top-0 -z-10'
          src="/images/introduction-background.svg"
          alt="introduction-background"
        />
      </div>
      <OurTeam/>

      <TeamProjects/>

      <ContactInfo/>

      <Footer/>
    </div>
  );
}
