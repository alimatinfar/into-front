import AbilitiesSection from "@/components/pages/Home/AbilitiesSection";
import Header from "@/components/Header/Header";
import IntroductionSection from "@/components/pages/Home/IntroductionSection";
import OurTeam from "@/components/pages/Home/OurTeam/OurTeam";
import TeamProjects from "@/components/pages/Home/TeamProjects";
import ContactInfo from "@/components/pages/Home/ContactInfo";
import Footer from "@/components/Footer/Footer";
import Background from "@/components/Background";


export default function Home() {

  return (
    <div>
      <Header/>

      <div className='relative pt-20 md:pt-0'>
        <IntroductionSection/>

        <AbilitiesSection/>

        <OurTeam/>

        <TeamProjects/>

        <ContactInfo/>

        <Background imageName='background1' className='top-60 xs:top-20 md:top-10 opacity-70' />

        {/*<Background imageName='background2' className='lg:top-[1800px] xl:top-[1600px]' />*/}
      </div>

      <Footer/>
    </div>
  );
}
