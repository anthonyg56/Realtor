import Link from 'next/link';
import React from 'react';
import Styles from './styles/ListItem.module.scss'

interface Props {
  slug: string;
  coverPhoto: string;
  propertyName: string;
  briefDescription: string;
}

export default function ListItem(props: Props) {
  const {
    slug,
   coverPhoto,
    propertyName,
    briefDescription
  } = props

  return (
    <React.Fragment>
      <Link href={`/active-listings/${slug}`} className={Styles.linkWrapper}>
        <div className={Styles.contentDiv}>
          <div className={Styles.imageDiv}>
            <div className={Styles.innerImageDiv}>
             <img src={coverPhoto} alt="" />
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
