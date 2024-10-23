import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Grid from '../components/Grid';
import Footer from '../components/Footer';
import '../css/App.css'

function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Grid />
      </main>
      <Footer />
    </>

  );
}

export default Home;
