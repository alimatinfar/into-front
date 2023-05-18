import Image from "next/image";
import headerLinks from "@/components/pages/Home/Header/staticData/headerLinks";
import Link from "next/link";
import {Ids} from "@/staticData/Ids";
import LinkButton from "@/components/UI/Button/LinkButton";

function Header() {
  return (
    <div className='flex items-center justify-between px-5 sm:px-10 md:px-16 lg:px-20 py-4'>
      <div className='relative w-8 h-8 md:hidden'>
        <Image fill src='/images/menu-icon.svg' alt='menu-icon' />
      </div>

      <Link href='/'>
        <Image src='/images/logo.svg' alt='logo.svg' width={100} height={100}/>
      </Link>

      <div className='space-x-5 space-x-reverse hidden md:block'>
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

export default Header