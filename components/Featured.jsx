import styles from '../styles/Featured.module.css';
import Image from 'next/image';
import { useState } from 'react';

const Featured = () => {

    const [index, setIndex] = useState(0);

    const wrapperBd = [
        {
            firstword: 'ANGELING',
            secondtword: 'WEBSITE',
            thirdword: '<> ON',
            fourword: 'ORDER NOW',
            fiveword: 'DEV CUTE',
            firstimage: '/img/angeling.png'

        },
        {
            firstword: 'DEVILING',
            secondtword: 'DARKSITE',
            thirdword: '<> OFF',
            fourword: 'ORDER NOW',
            fiveword: 'DEV DARK',
            firstimage: '/img/deviling.png'
    
        },
        {
            firstword: 'POI-POI',
            secondtword: 'WHAT?SITE',
            thirdword: '<> ?',
            fourword: 'ORDER NOW',
            fiveword: 'DEVRINGS',
            firstimage: '/img/poi-poi.png'
    
        },

];

    const handleArrow = (direction) => {
        if(direction === "l") {
            setIndex(index !== 0 ? index-1 : 2)
        }
        if(direction === "r") {
            setIndex(index !== 2 ? index+1 : 0)
        }
    }

  return (
    <div className={styles.container}>
        <div className={styles.arrowContainer} style={{ left: 0 }} onClick={() => handleArrow("l")}>
            <Image src='/img/arrow-left.svg' alt='' layout='fill' objectFit='contain'/>
        </div>
        
        <div className={styles.wrapper} style={{transform: `translateX(${-100*index}vw)`}}>
            {wrapperBd.map((wrapperBd, i) => (
                    <div className={styles.imgContainer} key={i}>
                        <div className={styles.textContainer} >
                            <h3>{wrapperBd.firstword}</h3>
                            <h1>{wrapperBd.secondtword}</h1>
                            <h3>{wrapperBd.thirdword}</h3>
                            <h3>{wrapperBd.fourword}</h3>
                            <h3>{wrapperBd.fiveword}</h3>
                        </div>
                        <Image src={wrapperBd.firstimage} alt='' width={500} height={500} objectFit='contain'/>
                    </div>
             ))}
        </div>
        <div className={styles.arrowContainer} style={{ right: 0 }} onClick={() => handleArrow("r")} >
            <Image src='/img/arrow-right.svg' alt='' layout='fill' objectFit='contain' />
        </div>
        
    </div>
  );
}

export default Featured;