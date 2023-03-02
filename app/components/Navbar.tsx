"use client"

import Link from 'next/link'
import { useEffect, useState } from 'react'
import {usePathname} from "next/navigation"
import Styles from './styles/Navbar.module.scss'
import MobileNav from './MobileNav'

export default function Navbar(props: any) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const styles = { 
    backgroundColor: scrolled ? Styles.backgroundColor : '',
    color: scrolled ? '#ffffff' : 'rgba(0,0,0)'
  }

  const handleScroll = () => {
    const offset = window.scrollY;

    offset > 5 ? setScrolled (true) : setScrolled(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  const isActiveListing = () => {
    if (pathname === '/active-listings') {
      return true
    } else if (props.params && pathname === `/active-listings/${props.params.slug}`) {
      return true
    }

    return false
  }

  return (
    <main className={Styles.main} style={styles}>
      <div className={Styles.containerDiv}>
        <div className={Styles.logoDiv}>
          <Link href='/'>
            <h2>[Realtor's Name]</h2>
          </Link>
        </div>
        <div className={Styles.linksDiv}>
          <Link href="/" className={pathname === '/' ? Styles.active : ''}>Home</Link>
          <Link href="/active-listings" className={isActiveListing() ? Styles.active : ''}>Active Listings</Link>
          <Link href="/about" className={pathname === '/about' ? Styles.active : ''}>About</Link>
          <Link href="/contact" className={pathname === '/contact' ? Styles.active : ''}>Contact</Link>
        </div>
        <MobileNav pathName={pathname} isActiveListing={() => isActiveListing()} isScrolled={scrolled}/>
      </div>
    </main>
  )
}
