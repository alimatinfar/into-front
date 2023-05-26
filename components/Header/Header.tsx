import MobileMenu from "@/components/Header/MobileMenu/MobileMenu";
import DesktopMenu from "@/components/Header/DesktopMenu/DesktopMenu";

function Header() {
  return (
    <>
      <DesktopMenu />

      <MobileMenu />
    </>
  )
}

export default Header