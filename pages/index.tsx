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
        <TextImgSection title="Join others to play together!" text="With Gaming App, you can join other players that fit your gaming style so you can make new gaming friends and play together." img="./images/test.jpg" />
      </main>

      <footer className={styles.footer}>
       well this will be ad ifferent component so whatever
      </footer>
    </div>
  )
}
