import Link from 'next/link';
import React from 'react';
import Styles from './styles/ListItem.module.scss'

interface Props {
  slug: string;
  image: string;
  propertyName: string;
  briefDescription: string;
}

export default function ListItem(props: Props) {
  const {
    slug,
    image,
    propertyName,
    briefDescription
  } = props

  return (
    <React.Fragment>
      <Link href={`/active-listings/${slug}`} className={Styles.linkWrapper}>
        <div className={Styles.contentDiv}>
          <div className={Styles.imageDiv}>
            <div className={Styles.innerImageDiv}>
             <img src={image} alt="" />
            </div>
          </div>
          <hr />
          <p>{propertyName}</p>
          <p>{briefDescription}</p>
        </div>
      </Link>
    </React.Fragment>
  )
}
