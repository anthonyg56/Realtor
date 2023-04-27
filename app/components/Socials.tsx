import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Styles from './styles/Socials.module.scss'

export default function Socials() {
  return (
    <React.Fragment>
      <div className={Styles.socials}>
        <div className={Styles.socialsContainer}>
          <div className={Styles.iconContainer}>
            <a href='https://www.linkedin.com/in/alec-mason-4633aa1b8'><FontAwesomeIcon icon={faLinkedin} className="Facebook" size='2xl'/></a>
          </div>
          <div className={Styles.iconContainer}>
            <a href='https://instagram.com/_thatdudealec?igshid=YmMyMTA2M2Y='><FontAwesomeIcon icon={faInstagram} className="Facebook" size='2xl'/></a>
          </div>
          <div className={Styles.iconContainer}>
            <a href='https://www.facebook.com/alec.mason.12?mibextid=LQQJ4d'><FontAwesomeIcon icon={faFacebook} className="Facebook" size='2xl'/></a>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
