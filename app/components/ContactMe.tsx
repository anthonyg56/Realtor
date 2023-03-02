import Link from 'next/link'
import React from 'react'
import Styles from './styles/ContactMe.module.scss'

export default function ContactMe() {
  return (
    <React.Fragment>
      <div className={Styles.container}>
        <div className={Styles.innerContainer}>
          <div className={Styles.titleContainer}>
            <h2>Ready to buy your new home?</h2>
          </div>
          <div className={Styles.btnContainer}>
              <Link href='/contact'><button>Contact me</button></Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
