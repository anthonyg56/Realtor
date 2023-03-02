import React from 'react'

interface Props {
  address: string;
};

export default function DescriptionTitle(props: Props) {

  return (
    <React.Fragment>
      <div>
        <h2>{props.address}</h2>
      </div>
    </React.Fragment>
  )
}
