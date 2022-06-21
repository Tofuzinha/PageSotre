import styles from '../../styles/Product.module.css';
import Image from 'next/image';
import { useState } from 'react';

const Product = () => {
    const [size, setSize] = useState(0);
    const poi = {
        id: 1,
        img: '/img/poring.png',
        name: 'PORING',
        price: [19.90, 23.0, 27.9],
        desc: 'Poi-poi rosa fofura.'
    };

  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.imgContainer}>
                <Image src={poi.img} layout='fill' alt=''/>
            </div>
        </div>
        <div className={styles.right}>
            <h1 className={styles.title}>{poi.name}</h1>
            <span className={styles.price}>${poi.price[size]}</span>
            <p className={styles.desc}>{poi.desc}</p>
            <h3 className={styles.choose}>Choose the size</h3>
            <div className={styles.sizes}>
                <div className={styles.size} onClick={() =>setSize(0)}>
                    <Image src='/img/size.png' layout='fill' alt=''/>
                    <span className={styles.number}>Small</span>
                </div>
                <div className={styles.size} onClick={() =>setSize(1)}>
                    <Image src='/img/size.png' layout='fill' alt=''/>
                    <span className={styles.number}>Medium</span>
                </div>
                <div className={styles.size} onClick={() =>setSize(2)}>
                    <Image src='/img/size.png' layout='fill' alt=''/>
                    <span className={styles.number}>Large</span>
                </div>
            </div>
            <h3 className={styles.choose}>Choose additional porings</h3>
            <div className={styles.poringSelect}>
                <div className={styles.option}>
                    <input type='checkbox' id='double' name='double' className={styles.checkbox}/>
                    <label htmlFor='double'>Double Porings</label>
                </div>
                <div className={styles.option}>
                    <input type='checkbox' id='rose' name='rose' className={styles.checkbox}/>
                    <label htmlFor='rose'>Rose Porings</label>
                </div>
                <div className={styles.option}>
                    <input type='checkbox' id='pink' name='pink' className={styles.checkbox}/>
                    <label htmlFor='pink'>Pink Porings</label>
                </div>
                <div className={styles.option}>
                    <input type='checkbox' id='dark' name='dark' className={styles.checkbox}/>
                    <label htmlFor='dark'>Dark-Pink Porings</label>
                </div>
            </div>
            <div className={styles.add}>
                <input type='number' defaultValue={1} className={styles.quantity}/>
                <button className={styles.button}>add to Cart</button>
            </div>
        </div>
    
    </div>
  )
}

export default Product;