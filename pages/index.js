import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Featured from '../components/Featured';
import PoringList from '../components/PoringList';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dev Poring</title>
        <meta name="description" content="Fofura de dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <PoringList/>
      
    </div>
  );
}
