import styles from './Home.module.css';
import toothImg from '../../assets/images/toothTitle.png';
import bg from '../../assets/images/bg.jpg';

export default function Home(){
    return(
        <div className={styles.homeContainer}> 
            <div className={styles.titleContainer} style={{ backgroundImage: `url(${bg})` }}>
                <h1>Welcome to Artisan Dental Clinic</h1>
            </div>
        </div>
    )
}
