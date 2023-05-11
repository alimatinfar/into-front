import Image from "next/image";
import headerLinks from "@/components/pages/Home/Header/staticData/headerLinks";
import Link from "next/link";
import Button from "@/components/UI/Button/Button";
import {Ids} from "@/staticData/Ids";
import LinkButton from "@/components/UI/Button/LinkButton";

function Header() {
  return (
    <div className='flex items-center justify-between px-20 py-4'>
      <Link href='/'>
        <Image src='/images/logo.svg' alt='logo.svg' width={100} height={100}/>
      </Link>

      <div className='space-x-5 space-x-reverse'>
        {headerLinks.map(link => (
          <Link key={link.link} href={`#${link.link}`} className='text-white font-light'>{link.name}</Link>
        ))}
      </div>

      <LinkButton href={`#${Ids["contact-us"]}`} type='primary'>تماس با ما</LinkButton>
    </div>
  )
}

export default Header