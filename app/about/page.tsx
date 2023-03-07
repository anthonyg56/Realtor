import React from 'react'
import AboutMeBiography from './components/AboutMeBiography'
import AboutMePic from './components/AboutMePic'
import AboutMeTitle from './components/AboutMeTitle'
import Styles from './components/styles/Page.module.scss'
import * as Contentful from 'contentful'
import { IAboutMeFields } from '@/@types'

const client = Contentful.createClient({
  space: '3482eq1mhzki',
  accessToken: '4NrRmHPrf_v9RMyQij7GfKAV65bH39hjqHONkCHrPE4'
})

const getAboutMeData = async () => {
  const listItems = await client.getEntries<IAboutMeFields>({ content_type: 'aboutMe' })
  .then((contentType) => {
    const items = contentType.items

    return items
  })
  .catch(console.error)

  return listItems
}

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
            <AboutMeBiography description={data[0].fields.biography} />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
