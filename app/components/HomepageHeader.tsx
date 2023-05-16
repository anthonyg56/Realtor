import React from 'react'
import Styles from './styles/Header.module.scss'

export default function Header() {
  return (
    <React.Fragment>
      <div className={Styles.mainDiv}>
        <div className={Styles.innerDiv}>
          <h1>Alec Mason <br /> Real Estate Broker <br /> Located in Indianapolis</h1>
        </div>
      </div>
    </React.Fragment>
  )
}
