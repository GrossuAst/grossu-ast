import styles from './not-found-page.module.css';
import { useNavigate, Link } from 'react-router-dom';

function NotFoundPage() {
    const navigate = useNavigate();
    function goBack() {
        navigate(-1);
    };

    return (
        <>
            <p>
                Страницы не существует
            </p>
            <Link to={ goBack() }>
                Вернуться
            </Link>
        </>
    )
};

export default NotFoundPage;