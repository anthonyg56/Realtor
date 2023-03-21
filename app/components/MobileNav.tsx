"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Styles from './styles/MobileNav.module.scss'
import Image from 'next/image';
import CloseIcon from '../../public/close.png'

interface Props {
  pathName: string | null;
  isActiveListing: () => boolean;
  isScrolled: boolean
  params?: {
    slug: string
  }
}

export default function MobileNav(props: Props) {
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  const burgerMenuStyles = isMenuClicked ? Styles.visible : Styles.NotVisible

  const { pathName, isActiveListing, isScrolled } = props

  const styles = {
    backgroundColor: isScrolled ? 'white'  : 'black'
  }

  const toggleMenu = () => {
    setIsMenuClicked(!isMenuClicked)
  }

  const handleClick = () => {
    setIsMenuClicked(false)
  }

  return (
    <React.Fragment>
      <div className={Styles.burgerMenuContainer}>
        <div className={Styles.burgerMenu} onClick={e => toggleMenu()}>
          <div className={Styles.burgerBar} style={styles}></div>
          <div className={Styles.burgerBar} style={styles}></div>
          <div className={Styles.burgerBar} style={styles}></div>
        </div>
        <div className={burgerMenuStyles}>
          <div className={Styles.closePng}>
            <Image src={CloseIcon} alt="Close Icon" onClick={() => setIsMenuClicked(!isMenuClicked)}/>
          </div>
          <Link href="/" className={pathName === '/' ? Styles.active : ''} onClick={e => handleClick()}>Home</Link>
          <Link href="/active-listings" className={isActiveListing() ? Styles.active : ''}  onClick={e => handleClick()}>Active Listings</Link>
          <Link href="/about" className={pathName === '/about' ? Styles.active : ''}  onClick={e => handleClick()}>About</Link>
          <Link href="/contact" className={pathName === '/contact' ? Styles.active : ''}  onClick={e => handleClick()}>Contact</Link>
        </div>
      </div>
    </React.Fragment>
  )
}
