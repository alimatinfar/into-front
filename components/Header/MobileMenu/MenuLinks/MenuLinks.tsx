import headerLinks from "@/components/Header/staticData/headerLinks";
import Link from "next/link";

type Props = {
  closeMenu: () => void;
  menuOpen: boolean;
}

function MenuLinks({closeMenu, menuOpen}: Props) {
  return (
    <>
      <div className={`
        flex flex-col absolute left-0 right-0 top-20 pt-5 pb-10 z-30 w-full bg-dark-1 rounded-b-3xl duration-200 origin-top
        ${menuOpen ? 'opacity-100' : 'opacity-0 scale-90 pointer-events-none'}
      `}>
        {headerLinks.map(link => (
          <Link onClick={closeMenu} key={link.link} href={`#${link.link}`} className='py-3 w-full text-center'>
            {link.name}
          </Link>
        ))}
      </div>

      <div onClick={closeMenu} className={`
        fixed top-0 right-0 w-full h-full bg-dark-2/50 z-10
        ${menuOpen ? 'opacity-100' : 'opacity-0 scale-95 pointer-events-none'}
      `} />
    </>
  )
}

export default MenuLinks;