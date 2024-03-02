import styles from './home.module.css';
import Header from '../../components/header/header';
import InfoSection from '../../components/info-section/info-section';
import PhotoCard from '../../components/photo-card/photo-card';

function Home() {
    return (
        <>
            <Header />
            <main className={ styles.main }>
                <PhotoCard />
                <InfoSection />
            </main>
        </>
    )
};

export default Home;