import React from 'react';
import Style from '../styles/SinglePhoto.module.scss'

interface Props {
  img: string;
};

export default function SinglePhoto (props: Props) {
  const { img } = props;

  return (
    <React.Fragment>
      <div className={Style.mainDiv}>
        <div className={Style.containerDiv}>
          <img src={img} alt="" />
        </div>
      </div>
    </React.Fragment>
  );
};