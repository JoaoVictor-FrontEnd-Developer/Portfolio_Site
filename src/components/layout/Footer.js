import styles from './Footer.module.css'
import {FaEnvelope} from 'react-icons/fa'
import Container from './Container'

function Footer() {
    return (
        <footer className={styles.footer}>
            <Container>
                <p><FaEnvelope className={styles.email}/><a href="mailto:joaovictor.developer.frontend@gmail.com"> joaovictor.developer.frontend@gmail.com</a></p>
                <p>@2023 - Desenvolvido por João Victor</p>
            </Container>
        </footer>
    )
}

export default Footer;