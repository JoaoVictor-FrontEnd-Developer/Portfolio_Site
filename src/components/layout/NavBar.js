import {Link} from 'react-router-dom'
import styles from './NavBar.module.css'
import Container from './Container'
import {FaBars} from 'react-icons/fa'


function NavBar({onHandleClick}) {
    return (
    <nav className={styles.nav_container}>
            <Container>
                <Link to="/"><p>{`</>`}</p></Link>
                <FaBars onClick={onHandleClick} className={styles.mobile_menu_bars} />
                <ul className={styles.nav_list}>
                    <li className={styles.nav_item}><Link to="/">Início</Link></li>
                    <li className={styles.nav_item}><Link to="/projetos">Projetos</Link></li>
                    <li className={styles.nav_item}><Link to="/sobre">Sobre</Link></li>
                    
                </ul>
        </Container>
      </nav>

    )
}

export default NavBar;