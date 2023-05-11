import Link from "next/link";
import footerLinks from "@/components/pages/Home/Footer/footerLinks";
import Image from "next/image";

function Footer() {
  return (
    <div className='bg-black flex items-center justify-center space-x-10 space-x-reverse py-4'>
      {footerLinks.map((link, index) => (
        <>
          <Link key={link.link} href={`#${link.link}`} className='text-white font-light'>{link.name}</Link>
          {index === 1 && (
            <Link href='/'>
              <Image src='/images/logo.svg' alt='logo.svg' width={100} height={100}/>
            </Link>
          )}
        </>
      ))}
    </div>
  )
}

export default Footer;