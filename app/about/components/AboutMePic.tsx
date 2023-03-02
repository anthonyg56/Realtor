import React from 'react'
import Styles from './styles/AboutMePic.module.scss'

interface Props {
  image: string;
}

export default function AboutMePic(props: Props) {

  return (
    <React.Fragment>
      <div className={Styles.mainDiv}>
        <div className={Styles.contentDiv}>
          <img src={props.image} alt="" />
        </div>
      </div>
    </React.Fragment>
  )
}
