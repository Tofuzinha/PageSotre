import styles from '../styles/PoringCard.module.css';
import Image from 'next/image';

const PoringCard = () => {
  return (
    <div className={styles.container}>
      <Image src='/img/poring.png' alt='' width='500' height='500' />
      <h1 className={styles.title}>Poring</h1>
      <span className={styles.price}>$ 0.00</span>
      <p className={styles.desc}>
      O Poring é uma criatura rosa, em formato de bolha, do jogo Ragnarök Online (MMORPG) e do anime Ragnarok The Animation...
      </p>
    </div>
  )
}

export default PoringCard;