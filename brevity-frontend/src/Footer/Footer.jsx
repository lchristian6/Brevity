import styles from './Footer.module.css'

function Footer(){
    return(
        <footer>
            <p>&copy; {new Date().getFullYear()} Brevity</p>
        </footer>
    );
}

export default Footer