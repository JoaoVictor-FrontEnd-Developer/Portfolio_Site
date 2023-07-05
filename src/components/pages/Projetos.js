import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import styles from "./Projetos.module.css";
import ProjectCard from "../layout/ProjectCard";

import ToDoList from "../../img/ToDoList.png";
import validationForm from "../../img/validationForm.png";
import fylo from "../../img/fylo.png";
import catalogoFilmes from "../../img/catalogo_filmes.png";
import quiz from "../../img/quiz.png";

import { useState } from "react";

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
            texto={
              <>
                <p>
                  Projeto desenvolvido durante estudos em React Js. Este projeto
                  foi criado para prática de uma SPA que realizasse um CRUD em
                  uma lista de tarefas. Dessa forma, é possível adicionar
                  tarefas nas lista, marcar como concluída, editar o título da
                  tarefa e excluir a tarefa. E com LocalStorage, os estados são
                  salvas na memória.
                </p>
                <br />
              </>
            }
            tecnologias={[<FaHtml5 />, <FaCss3Alt />, <FaJs />, <FaReact />]}
            repositorio="https://github.com/JoaoVictor-FrontEnd-Developer/To-do-List-React.git"
            site="https://to-do-list-react-amber.vercel.app/"
          />
          <ProjectCard
            img={catalogoFilmes}
            titulo="Catálogo de Filmes"
            texto={
              <>
                <p>
                  Neste catálogo de filmes, você pode realizar pesquisas de
                  títulos famosos do cinema e adicionar qualquer filme a sua
                  lista de favoritos para visualizar quando quiser os detalhes
                  sobre cada filme e assistir ao seu trailer.
                </p>
                <br />
                <p>
                  Nesse projeto, utilizei de um Hook poderoso que estive
                  aprendendo, Context API, que me permitiu gerenciar o estado
                  global da aplicação, assim, resolvendo meu problema com o
                  armazenamento e exibição de filmes na página de favoritos.
                  Pois esse hook nos permite utilizarmos as informações
                  armazenadas em qualquer lugar da aplicação.
                </p>
                <br />
                <p>
                  Para as informações dos filmes, foi utilizado a API The Movie
                  Database (TMDB).
                </p>
                <br />
              </>
            }
            tecnologias={[
              <FaHtml5 />,
              <FaCss3Alt />,
              <FaJs />,
              <FaReact />,
              <FaBootstrap />,
            ]}
            repositorio="https://github.com/JoaoVictor-FrontEnd-Developer/Favorite_Films.git"
            site="https://favorite-films.vercel.app"
            customClass="row_reverse"
          />

          <ProjectCard
            img={quiz}
            titulo="Quiz de Programação"
            texto={
              <>
                <p>
                  Este projeto, é um jogo que contém um banco de perguntas
                  reordenadas ao inciar o jogo, e a cada questão respondida é
                  gerado uma resposta visual para as respostas corretas, ao
                  final do jogo, o usuário pode verificar sua pontuação e
                  reiniciar o jogo.
                </p>
                <br />
                <p>
                  {" "}
                  Criado durante estudos de Context API, que tem como objetivo
                  gerenciar um estado global para a aplicação, com isso, poder
                  acessar este estado de qualquer componente.
                </p>
                <br />
              </>
            }
            tecnologias={[<FaHtml5 />, <FaCss3Alt />, <FaJs />, <FaReact />]}
            repositorio="https://github.com/JoaoVictor-FrontEnd-Developer/quiz-programacao.git"
            site="https://quiz-programacao-theta.vercel.app/"
          />

          {MoreProjects && (
            <>
              <ProjectCard
                img={validationForm}
                titulo="Validation Form"
                texto={
                  <>
                    <p>
                      Projeto desenvolvido como resolução de um desafio do site
                      Front End Mentor. Nesse projeto, o JavaScript tem como
                      objetivo principal identificar e sinalizar se o formulário
                      está preenchido corretamente.
                    </p>
                    <br />
                  </>
                }
                tecnologias={[<FaHtml5 />, <FaCss3Alt />, <FaJs />]}
                repositorio="https://github.com/JoaoVictor-FrontEnd-Developer/Validation-Form.git"
                site="https://joaovictor-frontend-developer.github.io/Validation-Form/"
              />

              <ProjectCard
                img={fylo}
                titulo="Landing Page"
                texto={
                  <>
                    <p>
                      Projeto desenvolvido durante estudos de HTML e CSS,
                      aplicando conceitos de flex box e responsividade.
                    </p>
                    <br />
                  </>
                }
                tecnologias={[<FaHtml5 />, <FaCss3Alt />]}
                repositorio="https://github.com/JoaoVictor-FrontEnd-Developer/projeto-landing-page.git"
                site="https://joaovictor-frontend-developer.github.io/projeto-landing-page/"
                customClass="row_reverse"
              />
            </>
          )}

          <div className={styles.buttons}>
            <button onClick={Visible}>
              {!MoreProjects ? (
                <FaChevronDown className={styles.icon_button} />
              ) : (
                <FaChevronUp className={styles.icon_button} />
              )}
              {!MoreProjects ? "Ver mais" : "Ver menos"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projetos;
