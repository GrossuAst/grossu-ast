import styles from './home.module.css';
import Main from '../../components/main/main';
import InfoSection from '../../components/info-section/info-section';
import PhotoCard from '../../components/photo-card/photo-card';
import ContactsBlock from '../../components/contacts-block/contacts-block';

function Home() {
    return (
        <Main>
            <PhotoCard />
            <InfoSection>
                <ContactsBlock />
            </InfoSection>
        </Main>
    )
};

export default Home;