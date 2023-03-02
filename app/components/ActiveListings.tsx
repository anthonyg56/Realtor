import React from 'react';
import { activeListingsItems } from '../../data/activeListingsData';
import ListItem from "./ListItem";
import Styles from "./styles/ActiveListings.module.scss"

export default function ActiveListings() {
  /* Only want the first 3 items, so we slice the array */
  const consolidatedList = activeListingsItems.slice(0,3);

  const ListItems = consolidatedList.length ? consolidatedList.map(element => {
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
    <React.Fragment>
      <div className={Styles.div1}>
        <div className={Styles.div2}>
          <div className={Styles.titleDiv}>
            <h2>Active Listings</h2>
          </div>
          <hr className={Styles.hr} />
          <div>
            <div className={Styles.listItemsDiv}>
              { ListItems }
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
