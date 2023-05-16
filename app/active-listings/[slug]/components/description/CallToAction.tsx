import React from 'react'
import Link from 'next/link'
import Styles from '../styles/CallToAction.module.scss'

export default function CallToAction() {
  return (
    <React.Fragment>
      <div className={Styles.callToAction}>
        <div className={Styles.title}>
          <h2>Lets Chat!</h2>
        </div>
        <div className={Styles.btn}>
          <button><Link href="/contact">Schedule a Tour Today</Link></button>
        </div>
      </div>
    </React.Fragment>
  )
}
