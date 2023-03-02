import React from 'react'
import DoublePhoto from './DoublePhoto';
import SinglePhoto from './SinglePhoto';

interface Props {
  imgs: string[];
}

export default function Gallery(props: Props) {
  const { imgs } = props

  return (
    <React.Fragment>
      <div>
        <SinglePhoto img={imgs[0]} />
        <DoublePhoto
          img1={imgs[1]}
          img2={imgs[2]}
        />
      </div>
    </React.Fragment>
  )
}
