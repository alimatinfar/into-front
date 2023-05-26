import Logo from "@/components/Logo";
import headerLinks from "@/components/Header/staticData/headerLinks";
import Link from "next/link";
import LinkButton from "@/components/UI/Button/LinkButton";
import {Ids} from "@/staticData/Ids";

function DesktopMenu() {
  return (
    <div className='items-center justify-between md:px-16 lg:px-20 py-4 z-10 hidden md:flex'>
      <Logo />

      <div className='space-x-8 space-x-reverse hidden md:block'>
        {headerLinks.map(link => (
          <Link key={link.link} href={`#${link.link}`} className='text-white font-light'>{link.name}</Link>
        ))}
      </div>

      <div className='hidden md:block'>
        <LinkButton href={`#${Ids["contact-us"]}`} type='primary'>تماس با ما</LinkButton>
      </div>
    </div>
  )
}

export default DesktopMenu;