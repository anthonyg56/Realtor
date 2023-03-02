"use client"

import React, { useState } from 'react'
import ContactForm from './components/ContactForm'
import ContactTitle from './components/ContactTitle'
import Submitted from './components/Submitted';
import Styles from './components/styles/Page.module.scss'

export default function ContactPage() {
  const [submitted, setState] = useState(false);

  return (
    <React.Fragment>
      <div className={Styles.outterDiv}>
        <div className={Styles.innerDiv}>
          <ContactTitle />
          <hr />
          { submitted ? <Submitted /> : <ContactForm setSubmit={(e) => setState(e)} /> }
        </div>
      </div>
    </React.Fragment>
  )
}
