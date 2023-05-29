"use client"
import React, { Dispatch, SetStateAction, useState } from 'react'
import Submitted from './Submitted';
import Form from './Form';
import Styles from './styles/rightPanel.module.scss'

export default function RightPanel() {
  const [submitted, setSubmit] = useState(false);

  return (
    <React.Fragment>
      <div className={Styles.container}>
        <div>
          <div className={Styles.hotAndNew}>
            <p>Hot</p>
            <p>&</p>
            <p>New</p>
          </div>
          <div className={Styles.newListings}>
            <h3>New Listings</h3>
          </div>
          <div className={Styles.subscribe}>
            <h4>Subscribe to out list and be updated on what's hot & new</h4>
          </div>
          {submitted === false ? <Form setSubmit={setSubmit}/> : <Submitted />}
        </div>
      </div>
    </React.Fragment>
  )
}
