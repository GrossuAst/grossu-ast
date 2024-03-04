import styles from './contacts.module.css';
import Main from '../../components/main/main';
import InfoSection from '../../components/info-section/info-section';
import PhotoCard from '../../components/photo-card/photo-card';

function Contacts() {
    return (
        <Main>
            <PhotoCard />
            <InfoSection />
        </Main>
    )
};

export default Contacts;