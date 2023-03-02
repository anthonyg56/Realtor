import React from 'react'
import Styles from './styles/AboutMeBiography.module.scss'

interface Props {
  description: string;
}

export default function AboutMeBiography(props: Props) {
  return (
    <React.Fragment>
      <div className={Styles.mainDiv}>
        <div className={Styles.innerDiv}>
          <h2>Biography</h2>
          <p>{props.description}</p>
        </div>
      </div>
    </React.Fragment>
  )
}
