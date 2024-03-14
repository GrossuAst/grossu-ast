import styles from './photo-card.module.css';
import Avatar from '../../images/photo.jpg';

function PhotoCard() {
    return (
        <article className={ styles.photoCard }>
            <div className={ styles.photoPlace }>
                <img className={ styles.photo } alt='Фото автора' src={ Avatar } />
            </div>
            <h3 className={ styles.title }>Максим, 28 лет</h3>
            <p className={ styles.description }>Фронтенд разработчик</p>
        </article>
    )
};

export default PhotoCard;