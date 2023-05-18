import Title from "@/components/pages/Title";
import ourTeamData from "@/components/pages/Home/OurTeam/StaticData/ourTeamData";
import isOdd from "@/utils/isOdd";
import {Ids} from "@/staticData/Ids";
import HomeContainer from "@/components/pages/Home/HomeContainer";
import OurTeamSkills from "@/components/pages/Home/OurTeam/OurTeamSkills";


export default function OurTeam() {
  return (
    <HomeContainer id={Ids.members} className="pt-24 pb-14 flex flex-col justify-center items-center space-y-20">
      <Title type="h2" primaryColor withLine>
        تیم ما
      </Title>

      <div className='space-y-16 md:space-y-32 xl:space-y-48 w-full'>
        {ourTeamData.map((data, index) => {
          const indexIsOdd = isOdd(index)

          return (
            <div key={data.fullName}>
              <div className='w-full lg:px-7 xl:px-14 mb-8 md:mb-20'>
                <div className='flex flex-col md:block w-full relative'>
                  <div className='bg-white w-40 md:w-48 h-52 md:h-60 rounded-3xl '>

                  </div>

                  <div className='flex flex-col md:flex-row md:items-center md:justify-between md:absolute md:top-16 lg:top-20 md:pr-52 w-full my-5 md:my-0'>
                    <span className='text-primary text-xl md:text-2xl xl:text-4xl font-bold'>{data.fullName}</span>

                    <span className='self-end md:self-auto font-extralight text-sm lg:text-base xl:text-xl text-white/80'>{data.jobTitle}</span>
                  </div>

                  <div className='md:pr-32 w-full md:absolute md:-bottom-7'>
                    <div
                      className='text-justify font-light md:font-normal w-full py-5 pl-5 pr-5 md:pr-20 shadow-custom-mobile-white md:shadow-custom-white rounded-3xl lg:text-xl xl:text-2xl leading-8 md:leading-10 bg-opacity-30'>
                      {data.description}
                    </div>
                  </div>
                </div>
              </div>

              <div className='hidden md:grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5'>
                <OurTeamSkills skills={data.skills} />
              </div>

              <div className='md:hidden w-full overflow-x-auto'>
                <div className='flex items-center justify-between space-x-4 space-x-reverse'>
                  <OurTeamSkills skills={data.skills} />
                  {/*{data.skills.map(skill => (*/}
                  {/*  <div key={skill.info.title} className='h-80 aspect-square bg-red-500'>*/}

                  {/*  </div>*/}
                  {/*))}*/}
                </div>
              </div>
            </div>

            // <div key={data.fullName} className={`flex w-full items-center space-x-20 ${indexIsOdd ? 'flex-row-reverse' : 'space-x-reverse'}`}>
            //   <div className='w-96 text-center'>
            //     <DarkContainer className='flex flex-col justify-end aspect-square w-full mb-5'>
            //       {/*<img src="/images/basketball.svg" alt="basketball" className='w-40 mx-auto' />*/}
            //
            //       <p className='mt-5 font-semibold'>{data.fullName}</p>
            //
            //       <p className='mt-3 text-primary'>{data.jobTitle}</p>
            //     </DarkContainer>
            //
            //     <p className='font-light'>{data.description}</p>
            //   </div>
            //
            //   <div className='flex-1 space-y-2'>
            //     {data.skills.map((skill, index) => (
            //       <div key={index} className='flex'>
            //         <span className='bg-white h-1.5 w-1.5 mt-2.5 ml-2'/>
            //         <p className='text-xl font-light flex-1'>{skill}</p>
            //       </div>
            //     ))}
            //   </div>
            // </div>
          )
        })}
      </div>
    </HomeContainer>
  );
}
