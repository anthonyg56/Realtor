import React from 'react'
import Header from './components/Header'
import Description from './components/Description'
import Style from './components/styles/Page.module.scss'
import { IListItemFields } from '@/@types'
import * as Contentful from 'contentful'

const client = Contentful.createClient({
  space: '3482eq1mhzki',
  accessToken: '4NrRmHPrf_v9RMyQij7GfKAV65bH39hjqHONkCHrPE4'
})

const getListItem = async (slug: string) => {
  const listItems = await client.getEntries<IListItemFields>({ content_type: 'listItem', 'fields.slug': slug })
  .then((contentType) => {
    const items = contentType.items

    return items
  })
  .catch(console.error)


  return listItems
}

interface Props {
  params: {
    slug: string;
  };
  searchParams: {}
}

export default async function ActiveListingsDetailsPage(props: Props) {
  const { slug } = props.params

  const listItem = await getListItem(slug)

  if (!listItem) return (<div>No active listing</div>)

  const { 
    propertyPhotos,
    propertyName,
    price,
    description,
    address,
    bedRooms,
    bathRooms,
    size,
    descriptionPhoto
  } = listItem[0].fields

  /* Collect all the photos and store the URL's in an array */
  const photos = propertyPhotos.map(({ fields }) => fields.file.url)

  return (
    <React.Fragment>
      <main className={Style.main}>
        <div className={Style.div}>
          <Header 
            images={photos}
            propertyName={propertyName}
            price={price}
          />
          <Description 
            address={address}
            bathrooms={bathRooms}
            bedRooms={bedRooms}
            description={description}
            image={descriptionPhoto.fields.file.url}
            houseSize={size}
          />
        </div>
      </main>
    </React.Fragment>
  )
}
