import {FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import styles from './ProjectCard.module.css'


function ProjectCard({ img, titulo, texto, tecnologias, repositorio, site, customClass}) {
    return (
        <div className={`${styles.card_container} ${styles[customClass]}`}>
            <div className={styles.imagem}>
                <img src={img} alt="img"/>
            </div>

            <div className={styles.text_container}>
                <h1>{titulo}</h1>
                {texto}
                <ul>
                    {tecnologias.map((tecnologia, key) => <li key={key}>{tecnologia}</li>)}
                </ul>

                <div className={styles.buttons}>
                <a href={site} target='_blank' rel="noreferrer"><FaExternalLinkAlt/> Visualizar</a>
                    <a href={repositorio} target='_blank' rel="noreferrer"><FaGithub/> Repositório</a>
                 </div>
            </div>



        </div>
    )
}

export default ProjectCard;