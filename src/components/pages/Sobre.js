import styles from './Sobre.module.css'
import html5 from '../../img/html5.png'
import css3 from '../../img/css3.png'
import js from '../../img/js.png'
import react from '../../img/react.png'

function Sobre() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.sobre}>
                    <h1>SOBRE</h1>
                    <p>Cursando Engenharia de Software pela Unopar, dedico meus
                        estudos a área de programação com cursos de desenvolvimento web,
                        focado em JavaScript e React. Buscando através de projetos pessoais,
                        melhorar minhas habilidades nessas tecnologias.</p>
                    <p>Sou flexível a novos desafios, para aprender novas linguagens e conquistar
                        novas experiências, além de uma boa comunicação e trabalho em equipe.</p>
                </div>
                <div className={styles.hard_skills}>
                    <h1>HARD SKILLS</h1>
                    <ul>
                        <li><img src={html5} alt='html5'></img><p>HTML5</p></li>
                        <li><img src={css3} alt='css3'></img><p>CSS3</p></li>
                        <li><img src={js} alt='js'></img><p>JavaScript</p></li>
                        <li><img src={react} alt='react'></img><p>REACT JS</p></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Sobre;