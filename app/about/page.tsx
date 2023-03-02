import React from 'react'
import AboutMeBiography from './components/AboutMeBiography'
import AboutMePic from './components/AboutMePic'
import AboutMeTitle from './components/AboutMeTitle'
import Styles from './components/styles/Page.module.scss'
import { AboutMeData } from '@/data/activeListingsData'
export default function AboutPage() {

  return (
    <React.Fragment>
      <div className={Styles.mainDiv}>
        <div className={Styles.innerDiv}>
          <AboutMeTitle />
          <hr />
          <div className={Styles.contentDiv}>
            <AboutMePic image={AboutMeData.image} />
            <AboutMeBiography description={AboutMeData.description} />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
