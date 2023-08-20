import styles from './Home.module.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa'
import profile from '../../img/profile.png'



function Home() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                
                    <div className={styles.text_container}>
                        
                        <ul className={styles.icons}>
                            <li><FaHtml5/></li>
                            <li><FaCss3Alt/></li>
                            <li><FaJs/></li>
                            <li><FaReact/></li>
                            </ul>
                        
                        <div className={styles.text}>
                            <h1>Olá, sou Desenvolvedor Front End ;</h1>
                            <p>Me chamo João Victor</p>
                        </div>
                        <div className={styles.buttons}>
                            <a href='https://www.linkedin.com/in/jo%C3%A3o-victor-632a1021a/' target='_blank' rel="noreferrer"><FaLinkedin/> Linkedin</a>
                            <a href='https://github.com/JoaoVictor-FrontEnd-Developer' target='_blank' rel="noreferrer"><FaGithub/> Github</a>
                            <a href='https://drive.google.com/file/d/1iZ9TusaXMQeA4vOwkmW1jqrlvImIqISE/view?usp=sharing' target='_blank' rel="noreferrer"><FaDownload/> Currículo</a>
                        </div>
                    </div>

                    <div className={styles.profile}>
                        <img src={profile} alt='img-profile'></img>
                        </div>
            
                </div>
            </section>
        )
}

export default Home;