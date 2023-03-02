import React from 'react'
import Styles from './styles/Footer.module.scss'

export default function Footer() {
  return (
    <main>
      <div className={Styles.contentDiv}>
        <div className={Styles.leftDiv}>
          <p>Copyright 	&copy; 2023 Realtors Name - All Rights Reserved.</p>
        </div>
      </div>
    </main>
  )
}
