import Header from "@/components/pages/Home/Header/Header";
import Title from "@/components/pages/Title";
import Button from "@/components/UI/Button/Button";
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
    <HomeContainer id={Ids["about-us"]} className="py-14 flex flex-col justify-center items-center mx-auto text-center">
      <Title type="h2">سال ها تجربه و فعالیت در کنار شما</Title>

      <p className="mt-5 w-2/3 font-light text-lg">
        تیم ما با تکیه بر توانایی ها تجربه های خود در پیاده سازی انواع سامانه ها
        در مقیاس کشور ، به کسب و کار شما کمک می کند تا در مسیر رشد و توانمند
        سازی تمام فعالیت های خود را به فضا وب انتقال دهید
      </p>

      <div className='mt-10 space-x-reverse space-x-8 flex items-center justify-center w-full'>
        {abilities.map((item, index) => (
          <DarkContainer key={index} className='flex flex-col justify-end aspect-square flex-1 relative'>
            {/*<div className='absolute bg-dark-1/50 top-0 left-0 w-full h-full z-20 text-black'>sdfosjdfoisf</div>*/}
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
              <p className='font-bold text-lg'>{item.title}</p>

              <p className='mt-3 font-light'>{item.description}</p>
            </div>
          </DarkContainer>
        ))}
      </div>
    </HomeContainer>
  );
}
