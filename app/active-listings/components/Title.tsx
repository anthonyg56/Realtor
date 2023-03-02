import React from 'react'
import Styles  from './styles/Title.module.scss'

export default function Title() {
  return (
    <React.Fragment>
      <div className={Styles.container}>
        <h1>Active Listings</h1>
      </div>
    </React.Fragment>
  );
};
