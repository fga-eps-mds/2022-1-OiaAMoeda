<p align="center">  <img alt="Oia a Moeda" src="Docs/Imgs/Logo/Oia_a_moeda.svg" width="400px"></p>

[![BCH compliance](https://bettercodehub.com/edge/badge/pabloheika/2022-1-OiaAMoeda?branch=main)](https://bettercodehub.com/)

## 📝Sobre
Este projeto tem como objetivo criar um site para uma melhor visualização de informações referentes ás cripto moedas presentes no mercado atualmente, em conjunto com noticias sobre as mesmas, com o objetivo de reduzir o tempo gasto por investidores e empresas ao realizar uma analise mais aprofundada, ou mais rasa, sobre a moeda desejada

## 💻Tecnologias Utilizadas
Cada Tag pode ser clicada e levará para o link de download da tecnologia ou de como utiliza-la em outra plataforma(como o VScode), para ser mais pratico de se contribuir  😊
### 👨‍💻Desenvolvimento
[<img alt="tagVsCode" src="https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=VISUALSTUDIOCODE&logoColor=white">](https://code.visualstudio.com/download)
[<img alt="tagJS" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[<img alt="tagHtml" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">](https://code.visualstudio.com/docs/languages/html)
[<img alt="tagCss" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">](https://code.visualstudio.com/docs/languages/css)
[<img alt="tagBootstrap" src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white">](https://getbootstrap.com/docs/5.2/getting-started/introduction/)
[<img alt="tagGitDesktop" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white">](https://desktop.github.com/)



### 🗣️Comunicação
[<img alt="tagDiscord" src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white">](https://discord.com/download)
[<img alt="tagWpp" src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white">](https://web.whatsapp.com/)
[<img alt="tagTelegram" src="https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white">](https://web.telegram.org/)

## 📜Como Contribuir
Para contribuir com o projeto, é extremamente importante e recomendado que siga o [Guia de como contribuir com o projeto](https://github.com/fga-eps-mds/2022-1-OiaAMoeda/blob/main/Docs/CONTRIBUTING.md) onde será encontrado tudo necessario para se contribuir, como templates, codigo de conduta e politicas.              
E tambem deverá estar atento ao nosso [Codigo de Conduta](https://github.com/fga-eps-mds/2022-1-OiaAMoeda/blob/develop/Docs/CODE_OF_CONDUCT.md).

## 👨‍💻💪Instalação e execução do projeto

### 👨‍💻Requisitos
#### Node
É necessário ter instalado e configurado o node ^16.17.0.
Download: https://nodejs.org/en/download/

#### Apache2
https://www.digitalocean.com/community/tutorials/how-to-install-the-apache-web-server-on-ubuntu-22-04

### 💪Execução
Execução no Ubuntu 22.04.1 LTS

1. Entre na pasta.
```sh
cd $HOME
```

2. Clone o repositório do projeto:
```sh
git clone https://github.com/fga-eps-mds/2022-1-OiaAMoeda.git
```

3. copie o frontend para o servidor apache
```sh
sudo cp -r $HOME/2022-1-OiaAMoeda/OiaMoeda/UI/ /var/www/html/
```

4. Entre na pasta do backend:
```sh
cd $HOME/2022-1-OiaAMoeda/OiaMoeda/server/
```

5. Instale as dependências:
```sh
npm i
```

6. Execute o server
```sh
 node server.js
```

> :warning: O frontend por padrão fica no localhost:80 e o backend está em localhost:3003
