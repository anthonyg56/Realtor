import React from 'react'
import AboutMeBiography from './components/AboutMeBiography'
import AboutMePic from './components/AboutMePic'
import AboutMeTitle from './components/AboutMeTitle'
import Styles from './components/styles/Page.module.scss'
import * as Contentful from 'contentful'
import { Document } from '@contentful/rich-text-types'
import { IAboutMeFields } from '@/@types'
import { getAboutMeData } from '@/utils/contentful'


export default async function AboutPage() {
  const data = await getAboutMeData() as Contentful.Entry<IAboutMeFields>[]
  
  return (
    <React.Fragment>
      <div className={Styles.mainDiv}>
        <div className={Styles.innerDiv}>
          <AboutMeTitle />
          <hr />
          <div className={Styles.contentDiv}>
            <AboutMePic image={data[0].fields.profilePic.fields.file.url} />
            <AboutMeBiography description={data[0].fields.biographyRichText as Document} />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
