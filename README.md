# Plataforma Digital para ONGs - Entrega III: Interatividade e Funcionalidades

## Descrição do Projeto
Este repositório contém a terceira entrega do projeto de desenvolvimento web, focada na implementação de interatividade e funcionalidades avançadas utilizando JavaScript. O objetivo é transformar a interface estática (Entrega II) em uma aplicação web dinâmica e interativa, simulando uma Single Page Application (SPA) e implementando validação de formulários robusta.

## Tecnologias Utilizadas
- HTML5 (Estrutura da Entrega I)
- CSS3 (Estilização, Flexbox, Grid, Variáveis CSS - Entrega II)
- **JavaScript Avançado** (Módulos ES6, Manipulação do DOM, Roteamento Básico SPA, Templates JS, Validação de Formulários)

## Estrutura de Arquivos
- `index.html`: Página principal que serve como container para o SPA.
- `cadastro.html`: Página de cadastro (mantida para fins de estrutura, mas o conteúdo é carregado via SPA).
- `css/`: Pasta com todos os arquivos de estilo (Entrega II).
- `js/`: Pasta com os módulos JavaScript.
  - `main.js`: Script do menu hambúrguer (Entrega II).
  - `app.js`: Módulo principal que inicializa o roteador e as funcionalidades.
  - `templates.js`: Módulo com os templates HTML e a lógica de roteamento SPA.
  - `validation.js`: Módulo com as funções de validação de formulário (CPF, Idade, etc.).

## Funcionalidades Implementadas (Entrega III)
1.  **SPA Básico:** Navegação entre as páginas (Início, Projetos, Cadastro) sem recarregar a página, utilizando roteamento baseado em hash (`#`).
2.  **Templates JavaScript:** O conteúdo principal das páginas é renderizado dinamicamente a partir de templates definidos em JavaScript.
3.  **Validação de Formulário Modular:** Sistema de verificação de consistência de dados no formulário de cadastro (`cadastro.html`), com aviso visual ao usuário para campos incorretos (CPF, Idade mínima de 18 anos, etc.).

## Contexto Acadêmico
**Disciplina:** [Nome da Disciplina]
**Professor:** [Nome do Professor]
**Entrega:** Interatividade e Funcionalidades (Entrega III)

## Autor
Gabriel Trindade
