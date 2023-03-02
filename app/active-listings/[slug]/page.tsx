import React from 'react'
import Header from './components/Header'
import Description from './components/Description'
import Style from './components/styles/Page.module.scss'
import { activeListingsItems, IActiveListingItem } from '../../../data/activeListingsData'

interface Props {
  params: {
    slug: string;
  };
  searchParams: {}
}

export default function ActiveListingsDetailsPage(props: Props) {
  const { slug } = props.params

  const activeListing = activeListingsItems.find(item => item.slug === slug)
  if (!activeListing) return (<div>No active listing</div>)
  const { 
    propertyImages,
    propertyName,
    price,
    fullDescription,
    address,
    bedRooms,
    bathRooms,
    size,
    descriptionPhoto
  } = activeListing

  return (
    <React.Fragment>
      <main className={Style.main}>
        <div className={Style.div}>
          <Header 
            images={propertyImages}
            propertyName={propertyName}
            price={price}
          />
          <Description 
            address={address}
            bathrooms={bathRooms}
            bedRooms={bedRooms}
            description={fullDescription}
            image={descriptionPhoto}
            houseSize={size}
          />
        </div>
      </main>
    </React.Fragment>
  )
}
