import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaChevronDown, FaChevronUp} from 'react-icons/fa'
import styles from './Projetos.module.css'
import ProjectCard from '../layout/ProjectCard'
import ToDoList from '../../img/ToDoList.png'
import validationForm from '../../img/validationForm.png'
import fylo from '../../img/fylo.png'
import moonFilms from '../../img/moonFilms.png'
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
                        img={ToDoList}
                        titulo="To-do-List React"
                        texto={<p>Projeto desenvolvido durante estudos em React Js. Este projeto foi criado
                        para prática de uma SPA que realizasse um CRUD em uma lista de tarefas. Dessa forma, 
                        é possível adicionar tarefas nas lista, marcar como concluída, editar o título da tarefa e 
                        excluir a tarefa. E com LocalStorage, os estados são salvas na memória.</p>}
                        tecnologias={[<FaHtml5/>, <FaCss3Alt/>, <FaJs/>, <FaReact/>]}
                        repositorio="https://github.com/JoaoVictor-FrontEnd-Developer/To-do-List-React.git"
                        site="https://to-do-list-react-amber.vercel.app/"
                        
                    />
                    <ProjectCard
                        img={moonFilms}
                        titulo="MoonFilms"
                        texto={<><p>Site de catálogo de filmes, com Axios API. Nesse projeto pessoal, desenvolvi um 
                            catálogo de filmes utilizando ReactJs para construir dinamicamente a estrutura do catálogo 
                            usando manipulação do DOM com base nas informações recebidas da API TMDB.</p><br/>
                            <p>Para criação do carrossel, utilizei a biblioteca SWIPER, que disponibiliza de métodos
                                com que nos permite criar carroséis de forma rápida e precisa. Assim como cada
                                animação está sendo controlada pela biblioteca AOS, que revela cada componente com o scroll
                                na página.
                            </p><br />
                            <p>O projeto também conta com uma busca de "auto complete" que a cada palavra digitada é gerado
                                sugestões de títulos semelhantes ao que o usuário está buscando.
                            </p>
                        </>
                            
                        }
                        tecnologias={[<FaHtml5/>, <FaCss3Alt/>, <FaJs/>, <FaReact/>]}
                        repositorio="https://github.com/JoaoVictor-FrontEnd-Developer/MoonFilms.git"
                        site="https://moon-films.vercel.app/"
                        customClass="row_reverse"
                    />
                    
                    <ProjectCard
                        img={validationForm}
                        titulo="Validation Form"
                        texto={<p>Projeto desenvolvido como resolução de um desafio do site Front End Mentor. 
                        Nesse projeto, o JavaScript tem como objetivo principal identificar e sinalizar 
                        se o formulário está preenchido corretamente.</p>}
                        tecnologias={[<FaHtml5/>, <FaCss3Alt/>, <FaJs/>]}
                        repositorio="https://github.com/JoaoVictor-FrontEnd-Developer/Validation-Form.git"
                        site="https://joaovictor-frontend-developer.github.io/Validation-Form/"
                    />

                    {MoreProjects && (
                        <ProjectCard
                        img={fylo}
                        titulo="Landing Page"
                        texto={<p>Projeto desenvolvido durante estudos de HTML e CSS, aplicando conceitos
                        de flex box e responsividade.</p>}
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