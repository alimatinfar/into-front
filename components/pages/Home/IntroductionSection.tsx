import Header from "@/components/pages/Home/Header/Header";
import Title from "@/components/pages/Title";
import Button from "@/components/UI/Button/Button";
import LinkButton from "@/components/UI/Button/LinkButton";
import {Ids} from "@/staticData/Ids";
import HomeContainer from "@/components/pages/Home/HomeContainer";

export default function IntroductionSection() {
  return (
    <HomeContainer className="py-14 flex flex-col justify-center items-center">
      <Title type="h1">
        طراحی و توسعه سامانه های{" "}
        <span className="text-primary">مبتنی بر وب</span>
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
