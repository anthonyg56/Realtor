import React from 'react'
import ListItem from '../components/ListItem';
import Title from './components/Title'
import Styles from './components/styles/Page.module.scss'
import * as Contentful from 'contentful'
import { IListItemFields, TListItem } from '@/@types';

const client = Contentful.createClient({
  space: '3482eq1mhzki',
  accessToken: '4NrRmHPrf_v9RMyQij7GfKAV65bH39hjqHONkCHrPE4'
})

const getListItems = async () => {
  const listItems = await client.getEntries<IListItemFields>('listItem')
  .then((contentType) => {
    const items = contentType.items

    console.log(items)

    return items
  })
  .catch(console.error)


  return listItems
}

export default async function ActiveListingsPage() {
  const listItems = await getListItems()

  const ListItems = listItems ?listItems.map(({ fields: element }) => {
    return (
      <ListItem
        slug={element.slug}
        briefDescription={element.briefDescription}
        coverPhoto={element.coverImage.fields.file.url}
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
