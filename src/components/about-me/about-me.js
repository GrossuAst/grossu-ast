import styles from './about-me.module.css';

function AboutMe() {
    return (
        <div className={styles.about}>
            <div className={styles.infSection}>
                <h2 className={styles.title}>Обо мне:</h2>
                <p className={styles.info}>Привет!</p>
                <p className={styles.info}>
                    Ты находишься на моем персональном сайте-визитке.
                    Для удобства я собрал здесь самую необходимую для работодателя информацию обо мне и моих навыках.<br/>
                </p>
                <p className={styles.info}>
                    Я началь свой путь разработчика летом 2022 года с самостоятельного изучения верстки.
                    И уже скоро 
                </p>
            </div>
            <div className={styles.infSection}>
                <h2 className={styles.title}>Ключевые навыки:</h2>
                <ul className={styles.list}>
                    <li className={`${styles.listItem} ${styles.uppercase}`}>
                        <p className={styles.text}>thml</p>
                    </li>
                    <li className={`${styles.listItem} ${styles.uppercase}`}>
                        <p className={styles.text}>CSS</p>
                    </li>
                    <li className={`${styles.listItem}`}>
                        <p className={styles.text}>JavsScript</p>
                    </li>
                    <li className={`${styles.listItem}`}>
                        <p className={styles.text}>TypeScript</p>
                    </li>
                    <li className={`${styles.listItem}`}>
                        <p className={styles.text}>React</p>
                    </li>
                    <li className={`${styles.listItem}`}>
                        <p className={styles.text}>Redux</p>
                    </li>
                    <li className={`${styles.listItem}`}>
                        <p className={styles.text}>NodeJs</p>
                    </li>
                    <li className={`${styles.listItem}`}>
                        <p className={styles.text}>MongoDb</p>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default AboutMe;