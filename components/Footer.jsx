import styles from '../styles/Footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src='/img/bg.jpg' layout='fill' alt=''/>
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}> OH YES, WE DID. PORING SO CUTE</h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}> FIND OUR POI-POI</h1>
          <p className={styles.text}>
            cyber programming 123
            <br/> My world, 1000
            <br/> (123) 99999-9999
          </p>
          <br/>
          <p className={styles.text}>
            cyber programming 123
            <br/> My world, 1000
            <br/> (123) 99999-9999
          </p>
          <br/>
          <p className={styles.text}>
            cyber programming 123
            <br/> My world, 1000
            <br/> (123) 99999-9999
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}> WORKING</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br/> 09:00 - 24:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br/> 12:00 - 24:00
          </p>
          
        </div>
      </div>
    </div>
  )
}

export default Footer