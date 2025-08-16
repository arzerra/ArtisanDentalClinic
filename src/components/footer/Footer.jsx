import style from './Footer.module.css';

export default function Footer(){
    return(
        <footer className={style.footer}>
            <p>&copy; {new Date().getFullYear()} Artisan Dental Clinic</p>

            
        </footer>
    );
}