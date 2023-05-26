import Title from "@/components/pages/Title";
import DarkContainer from "@/components/UI/DarkContainer";
import {Ids} from "@/staticData/Ids";
import HomeContainer from "@/components/pages/Home/HomeContainer";
import Image from "next/image";

function TeamProjects() {
  return (
    <HomeContainer id={Ids.projects} className="pt-7 pb-7 md:pt-24 md:pb-14 flex flex-col justify-center items-center space-y-8 md:space-y-12">
      <Title type="h2" primaryColor withLine>
        پروژه‌های تیمی
      </Title>

      <div className='relative w-full'>
        <div className='w-full h-full absolute right-0 top-0 z-10 bg-gradient-to-l from-dark-1 to-transparent'></div>

        <img src='/images/teamProjects/dargah-project.png' alt='dargah-project.png' className='mx-auto'/>

        <div className='flex flex-col z-20 md:pr-10 absolute z-20 bottom-2 md:bottom-5 right-2 md:right-5'>
          <p className='font-black text-lg md:text-2xl lg:text-4xl text-primary'>درگاه ملی حمل بار</p>
          <p className='mt-3 text-sm md:text-base '>سازمان راهداری حمل و نقل جاده‌ای</p>
        </div>
      </div>

      <p className='font-light leading-7 text-center text-custom-gray-1 md:w-4/5'>
        سامانه درگاه ملی با تجمیع و کنترل سیستمی تقاضاهای حمل بار در کشور به صورت کاملاً برخط نقش مدیریت تمام بارهای
        قابل حمل در بخش برون شهری را ایفا خواهد کرد. با انجام این مهم می‌توان بخشی از برنامه ریزی حمل ونقل را اجرا کرد و
        توزیع عادلانه بار بر اساس عملکرد دقیق ناوگان، راننده و شرکت های حمل ونقل و کاهش هزینه های سربار حمل ونقل را محقق
        ساخت. این سامانه در راستای دستیابی به این هدف بزرگ، به عنوان دروازه تبادل اطلاعات سامانه های سازمان راهداری و
        حمل ونقل جاده ای برای دریافت درخواست های حمل ونقل جاده‌ای (داخلی) کشور قرار خواهد گرفت
      </p>
    </HomeContainer>
  )
}

export default TeamProjects;