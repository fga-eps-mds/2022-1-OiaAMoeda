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
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)  
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"> 

### 🗣️Comunicação
[<img alt="tagDiscord" src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white">](https://discord.com/download)
[<img alt="tagWpp" src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white">](https://web.whatsapp.com/)
[<img alt="tagTelegram" src="https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white">](https://web.telegram.org/)

## 📜Como Contribuir
Para contribuir com o projeto, é extremamente importante e recomendado que siga o [Guia de como contribuir com o projeto](https://github.com/fga-eps-mds/2022-1-OiaAMoeda/blob/main/Docs/Como_Contribuir.md) onde será encontrado tudo que vai ser necessário para se contribuir com o projeto. Como por exemplo templates, política de branches, política de commits e tutoriais de como criar uma issue e/ou um pull request.              
O usuário que estiver disposto a contribuir com o projeto deverá deverá estar atento ao [Codigo de Conduta]( https://github.com/fga-eps-mds/2022-1-OiaAMoeda/blob/main/Docs/Codigo_de_conduta.md).


## 👨‍💻💪Instalação e execução do projeto

### 👨‍💻Requisitos

#### Git
https://git-scm.com/downloads

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

3. Remova versão antigas e copie o frontend para o servidor apache
```sh
sudo rm -r /var/www/html/UI | sudo cp -r $HOME/2022-1-OiaAMoeda/OiaMoeda/UI/ /var/www/html/
```
> Este comando deve ser executado á cada nova versão/alteração para que possam ser aplicadas. Apos as modificações forçar atualizacão sem cache com o comando Ctrl + Shift + R.

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

link do video da release 2: https://drive.google.com/drive/folders/1UAXGwSgYdNfpRLNlubQ8GyU2GEbKM8s9?usp=sharing

> :warning: O frontend por padrão fica no localhost:80/UI e o backend está em localhost:3003
