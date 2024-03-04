import styles from './navigation.module.css';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <ul className={ styles.list }>
                <li className={ styles.listItem }>
                    <NavLink to='/' className={ styles.link }>
                        Главная
                    </NavLink>
                </li>
                {/* <li className={ styles.listItem }>
                    <NavLink to='/contacts'  className={ styles.link }>
                        Контакты
                    </NavLink>
                </li> */}
                <li className={ styles.listItem }>
                    <NavLink to='/portfolio'  className={ styles.link }>
                        Портфолио
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default Navigation;