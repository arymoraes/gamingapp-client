import Head from 'next/head'
import Header from '../components/header/Header/Header';
import React from 'react'
import styles from '../styles/Home.module.scss'
import { TextImgSection } from '../components/partials/TextImgSection/TextImgSection';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Unnamed Gaming App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>

      <main className={styles.main}>
        <section className={styles.title}>
          Come play with us
        </section>
        <TextImgSection title="It takes more than soldiers to forge a nation" text="Choose how you'll survive the haunted wilderness of Aeternum as you forge alliances, battle for resources, and make your mark on an emerging empire." img="./images/test.jpg" />
      </main>

      <footer className={styles.footer}>
       well this will be ad ifferent component so whatever
      </footer>
    </div>
  )
}