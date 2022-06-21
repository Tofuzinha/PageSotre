import styles from '../styles/PoringList.module.css';
import PoringCard from './PoringCard';

const PoringList = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>THE BEST CUTE IN AMERICA</h1>
        <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem in ipsum culpa ut minima eius magni quibusdam temporibus repudiandae molestiae enim, facilis nobis commodi minus, placeat provident iure exercitationem id!</p>

        <div className={styles.wrapper}>
            <PoringCard/>
            <PoringCard/>
            <PoringCard/>
            <PoringCard/>
            <PoringCard/>
            <PoringCard/>
            <PoringCard/>
            <PoringCard/>

        </div>

    </div>
  )
}

export default PoringList;