import React from 'react'
import Styles from '../styles/Description.module.scss'

interface Props {
  image: string;
}

export default function DescriptionImage(props: Props) {
  const { image } = props;

  return (
    <React.Fragment>
      <div className={Styles.imgContainer}>
        <div className={Styles.img}>
          <img src={image} alt="" />
        </div>
      </div>
    </React.Fragment>
  );
};
