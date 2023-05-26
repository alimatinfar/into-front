import MenuIconLine from "@/components/Header/MobileMenu/MenuIconLine";

type Props = {
  toggle: () => void;
  menuOpen: boolean;
}

function MenuIcon({toggle, menuOpen}: Props) {
  return (
    <div className='flex flex-col space-y-1.5' onClick={toggle}>
      <MenuIconLine className={menuOpen ? 'rotate-45 translate-y-[8px]' : ''}/>
      <MenuIconLine className={menuOpen ? 'opacity-0 scale-90' : 'opacity-100'}/>
      <MenuIconLine className={menuOpen ? '-rotate-45 -translate-y-[8px]' : ''}/>
    </div>
  )
}

export default MenuIcon;