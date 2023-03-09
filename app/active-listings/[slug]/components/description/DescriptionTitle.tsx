import React from 'react'
import Styles from '../styles/Description.module.scss'

interface Props {
  address: string;
};

export default function DescriptionTitle(props: Props) {

  return (
    <React.Fragment>
      <div className={Styles.title}>
        <h2>{props.address}</h2>
      </div>
    </React.Fragment>
  )
}
