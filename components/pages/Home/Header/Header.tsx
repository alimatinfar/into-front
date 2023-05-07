import Image from "next/image";
import headerLinks from "@/components/pages/Home/Header/staticData/headerLinks";
import Link from "next/link";
import Button from "@/components/UI/Button/Button";

function Header() {
  return (
    <div className='flex items-center justify-between px-20 py-4'>
      <Image src='/images/logo.svg' alt='logo.svg' width={100} height={100}/>

      <div className='space-x-5 space-x-reverse'>
        {headerLinks.map(link => (
          <Link key={link.link} href={link.link} className='text-white font-light'>{link.name}</Link>
        ))}
      </div>

      <Button type='primary'>تماس با ما</Button>
    </div>
  )
}

export default Header