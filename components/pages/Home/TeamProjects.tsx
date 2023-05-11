import Title from "@/components/pages/Title";
import DarkContainer from "@/components/UI/DarkContainer";

function TeamProjects() {
  return (
    <div className="pt-24 pb-14 flex flex-col justify-center items-center space-y-12">
      <Title type="h2">
        پروژه‌های تیمی
      </Title>

      <DarkContainer className='flex flex-col justify-end w-full h-[540px]'>
        <p className='font-bold text-4xl text-primary'>درگاه ملی حمل بار</p>
        <p className='mt-3 font-light'>سازمان راهداری حمل و نقل جاده‌ای</p>
      </DarkContainer>

      <p className='font-light leading-7 text-center text-custom-gray-1'>
        سامانه درگاه ملی با تجمیع و کنترل سیستمی تقاضاهای حمل بار در کشور به صورت کاملاً برخط نقش مدیریت تمام بارهای
        قابل حمل در بخش برون شهری را ایفا خواهد کرد. با انجام این مهم می¬توان بخشی از برنامه ریزی حمل ونقل را اجرا کرد و
        توزیع عادلانه بار بر اساس عملکرد دقیق ناوگان، راننده و شرکت های حمل ونقل و کاهش هزینه های سربار حمل ونقل را محقق
        ساخت. این سامانه در راستای دستیابی به این هدف بزرگ، به عنوان دروازه تبادل اطلاعات سامانه های سازمان راهداری و
        حمل ونقل جاده ای برای دریافت درخواست های حمل ونقل جاده‌ای (داخلی) کشور قرار خواهد گرفت
      </p>
    </div>
  )
}

export default TeamProjects;