import styles from './photo-card.module.css';
import Avatar from '../../images/photo.jpg';

function PhotoCard() {
    return (
        <article className={ styles.photoCard }>
            <div className={ styles.photoPlace }>
                <img className={ styles.photo } alt='Фото автора' src={ Avatar } />
            </div>
            <h3 className={ styles.title }>Максим</h3>
            <p className={ styles.description }>Фронтенд разработчик</p>
            <ul>
                {/* <li>
                    <p>Тел</p>
                </li>
                <li>
                    <p>Telegram</p>
                </li> */}
            </ul>
        </article>
    )
};

export default PhotoCard;