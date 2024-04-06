import styles from './portfolio.module.css';
import mestoMain from '../../images/mesto-main.png';
import burgerMain from '../../images/burger-main.png';
import diplomMain from '../../images/diplom-main.png';
import linkIcon from '../../images/link-icon.png';

function Portfolio() {
    return (
        <section className={styles.portfolio}>
            <h2 className={styles.title}>Портфолио</h2>
            <ul className={styles.list}>                
                <li className={styles.listItem}>
                    <article className={styles.project}>
                        <img src={burgerMain} className={styles.preview}/>
                        <div className={styles.description}>
                            <h2 className={styles.cardTitle}>"Stellar burger"</h2>
                            <p className={styles.textAbout}>Стек: JavaScript, TypeScript, React, Redux</p>
                            <div className={styles.links}>
                                <a href='https://grossu-ast-burger.netlify.app/' target={'_blank'} className={styles.link}>
                                    Перейти на сайт 
                                    <img src={linkIcon} className={styles.linkIcon}/>
                                </a>
                                <a href='https://github.com/GrossuAst/react-burger' target={'_blank'} className={styles.link}>
                                    Код проекта
                                    <img src={linkIcon} className={styles.linkIcon}/>
                                </a>
                            </div>
                            <p className={styles.textAbout}>
                                Сайт фентезийного фастфуд-ресторана. Предоставляет пользователю информацию о меню, возможность оформить заказ и отследить его статус.<br/>
                                На сайте представлена лента заказов, личный кабинет пользователя, возможность регистрации, авторизации и восстановления пароля.
                            </p>
                        </div>
                    </article>
                </li>
                <li className={styles.listItem}>
                    <article className={styles.project}>
                        <img src={mestoMain} className={styles.preview}/>
                        <div className={styles.description}>
                            <h2 className={styles.cardTitle}>"Mesto"</h2>
                            <p className={styles.textAbout}>Стек: JavaScript, React, NodeJs, express, MongoDb</p>
                            <div className={styles.links}>
                                <a href='https://grossuast.github.io/mesto/' target={'_blank'} className={styles.link}>
                                    Перейти на сайт 
                                    <img src={linkIcon} className={styles.linkIcon}/>
                                </a>
                                <a href='https://github.com/GrossuAst/react-mesto-api-full-gha' target={'_blank'} className={styles.link}>
                                    Код проекта
                                    <img src={linkIcon} className={styles.linkIcon}/>
                                </a>
                            </div>
                            <p className={styles.textAbout}>
                                Проект "Mesto"- социальная сеть, в которой пользователи могут обмениваться интересными фотографиями из разных уголков планеты.<br/>
                                Сайт предоставляет возможность регистрации и авторизации пользователя, обновления своего профиля, добавления фотографий с описанием места,
                                проставления лайков на понравившиеся фото других пользователей.
                            </p>
                        </div>
                    </article>
                </li>
                <li className={styles.listItem}>
                    <article className={styles.project}>
                        <img src={diplomMain} className={styles.preview}/>
                        <div className={styles.description}>
                            <h2 className={styles.cardTitle}>"Movies explorer"</h2>
                            <p className={styles.textAbout}>Стек: JavaScript, React, NodeJs, express, MongoDb</p>
                            <div className={styles.links}>
                                <a href='https://grossuast.movie.nomoreparties.sbs/' target={'_blank'} className={styles.link}>
                                    Перейти на сайт 
                                    <img src={linkIcon} className={styles.linkIcon}/>
                                </a>
                                <a href='https://github.com/GrossuAst/movies-explorer-frontend' target={'_blank'} className={styles.link}>
                                    Код проекта
                                    <img src={linkIcon} className={styles.linkIcon}/>
                                </a>
                                <p className={styles.textAbout}>
                                    Дипломная работа на курсе веб разработки.<br/>
                                    Состоит из статичной главной страницы, на которой собрана главная информация о проекте, а также представлен сервис
                                    поиска фильмов с возможностью фильтрации.<br/>
                                    На сайте доступна регистрация и авторизация, имеется личный кабинет.<br/>
                                    Пользователь может нажать на кнопку лайка понравившегося фильма и сохранить его в свой профиль.
                                </p>
                            </div>
                            <p className={styles.textAbout}>
                                
                            </p>
                        </div>
                    </article>
                </li>
            </ul>
        </section>
    )
};

export default Portfolio;