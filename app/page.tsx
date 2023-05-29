import React from 'react';
import ActiveListings from "./components/ActiveListings";
import ContactMe from "./components/ContactMe";
import Header from "./components/HomepageHeader";
import { ModalProvider } from './components/modal';

export default function Home() {
  return (
    <React.Fragment >
      <ModalProvider>
        <Header />
        {/* @ts-expect-error Server Component */}
        <ActiveListings />
        <ContactMe />
      </ModalProvider>
    </React.Fragment>
    
  )
}
