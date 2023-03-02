import { activeListingsItems } from '@/data/activeListingsData';
import Link from 'next/link'
import React from 'react'
import ListItem from '../components/ListItem';
import Title from './components/Title'
import Styles from './components/styles/Page.module.scss'

export default function ActiveListingsPage() {
  const ListItems = activeListingsItems.length ? activeListingsItems.map(element => {
    return (
      <ListItem
        slug={element.slug}
        briefDescription={element.briefDescription}
        image={element.image}
        propertyName={element.propertyName}
      />
    );
  }) : ( <div><h3>No Active Listings Available</h3></div> );

  return (
    <main className={Styles.main}>
      <div className={Styles.containerDiv}>
        <div className={Styles.contentDiv}>
          <Title />
          <hr />
          <div className={Styles.ListItems}>
            <div className={Styles.listItemsContainer}>
              { ListItems }
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
