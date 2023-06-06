import Title from "@/components/pages/Title";
import DarkContainer from "../../UI/DarkContainer";
import HomeContainer from "@/components/pages/Home/HomeContainer";
import {Ids} from "@/staticData/Ids";
import Image from "next/image";


type AbilitiesType = { title: string, description: string, backgroundImage: string, iconImage: string }[]

export default function AbilitiesSection() {
  const imageRootDirectory = '/images/abilities/'

  const abilities: AbilitiesType = [
    {
      title: 'توسعه و ساخت وب سایت و اپلیکیشن',
      description: '“تبدیل ایده ها به ساختار های قابل اتکا در قالب وبسایت و اپلیکیشن “',
      backgroundImage: 'ability1.png',
      iconImage: 'ability-icon1.svg',
    },
    {
      title: 'توسعه نرم افزار',
      description: '“اتوماسیون فرایند ها و فعالیت ها در قالب نرم افزار های کاربردی“',
      backgroundImage: 'ability2.png',
      iconImage: 'ability-icon2.svg',
    },
    {
      title: 'طراحی رابط کاربری',
      description: '“طراحی تجربه ای لذت بخش در  استفاده از سامانه ها و وب سایت ها “',
      backgroundImage: 'ability3.png',
      iconImage: 'ability-icon3.svg',
    },
  ]

  return (
    <HomeContainer id={Ids["about-us"]}
                   className="py-7 md:py-10 lg:py-14 flex flex-col justify-center items-center mx-auto text-center">
      <Title type="h2">سال ها تجربه و فعالیت در کنار شما</Title>

      <p className="mt-5 w-full xs:w-4/5 lg::w-2/3 font-light text-sm xs:text-base md:text-lg">
        تیم ما با تکیه بر توانایی ها و تجربه های خود در پیاده سازی انواع سامانه ها
        در مقیاس کشوری ، به کسب و کار شما کمک می کند تا در جهت رشد و توانمند
        سازی، تمام فعالیت های خود را به فضای وب انتقال دهید
      </p>

      <div className='mt-10 flex flex-col space-y-8 md:space-y-0 md:grid grid-cols-12 md:gap-8 w-full sm:px-14 md:px-0'>
        {abilities.map((item, index) => {
          const isLastItem = index === abilities.length - 1

          return (
            <DarkContainer
              key={index}
              className={`flex flex-col justify-end aspect-square relative md:col-span-6 xl:col-span-4  ${isLastItem && 'md:col-start-4 xl:col-start-auto'}`}
            >
              <Image
                src={`${imageRootDirectory}${item.backgroundImage}`} alt={item.backgroundImage} fill
              />

              <div className='h-10 w-10 p-1.5 bg-primary rounded-md mb-3'>
                <div className='relative w-full h-full'>
                  <Image
                    src={`${imageRootDirectory}${item.iconImage}`} alt={item.iconImage} fill
                  />
                </div>
              </div>

              <div className='flex flex-col text-right'>
                <p className='font-semibold text-lg'>{item.title}</p>

                <p className='mt-3 font-light text-base'>{item.description}</p>
              </div>
            </DarkContainer>
          )
        })}
      </div>
    </HomeContainer>
  );
}
