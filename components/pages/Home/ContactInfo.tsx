import Title from "@/components/pages/Title";
import {Ids} from "@/staticData/Ids";

function ContactInfo() {
  return (
    <div id={Ids["contact-us"]} className='pt-40 pb-20 px-10'>

      <div className='bg-primary py-14 flex flex-col items-center justify-center text-black rounded-3xl'>
        <Title type='h2' size='text-3xl font-bold'>
          اطلاعات تماس
        </Title>

        <div className='flex flex-col mt-7'>
          <p>جهت مشاوره  و انجام پروژه با شماره های زیر تماس بگیرید </p>

          <div dir='ltr' className='flex items-center justify-between text-white mt-5 font-bold'>
            <p>(+98) 991 243 8434</p>
            <p>(+98) 913 040 7545</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ContactInfo;