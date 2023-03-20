import React from 'react'
import Link from 'next/link'
import DescriptionImage from './description/DescriptionImage';
import DescriptionText from './description/DescriptionText';
import Styles from './styles/Description.module.scss'

interface Props {
  description: string;
  image: string;
  address: string;
  bedRooms: number;
  bathrooms: number;
  houseSize: number;
}

export default function Description(props: Props) {
  const { 
    image,
    description,
    address,
    bedRooms,
    bathrooms,
    houseSize
  } = props

  return (
    <React.Fragment>
      <div>
        <DescriptionText  bathRooms={bathrooms} bedRooms={bedRooms} description={description} houseSize={houseSize} address={address} />
        <DescriptionImage image={image} />
        <div className={Styles.btn}>
          <button><Link href="/contact">Schedule a Tour Today</Link></button>
        </div>
      </div>
    </React.Fragment>
  )
}
