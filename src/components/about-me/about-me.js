import styles from './about-me.module.css';

function AboutMe() {
    return (
        <section className={styles.about}>
            <div className={styles.infSection}>
                <h2 className={styles.title}>Обо мне:</h2>
                <p className={styles.info}>Привет!</p>
                <p className={styles.info}>
                    Вы находитесь на моем персональном сайте-визитке.
                    Для удобства я собрал здесь самую необходимую для работодателя информацию обо мне и моих навыках.<br/>
                </p>
                <p className={styles.info}>
                    Я началь свой путь разработчика летом 2022 года с самостоятельного изучения верстки.
                    И уже скоро поступил на курс "Веб-разработчик" от ЯндексПрактикум, который успешно завершил.
                    На нем я освоил важнейший стек технологий, который применяю в проектах.<br/>
                </p>
                <p className={styles.info}>
                    Нахожусь в поиске не просто работы, а именно моего места в команде мечты, где смогу реализовать свой потенциал.
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
        </section>
    )
};

export default AboutMe;