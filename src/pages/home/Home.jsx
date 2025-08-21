import styles from './Home.module.css';
import toothImg from '../../assets/images/toothTitle.png';
import bg from '../../assets/images/bg.jpg';

export default function Home(){
    return(
        <div className={styles.homeContainer}> 
            <div className={styles.titleContainer}>
                <div className={styles.titleLeft}>
                <h1>"Time Heals Everthing" Except cavities, those need a dentist</h1>
                <button>Book Now!</button>
                </div>
                <div className={styles.titleRight}>
                    <img src={toothImg} alt="Tooth" />
                </div>
            </div>
        </div>
    )
}
