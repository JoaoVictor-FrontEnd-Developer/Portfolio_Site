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
                            <h1>Olá, me chamo João Victor ;</h1>
                            <p>Desenvolvedor Front End</p>
                        </div>
                        <div className={styles.buttons}>
                            <a href='https://www.linkedin.com/in/jo%C3%A3o-victor-632a1021a/' target='_blank'><FaLinkedin/> Linkedin</a>
                            <a href='https://github.com/JoaoVictor-FrontEnd-Developer' target='_blank'><FaGithub/> Github</a>
                            <a href='https://drive.google.com/file/d/144Nn-fpJBHMNzPAUVPwCTBZIGr39x3gy/view?usp=sharing' target='_blank'><FaDownload/> Currículo</a>
                        </div>
                    </div>

                    <div className={styles.profile}>
                        <img src={profile}></img>
                        </div>
            
                </div>
            </section>
        )
}

export default Home;