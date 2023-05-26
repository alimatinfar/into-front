'use client'

import {useEffect, useState} from "react";
import MenuIcon from "@/components/Header/MobileMenu/MenuIcon";
import MenuLinks from "@/components/Header/MobileMenu/MenuLinks/MenuLinks";
import Logo from "@/components/Logo";

function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  useEffect(function () {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [menuOpen])

  function toggle() {
    setMenuOpen(prev => !prev)
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <div className='relative md:hidden'>
      <div className='bg-dark-1 flex justify-between items-center px-5 sm:px-10 py-4 z-40 absolute w-full right-0 left-0 top-0'>
        <MenuIcon toggle={toggle} menuOpen={menuOpen}/>

        <Logo onClick={closeMenu}/>
      </div>

      <MenuLinks menuOpen={menuOpen} closeMenu={closeMenu}/>
    </div>
)
}

export default MobileMenu;