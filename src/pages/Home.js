import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Grid from '../components/Grid';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner
          image={`${process.env.PUBLIC_URL}/e270fc8fc902a1eb738458e7b29c1899.jpg`}
          text="Chez vous, partout et ailleurs"
          showText={true}
        />
        <Grid />
      </main>
      <Footer />
    </>
  );
}

export default Home;
