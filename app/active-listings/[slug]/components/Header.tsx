import React from 'react';
import Gallery from './gallery/Gallery';
import Styles from './styles/Header.module.scss'

interface Props {
  propertyName: string;
  price: number;
  images: string[];
};

export default function Header(props: Props) {
  const { images, price, propertyName } = props;

  return (
    <React.Fragment>
      <div className={Styles.mainDiv}>
        <div className={Styles.contentDiv}>
          <div className={Styles.titleDiv}>
            <h1>{propertyName} - ${price}</h1>
          </div>
          <hr />
          {images.length ? <Gallery imgs={images} /> : (<div><h2>No Photos available</h2></div>)}
        </div>
      </div>
    </React.Fragment>
  );
};
