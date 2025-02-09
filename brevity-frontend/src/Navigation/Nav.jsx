import styles from './Nav.module.css'

function Nav(){
    return (
        <ul className={styles.nav}>
            <li className={styles.left}><a href="#">Brevity: URL Shortner</a></li>
            <li className={styles.second}><a>Sign Up</a></li>
            <li><a>Log In</a></li>
        </ul>
    );
}

export default Nav