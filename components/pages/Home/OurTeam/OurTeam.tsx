import Title from "@/components/pages/Title";
import ourTeamData from "@/components/pages/Home/OurTeam/ourTeamData";
import DarkContainer from "@/components/UI/DarkContainer";
import isOdd from "@/utils/isOdd";
import {Ids} from "@/staticData/Ids";


export default function OurTeam() {
  return (
    <div id={Ids.members} className="pt-24 pb-14 flex flex-col justify-center items-center space-y-20">
      <Title type="h2">
        تیم ما
      </Title>

      <div className='space-y-28'>
        {ourTeamData.map((data, index) => {
          const indexIsOdd = isOdd(index)

          return (
            <div key={data.fullName} className={`flex w-full items-center space-x-20 ${indexIsOdd ? 'flex-row-reverse' : 'space-x-reverse'}`}>
              <div className='w-96 text-center'>
                <DarkContainer className='flex flex-col justify-end aspect-square w-full mb-5'>
                  {/*<img src="/images/basketball.svg" alt="basketball" className='w-40 mx-auto' />*/}

                  <p className='mt-5 font-semibold'>{data.fullName}</p>

                  <p className='mt-3 text-primary'>{data.jobTitle}</p>
                </DarkContainer>

                <p className='font-light'>{data.description}</p>
              </div>

              <div className='flex-1 space-y-2'>
                {data.skills.map((skill, index) => (
                  <div key={index} className='flex'>
                    <span className='bg-white h-1.5 w-1.5 mt-2.5 ml-2'/>
                    <p className='text-xl font-light flex-1'>{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}
