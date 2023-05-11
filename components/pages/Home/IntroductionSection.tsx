import Header from "@/components/pages/Home/Header/Header";
import Title from "@/components/pages/Title";
import Button from "@/components/UI/Button/Button";

export default function IntroductionSection() {
  return (
    <div className="py-14 flex flex-col justify-center items-center">
      <Title type="h1">
        طراحی و توسعه سامانه های{" "}
        <span className="text-primary">مبتنی بر وب</span>
      </Title>

      <p className="text-white/70 mt-5 font-light">
        طراحی وبسایت ها و تبدیل فرایند ها به نرم افزار های قابل اجرا تحت وب با
        استفاده از سال ها تجربه و مهارت
      </p>

      <div className="flex items-center justify-center space-x-reverse space-x-4 mt-10">
        <Button size="lg">تماس با ما</Button>
        <Button size="lg" type="whiteOutline">
          درباره ما
        </Button>
      </div>

      <img src="/images/code.png" alt="code" />
    </div>
  );
}
