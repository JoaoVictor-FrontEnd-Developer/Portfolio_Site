import styles from './MenuPhone.module.css'
import { Link } from 'react-router-dom'
import {AiOutlineClose} from 'react-icons/ai'

function MenuPhone({ menuVisible, onHandleClick}) {
    return (
        <div className={`${styles.mobile_menu} ${styles[menuVisible]}`}>
            <ul className={styles.mobile_list}>
                <li><AiOutlineClose onClick={onHandleClick} className={styles.close} /></li>
                    <li onClick={onHandleClick} className={styles.mobile_item}><Link to="/">Início</Link></li>
                    <li onClick={onHandleClick} className={styles.mobile_item}><Link to="/projetos">Projetos</Link></li>
                    <li onClick={onHandleClick} className={styles.mobile_item}><Link to="/sobre">Sobre</Link></li>
                </ul>
        </div>
    )
}

export default MenuPhone;