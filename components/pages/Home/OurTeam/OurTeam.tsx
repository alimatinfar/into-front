import Title from "@/components/pages/Title";
import ourTeamData from "@/components/pages/Home/OurTeam/ourTeamData";
import DarkContainer from "@/components/UI/DarkContainer";
import isOdd from "@/utils/isOdd";
import {Ids} from "@/staticData/Ids";
import HomeContainer from "@/components/pages/Home/HomeContainer";
import Image from "next/image";


export default function OurTeam() {
  return (
    <HomeContainer id={Ids.members} className="pt-24 pb-14 flex flex-col justify-center items-center space-y-20">
      <Title type="h2" primaryColor withLine>
        تیم ما
      </Title>

      <div className='space-y-60 w-full'>
        {ourTeamData.map((data, index) => {
          const indexIsOdd = isOdd(index)

          return (
            <div key={data.fullName}>
              <div className='w-full px-14 mb-20'>
                <div className='w-full relative'>
                  <div className='bg-white w-48 h-60 rounded-3xl'>

                  </div>

                  <div className='flex items-center justify-between absolute top-20 pr-52 w-full'>
                    <span className='text-primary text-4xl font-bold'>{data.fullName}</span>

                    <span className='font-extralight text-xl text-white/80'>{data.jobTitle}</span>
                  </div>

                  <div className='pr-32 w-full absolute -bottom-7'>
                    <div
                      className='w-full py-5 pl-5 pr-20  shadow-custom-white rounded-3xl text-2xl leading-10 bg-opacity-30'>
                      {data.description}
                    </div>
                  </div>
                </div>
              </div>

              <div className='grid grid-cols-4 gap-5'>
                {data.skills.map((skill, index) => (
                  <DarkContainer key={index} className='flex flex-col space-y-4'>
                    <div className='relative w-20 h-20'>
                      <Image
                        fill
                        src={`/images/ourTeam/${skill.info.logo}`} alt={skill.info.logo}
                        style={{objectFit: 'contain'}}
                      />
                    </div>

                    <span className='text-white/70 font-light text-sm'>{skill.info.title}</span>

                    <span>{skill.description}</span>
                  </DarkContainer>
                ))}
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
