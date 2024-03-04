import styles from './portfolio.module.css';
import Main from '../../components/main/main';
import InfoSection from '../../components/info-section/info-section';
import PhotoCard from '../../components/photo-card/photo-card';

function Portfolio() {
    return (
        <Main>
            <PhotoCard />
            <InfoSection />
        </Main>
    )
};

export default Portfolio;