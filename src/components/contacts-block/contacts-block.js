import styles from './contacts-block.module.css';
import TelegramIcon from '../../images/social_telegram_icon.svg';
import PhoneIcon from '../../images/social_phone_icon.svg';
import LetterIcon from '../../images/letter_icon.svg';
import GithubIcon from '../../images/social-github.svg';

function ContactsBlock() {
    return (
        <section className={ styles.contacts }>
            <h2 className={ styles.title }>Связь со мной:</h2>
            <ul className={ styles.list }>
                <li className={ styles.listItem }>
                    <a className={ styles.link } href={'tel:+79267012840'}>
                        <img className={ styles.icon } src={PhoneIcon} />
                        +7(926)-701-28-40
                    </a>

                </li>
                <li className={ styles.listItem }>                   
                    <a className={ styles.link } href='https://t.me/Grossoooo' target="_blank">
                        <img className={ styles.icon } src={TelegramIcon} />
                        t.me/Grossoooo
                    </a>
                </li>
                <li className={ styles.listItem }>
                    <img className={ styles.icon } src={LetterIcon} />
                    maxgrossu@yandex.ru
                </li>
                <li className={ styles.listItem }>
                    <a className={ styles.link } href='https://github.com/GrossuAst' target="_blank">
                        <img className={ styles.icon } src={GithubIcon} />
                        Github
                    </a>
                </li>
            </ul>
        </section>
    )
};

export default ContactsBlock;