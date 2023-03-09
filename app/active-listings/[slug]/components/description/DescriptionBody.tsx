import React from 'react'
import Styles from '../styles/Description.module.scss'

interface Props {
  bedRooms: number;
  bathRooms: number;
  houseSize: number;
  description: string;
}

export default function DescriptionBody(props: Props) {
  const {
    bathRooms,
    bedRooms,
    houseSize,
    description
  } = props
  
  return (
    <React.Fragment>
      <div className={Styles.bodyContainer}>
        <div className={Styles.rooms}>
          <h4>{bedRooms} BR | {bathRooms} BA | {houseSize} sqft</h4>
        </div>
        <div className={Styles.descriptionText}>
          <p>{description}</p>
        </div>
      </div>
    </React.Fragment>
  )
}
