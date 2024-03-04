import styles from './info-section.module.css';

function InfoSection({ children }) {
    return (
        <section className={ styles.infoSection }>
            { children }
        </section>
    )
};

export default InfoSection;