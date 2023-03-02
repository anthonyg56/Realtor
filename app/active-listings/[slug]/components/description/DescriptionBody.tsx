import React from 'react'

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
      <div>
        <div>
          <h4>{bedRooms} BR | {bathRooms} BA | {houseSize} sqft</h4>
        </div>
        <div>
          <p>{description}</p>
        </div>
        <div>
          <button>Schedule a Tour Today</button>
        </div>
      </div>
    </React.Fragment>
  )
}
