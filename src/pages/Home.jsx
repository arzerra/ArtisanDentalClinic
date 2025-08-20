import styles from './Home.module.css';
import toothImg from '../assets/images/toothTitle.png';

export default function Home(){
    return(
        <div className={styles.container}>
        <div className={styles.home}>
            <div className={styles.left}>
                <h1>
                    "Time Heals Everything"
                    <br />Except cavities, those need a dentist.
                </h1>
                <button>Book Now!</button>
            </div>
            <div className={styles.right}>
                <img src={toothImg} alt="Tooth" />
            </div>
        </div>
        </div>
    )
}
