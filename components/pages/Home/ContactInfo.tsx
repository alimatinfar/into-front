import Title from "@/components/pages/Title";
import {Ids} from "@/staticData/Ids";
import HomeContainer from "@/components/pages/Home/HomeContainer";

function ContactInfo() {

  const phoneNumbers = [
    {link: '+989123125405', label: '(+98) 912 312 5405'},
    {link: '+989912438434', label: '(+98) 991 243 8434'}
  ]

  return (
    <HomeContainer id={Ids["contact-us"]} className='py-10 md:py-20 px-10'>

      <div className='text-xl md:text-4xl font-black text-center mb-10'>آماده برای پروژه بعدی شما</div>

      <div className='bg-primary py-7 flex flex-col items-center justify-center text-black rounded-3xl w-full md:w-3/4 mx-auto'>
        <Title type='h2' size='text-3xl font-black'>
          اطلاعات تماس
        </Title>

        <div className='flex flex-col mt-7'>
          <p className='text-center'>جهت مشاوره  و انجام پروژه با شماره های زیر تماس بگیرید </p>

          <div dir='ltr' className='flex items-center justify-between text-white mt-5 px-1 md:px-5 md:space-x-4'>
            {phoneNumbers.map(phoneNumber => (
              <a
                key={phoneNumber.link}
                href={`tel:${phoneNumber.link}`}
                className='bg-dark-1 text-center text-white px-2 py-2 rounded-md text-sm md:text-base'
              >
                {phoneNumber.label}
              </a>
            ))}
          </div>
        </div>
      </div>

    </HomeContainer>
  )
}

export default ContactInfo;