import styles from './URLForm.module.css'

function URLForm(){
    return (
        <div className={styles.cover}>
            <h1>Brevity</h1>
            <form className={styles.container}>
                <input
                    type="text"
                    placeholder="Enter long URL"
                />
                <input type="submit" value="Shorten"/>
            </form>
            <h3>Paste. Shorten. Manage.</h3>
        </div>
    );
}

export default URLForm