# Djact - Django e React para praticar desenvolvimento fullstack

**Setup inicial baseado no blogpost e nos dois vídeos abaixo**

- [Django REST with React Django and React together](https://valentinog.com/blog/tutorial-api-django-rest-react/#Django_REST_with_React_Django_and_React_together)
- [[Youtube] Full Stack React & Django [1] - Basic REST API](https://www.youtube.com/watch?v=Uyei2iDA4Hs)
- [[Youtube] Full Stack React & Django [2] - Implementing React](https://www.youtube.com/watch?v=GieYIzvdt2U)

Note que, em vez de criar duas aplicações separadas (uma API Django e um cliente React), o Django serve um template index.html único no qual a aplicação React é renderizado. Isso pareceu razoável no momento atual onde estou começando a estudar essas tecnologias devido a complexidade que a primeira opção apresenta.

## O que esse projeto ajudou a esclarecer

1. Configuração básica de um app Django REST + React com webpack e babel *_ver branch_ `first-setup-attmpt`
2. Criação de um ToDo App (lista de tarefas) *_ver branch_ `react-course-todoapp`
    2.1. JSX
    2.2. Eventos no DOM
    2.3. Componentes baseados em função ou classe
    2.4. Estado e seu gerenciamento
    2.5. Funções de ciclo de vida dos componentes
    2.6. Renderização condicional
    2.7. baseado no [React Tutorial: Learn React JS - Free 4-Hour Course](https://scrimba.com/learn/learnreact)
3. Fetch com React (em andamento) *_ver branch_ `fetch-api`

## Tecnologias, bibliotecas e outros recursos usados

- Django
- Django REST framework
- React
- webpack
- babel
- Bootstrap