import React from 'react';
import { CallToActionWithVideo } from '../components/CallToActionWithVideo'
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { Pricing } from '../components/Pricing';

const IndexPage = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <CallToActionWithVideo />
        <Pricing />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default IndexPage
