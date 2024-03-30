import styles from './contacts-block.module.css';
import TelegramIcon from '../../images/social_telegram_icon.svg';
import PhoneIcon from '../../images/social_phone_icon.svg';
import LetterIcon from '../../images/letter_icon.svg';

function ContactsBlock() {
    return (
        <div className={ styles.contacts }>
            <h2 className={ styles.title }>Связь со мной:</h2>
            <ul className={ styles.list }>
                <li className={ styles.listItem }>
                    <img className={ styles.icon } src={PhoneIcon} />
                    <p className={ styles.contact }>+7(926)-701-28-40</p>
                </li>
                <li className={ styles.listItem }>                   
                    <a className={ styles.link } href='https://t.me/Grossoooo'>
                        <img className={ styles.icon } src={TelegramIcon} />
                        t.me/Grossoooo
                    </a>
                </li>
                <li className={ styles.listItem }>
                    <img className={ styles.icon } src={LetterIcon} />
                    <p className={ styles.contact }>maxgrossu@yandex.ru</p>
                </li>
            </ul>
        </div>
    )
};

export default ContactsBlock;