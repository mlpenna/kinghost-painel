# Painel para integração com API de revenda da Kinghost

Este projeto foi realizado como um estudo sobre o desenvolvimento full stack utilizando React.js, Next.js, Tailwind, e alguns conceitos presentes nestas ferramentas.
O objetivo foi construir um painel de controle para gerenciar as contas de hospedagens de alguns clientes utilizando a API de revenda disponibilizada pela empresa de hospedagem Kinghost. A documentação desta API se encontra [aqui](https://api.kinghost.net/doc/Cliente).
Apesar de ser um projeto de estudo, a aplicação utiliza um ambiente real fornecido por uma empresa de hospedagem parceira.

https://user-images.githubusercontent.com/97969692/161121725-82b16226-f02b-4957-b27c-008f4b7f60b1.mp4



## Principais tecnologias

O projeto foi desenvolvido utilizando as tecnologias e frameworks abaixo:

- Typescript/CSS/HTML
- React.js
- Next.js
- Tailwind CSS


## Backend

A consulta aos endpoints da API é feita utilizando a biblioteca [digest-fetch](https://www.npmjs.com/package/digest-fetch). Sendo uma das poucas disponíveis para realizar autenticação do tipo digest (o único tipo aceito pela API disponível).
Algumas consultas são realizadas em tempo de requisição (server side rendering) com a função [getServerSideProps()](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props#using-getserversideprops-to-fetch-data-at-request-time) do Next.js

## Features implementadas

- Seleção de cliente e lista de domínio de cada cliente
- Visualização de informações sobre domínio (dados essenciais, espaço disponível para web e e-mails no servidor)
- Gerenciamento de espaço disponível para as caixas de e-mail do domínio
