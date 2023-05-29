"use client"
import React from 'react';
import LeftPanel from './leftPanel';
import RightPanel from './rightPanel';
import Styles from './styles/index.module.scss';

export default function EmailCaptureModal() {
  return (
    <React.Fragment>
        <div className={Styles.container}>
          <LeftPanel />
          <RightPanel />
        </div>
    </React.Fragment>
  )
}
