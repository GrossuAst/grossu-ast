import styles from './navigation.module.css';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <nav className={styles.navigation}>
            <ul className={ styles.list }>
                <li className={ styles.listItem }>
                    <NavLink to='/' className={ ({isActive}) => isActive ? `${styles.link} ${styles.activeLink}` : `${styles.link}` } >
                        Главная
                    </NavLink>
                </li>
                <li className={ styles.listItem }>
                    <NavLink to='/portfolio'  className={ ({isActive}) => isActive ? `${styles.link} ${styles.activeLink}` : `${styles.link}` } >
                        Портфолио
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default Navigation;