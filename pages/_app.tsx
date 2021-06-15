import Head from 'next/head';
import React from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      </Head>
      <Component {...pageProps} />
    </>
    ) 
}

export default MyApp
