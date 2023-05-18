import Title from "@/components/pages/Title";
import LinkButton from "@/components/UI/Button/LinkButton";
import {Ids} from "@/staticData/Ids";
import HomeContainer from "@/components/pages/Home/HomeContainer";
import {Types} from "@/types/types";


function TextPrimary({children}: {children: Types["children"]}) {
  return (
    <span className="text-primary">
      {children}
    </span>
  )
}

export default function IntroductionSection() {
  return (
    <HomeContainer className="py-5 xs:py-10 md:py-14 flex flex-col justify-center items-center text-center">
      <Title type="h1">
        طراحی و توسعه
        <TextPrimary> وبسایت </TextPrimary>
        و
        <TextPrimary> سامانه‌</TextPrimary>
        های مبتنی بر وب
      </Title>

      <p className="text-white/70 mt-5 font-light text-center">
        طراحی وبسایت ها و تبدیل فرایند ها به نرم افزار های قابل اجرا تحت وب با
        استفاده از سال ها تجربه و مهارت
      </p>

      <div className="flex items-center justify-center space-x-reverse space-x-4 mt-10">
        <LinkButton href={`#${Ids["contact-us"]}`} size="lg">تماس با ما</LinkButton>
        <LinkButton href={`#${Ids["about-us"]}`} size="lg" type="whiteOutline">
          درباره ما
        </LinkButton>
      </div>

      <img src="/images/code.png" alt="code"/>
    </HomeContainer>
  );
}
