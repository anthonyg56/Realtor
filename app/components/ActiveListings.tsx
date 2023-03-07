import React from 'react';
import ListItem from "./ListItem";
import Styles from "./styles/ActiveListings.module.scss"
import * as Contentful from 'contentful'
import { IListItemFields, TListItem } from '@/@types';

const client = Contentful.createClient({
  space: '3482eq1mhzki',
  accessToken: '4NrRmHPrf_v9RMyQij7GfKAV65bH39hjqHONkCHrPE4'
})

const getListItems = async () => {
  const listItems = await client.getEntries<IListItemFields>({ content_type: 'listItem'})
  .then((contentType) => {
    const items = contentType.items
    // console.log(items)
    return items
  })
  .catch(console.error)


  return listItems
}

export default async function ActiveListings() {
  const ListItems = await getListItems()

  /* Only want the first 3 items, so we slice the array */
  const consolidatedList = ListItems?.slice(0,3);

  const ListItemsDisplay = consolidatedList ? consolidatedList.map(element => {
    console.log(element)
    const item = element
    console.log(item)
    return (
      <ListItem
        slug={item.fields.slug}
        briefDescription={item.fields.briefDescription}
        coverPhoto={item.fields.coverImage.fields.file.url}
        propertyName={item.fields.propertyName}
      />
    );
  }) : ( <div><h3>No Active Listings Available</h3></div> );

  return (
    <React.Fragment>
      <div className={Styles.div1}>
        <div className={Styles.div2}>
          <div className={Styles.titleDiv}>
            <h2>Active Listings</h2>
          </div>
          <hr className={Styles.hr} />
          <div>
            <div className={Styles.listItemsDiv}>
              { ListItemsDisplay }
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
