import React from 'react';
import ActiveListings from "./components/ActiveListings";
import ContactMe from "./components/ContactMe";
import Header from "./components/HomepageHeader";

export default function Home() {
  return (
    <React.Fragment >
      <Header />
      {/* @ts-expect-error Server Component */}
      <ActiveListings />
      <ContactMe />
    </React.Fragment>
    
  )
}
