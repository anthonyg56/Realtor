import React from 'react'
import Styles from '../styles/DoublePhoto.module.scss'

interface Props {
  img1: string;
  img2: string;
}

export default function DoublePhoto(props: Props) {
  const { img1, img2 } = props
  return (
    <React.Fragment>
      <div className={Styles.container}>
        <div className={Styles.photoOutterContainer}>
          <div className={Styles.photo1Container}>
            <img src={img1} alt="" />
          </div>
        </div>
        <div className={Styles.photoOutterContainer}>
          <div className={Styles.photo2Container}>
            <img src={img2} alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
