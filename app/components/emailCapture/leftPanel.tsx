"use client"
import React from 'react'
import Styles from './styles/leftPanel.module.scss'

export default function LeftPanel() {
  return (
    <React.Fragment>
      <div className={Styles.container}>
        <div className={Styles.img}></div>
      </div>
    </React.Fragment>
  )
}
