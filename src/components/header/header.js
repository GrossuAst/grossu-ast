import styles from './header.module.css';
import Logo from '../../images/logo.png';

function Header() {
    return (
        <header className={ styles.header }>
            <div className={ styles.wrapper }>
                <div className={ styles.logoContainer }>
                    <img src={ Logo } className={ styles.logo } />
                    <p className={ styles.title }>.Frontend-developer</p>
                </div>
            </div>
        </header>
    )
};

export default Header;