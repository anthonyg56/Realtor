import React from 'react'
import DescriptionBody from './DescriptionBody';
import DescriptionTitle from './DescriptionTitle'
import Styles from '../styles/Description.module.scss'

interface Props {
  address: string;
  bedRooms: number;
  bathRooms: number;
  houseSize: number;
  description: string;
};

export default function DescriptionText(props: Props) {
  const {
    address,
    bathRooms,
    bedRooms,
    description,
    houseSize
  } = props

  return (
    <React.Fragment>
      <div>
        <div>
          <DescriptionTitle address={address} />
          <hr />
          <br />
          <DescriptionBody bathRooms={bathRooms} bedRooms={bedRooms} description={description} houseSize={houseSize} />
        </div>
      </div>
    </React.Fragment>
  )
}
