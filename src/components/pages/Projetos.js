import { FaHtml5, FaCss3Alt, FaJs, FaChevronDown, FaChevronUp} from 'react-icons/fa'
import styles from './Projetos.module.css'
import ProjectCard from '../layout/ProjectCard'
import starFilms from '../../img/starfilms.png'
import ToDoList from '../../img/ToDoList.png'
import validationForm from '../../img/validationForm.png'
import fylo from '../../img/fylo.png'
import { useState } from 'react'

function Projetos() {

    const [MoreProjects, setMoreProjects] = useState(false);

    function Visible() {
        setMoreProjects(!MoreProjects);
    }

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h1> PROJETOS </h1>

                <div className={styles.projects}>
                    <ProjectCard
                        img={starFilms}
                        titulo="StarFilms"
                        texto="Site de catálogo de filmes, com Fetch API. Nesse projeto pessoal, desenvolvi um 
                        catálogo de filmes utilizando JavaScript para construir dinamicamente a estrutura do catálogo 
                        usando manipulação do DOM com base nas informações recebidas da API."
                        tecnologias={[<FaHtml5/>, <FaCss3Alt/>, <FaJs/>]}
                        repositorio="https://github.com/JoaoVictor-FrontEnd-Developer/StarFilms-API.git"
                        site="https://joaovictor-frontend-developer.github.io/StarFilms-API/"
                    />
                    <ProjectCard
                        img={ToDoList}
                        titulo="Task List"
                        texto="Projeto desenvolvido através da aula do YouTuber Felipe Rocha, 
                        aprendendo como manipular o DOM de forma dinamica, salvando, alterando e 
                        excluindo items de uma lista de tarefas com LocalStorage."
                        tecnologias={[<FaHtml5/>, <FaCss3Alt/>, <FaJs/>]}
                        repositorio="https://github.com/JoaoVictor-FrontEnd-Developer/TaskList.git"
                        site="https://joaovictor-frontend-developer.github.io/TaskList/"
                        customClass="row_reverse"
                    />
                    <ProjectCard
                        img={validationForm}
                        titulo="Validation Form"
                        texto="Projeto desenvolvido como resolução de um desafio do site Front End Mentor. 
                        Nesse projeto, o JavaScript tem como objetivo principal identificar e sinalizar 
                        se o formulário está preenchido corretamente."
                        tecnologias={[<FaHtml5/>, <FaCss3Alt/>, <FaJs/>]}
                        repositorio="https://github.com/JoaoVictor-FrontEnd-Developer/Validation-Form.git"
                        site="https://joaovictor-frontend-developer.github.io/Validation-Form/"
                    />

                    {MoreProjects && (
                        <ProjectCard
                        img={fylo}
                        titulo="Landing Page"
                        texto="Projeto desenvolvido durante estudos de HTML e CSS, aplicando conceitos
                        de flex box e responsividade."
                        tecnologias={[<FaHtml5/>, <FaCss3Alt/>]}
                        repositorio="https://github.com/JoaoVictor-FrontEnd-Developer/projeto-landing-page.git"
                        site="https://joaovictor-frontend-developer.github.io/projeto-landing-page/"
                        customClass="row_reverse"
                    />
                    )
                    }

                    <div className={styles.buttons}>
                        <button onClick={Visible}>
                            {!MoreProjects ? <FaChevronDown className={styles.icon_button} /> : <FaChevronUp className={styles.icon_button} />}
                            {!MoreProjects ? 'Ver mais' : 'Ver menos'}
                        </button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Projetos;