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
    console.log(contentType.items)
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

  // const { 
  //   propertyPhotos,
  //   propertyName,
  //   price,
  //   description,
  //   address,
  //   bedRooms,
  //   bathRooms,
  //   size,
  //   descriptionPhoto
  // } = listItem[0].fields

  /* Collect all the photos and store the URL's in an array */
  const photos = listItem[0].fields.propertyPhotos.map(element => element.fields.file.url)

  return (
    <React.Fragment>
      <main className={Style.main}>
        <div className={Style.div}>
          <Header 
            images={photos}
            propertyName={listItem[0].fields.propertyName}
            price={listItem[0].fields.price}
          />
          <Description 
            address={listItem[0].fields.address}
            bathrooms={listItem[0].fields.bathRooms}
            bedRooms={listItem[0].fields.bedRooms}
            description={listItem[0].fields.description}
            image={listItem[0].fields.descriptionPhoto.fields.file.url}
            houseSize={listItem[0].fields.size}
          />
        </div>
      </main>
    </React.Fragment>
  )
}
