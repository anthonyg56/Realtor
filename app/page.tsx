import React from 'react';
import ActiveListings from "./components/ActiveListings";
import ContactMe from "./components/ContactMe";
import Header from "./components/HomepageHeader";
import Socials from "./components/Socials";
import ContactForm from './contact/components/ContactForm';

export default function Home() {
  return (
    <React.Fragment >
      <Header />
      <ActiveListings />
      <ContactMe />
      <Socials />
    </React.Fragment>
    
  )
}
