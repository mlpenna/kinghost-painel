
<h3 align="center">Painel de controle para revenda Kinghost</h3>

  <p align="center">
    Gerenciamento de domínios e contas de e-mail dos clientes de revenda de hospedagem Kinghost
    <br />
    <br />
    <a href="https://github.com/mlpenna/kinghost-painel/issues">Reportar Bug</a>
    ·
    <a href="https://github.com/mlpenna/kinghost-painel/issues">Sugerir Feature</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## Sobre o Projeto

https://user-images.githubusercontent.com/97969692/161121725-82b16226-f02b-4957-b27c-008f4b7f60b1.mp4

Um painel de controle para gerenciar as contas de hospedagem web de clientes utilizando a API de revenda disponibilizada pela Kinghost. A documentação desta API se encontra [aqui](https://api.kinghost.net/doc/Cliente).

A consulta à API é realizada utilizando a lib [digest-fetch](https://www.npmjs.com/package/digest-fetch). Sendo uma das poucas disponíveis que suportam autenticação do tipo digest (o único tipo aceito pela API disponível).
Algumas consultas são realizadas em tempo de requisição (SSR) com a função [getServerSideProps()](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props#using-getserversideprops-to-fetch-data-at-request-time) do Next.js

### Principais Tecnologias

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]

<!-- GETTING STARTED -->
## Instruções

### Executando o ambiente de desenvolvimento

1. Clone o repositório
   ```sh
   git clone https://github.com/mlpenna/kinghost-painel.git
   ```
2. Instale os pacotes NPM 
   ```sh
   npm install
   ```
3. Crie o arquivo `.env.local` no diretório raiz do projeto, preenchendo com o seu usuário e senha da API Kinghost nos dois primeiros campos:
   ```sh
    API_USER={USUARIO_API}
    API_PASSWORD={SENHA_API}
    API_BASE_CLIENTES=https://api.uni5.net/cliente.json
    API_BASE_DOMAIN_BY_CLIENTE=https://api.uni5.net/dominio/
    API_BASE_DOMAIN_INFO=https://api.uni5.net/dominio/informacoes/
    API_BASE_DOMAIN_EMAILS=https://api.uni5.net/email/
    API_BASE_EMAIL_TAMANHO=https://api.kinghost.net/email/edittamanho/;
   ```
4. Execute o ambiente de desenvolvimento do Next.js
   ```sh
   npm run dev
   ```

<!-- ROADMAP -->
## Roadmap

- [x] Seleção de cliente e lista de domínio de cada cliente
- [x] Visualização de informações sobre domínio (dados essenciais, espaço disponível para web e e-mails no servidor)
- [x] Gerenciamento de espaço disponível para as caixas de e-mail do domínio

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
