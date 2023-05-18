import Title from "@/components/pages/Title";
import {Ids} from "@/staticData/Ids";
import HomeContainer from "@/components/pages/Home/HomeContainer";

function ContactInfo() {

  const phoneNumbers = [
    '(+98) 991 243 8434', '(+98) 913 040 7545'
  ]

  return (
    <HomeContainer id={Ids["contact-us"]} className='py-10 md:py-20 px-10'>

      <div className='text-xl md:text-3xl font-bold text-center mb-10'>آماده برای پروژه بعدی شما</div>

      <div className='bg-primary py-7 md:py-14 flex flex-col items-center justify-center text-black rounded-3xl'>
        <Title type='h2' size='text-3xl font-bold'>
          اطلاعات تماس
        </Title>

        <div className='flex flex-col mt-7'>
          <p className='text-center'>جهت مشاوره  و انجام پروژه با شماره های زیر تماس بگیرید </p>

          <div dir='ltr' className='flex items-center justify-between text-white mt-5 px-1 md:px-5'>
            {phoneNumbers.map(phoneNumber => (
              <p key={phoneNumber} className='bg-dark-1 text-center text-white px-2 py-2 rounded-md text-sm md:text-base'>{phoneNumber}</p>
            ))}
          </div>
        </div>
      </div>

    </HomeContainer>
  )
}

export default ContactInfo;