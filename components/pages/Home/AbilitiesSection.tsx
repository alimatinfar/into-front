import Header from "@/components/pages/Home/Header/Header";
import Title from "@/components/pages/Title";
import Button from "@/components/UI/Button/Button";
import DarkContainer from "../../UI/DarkContainer";
import HomeContainer from "@/components/pages/Home/HomeContainer";


type AbilitiesType = { title: string, description: string }[]

export default function AbilitiesSection() {
  const abilities: AbilitiesType = [
    {title: 'شماره ۱', description: 'توضیحات ۱'},
    {title: 'شماره ۲', description: 'توضیحات ۲'},
    {title: 'شماره ۳', description: 'توضیحات ۳'},
  ]

  return (
    <div className="py-14 flex flex-col justify-center items-center mx-auto text-center">
      <Title type="h2">سال ها تجربه و فعالیت در کنار شما</Title>

      <p className="mt-5 w-2/3 font-light text-lg">
        تیم ما با تکیه بر توانایی ها تجربه های خود در پیاده سازی انواع سامانه ها
        در مقیاس کشور ، به کسب و کار شما کمک می کند تا در مسیر رشد و توانمند
        سازی تمام فعالیت های خود را به فضا وب انتقال دهید
      </p>

      <div className='mt-10 space-x-reverse space-x-8 flex items-center justify-center w-full'>
        {abilities.map((item, index) => (
          <DarkContainer key={index} className='flex flex-col aspect-square flex-1'>
            <img src="/images/basketball.svg" alt="basketball" className='w-3/5 mx-auto'/>

            <div className='flex flex-col mt-auto'>
              <p className='font-bold'>{item.title}</p>

              <p className='mt-3 font-light'>{item.description}</p>
            </div>
          </DarkContainer>
        ))}
      </div>
    </div>
  );
}
