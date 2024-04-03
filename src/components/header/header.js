import styles from './header.module.css';
import Logo from '../../images/logo.png';
import Navigation from '../navigation/navigation';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className={ styles.header }>
            <div className={ styles.wrapper }>
                <Link to='/' className={ styles.logoContainer }>
                    <img src={ Logo } alt='Логотип сайта' className={ styles.logo } />
                    <p className={ styles.title }>.Frontend-developer</p>
                </Link>
                {/* <Navigation /> */}
            </div>
        </header>
    )
};

export default Header;