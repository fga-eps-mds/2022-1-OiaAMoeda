# Documento de Arquitetura

| Data | Versão | Descrição | Autor |
| :-: | :-: | :-: | :-: |
| 01/07/2022 | 0.1 | Criação do documento de arquitetura | Arthur Taylor e Thiago Oliveira |
| 12/07/2022 | 0.2 | Atualização do documento de arquitetura | Renato Gabriel M. Carvalho |
| 15/07/2022 | 0.2.1 | Atualização do documento de arquitetura | Joâo Pedro Anacleto Ferreira Machado |

## 1: Introdução

### 1.1. Objetivo

Este documento visa, definir claramente de modo geral a visão arquitetural do projeto "Oia a moeda" evidenciando as características nescessárias para o controle arquitetural do projeto, evidenciando as tomadas de decisões realizadas pela equipe do projeto que molda todo o processo de desenvolvimento do projeto.

### 1.2 Escopo

O mercado das criptomoedas vem crescendo de forma muito rápida nos últimos tempos, com novas moedas sendo lançadas com uma frequência muito maior do que em anos anteriores. Um dos maiores problemas das criptomoedas é a grande volatilidade das mesmas, onde novos compras ou vendas em massa podem ser instigadas por até mesmo uma simples postagem em uma rede social.

Devido esta grande volatilidade nós decidimos criar uma aplicação para o monitoramento de criptomoedas. Com o usúario podendo selecionar quais moedas gostariam de acompanhar, para facilitar o acompanhamento da flutuação do mercado em um único lugar, e podendo assim diminuir os esforços de busca por informação das criptos e poder ter um maior controle das suas finanças. 

### 1.3 Definições, Acrônimos e Abreviações

| Sigla |Significado |
| :-: | :-: |
|**UnB**| Universidade de Brasília
|**FGA**| Faculdade do Gama 
|**MDS**| Métodos de Desenvolvimento de Software

### 1.4 Visão Geral

Este documento está dividido em 6 grandes tópicos com subdivisões e tem como objetivo final detalhar as características arquiteturais do projeto, bem como seus requisitos e motivações. Os tópicos e a seção de referências podem ser encontrados a seguir:

| n° |Tópico |Descrição |
| :-: | :-: | :-: |
|**1**|**Introdução**| Fornece ao leitor uma visão geral do conteúdo abordado no documento
|**2**|**Representação Arquitetural**| Detalha a arquitetura utilizada no projeto e como ela está organizada |
|**3**|**Metas e Restrições da Arquitetura**| Descreve os objetivos do projeto, bem como suas restrições, do ponto de vista arquitetural |
|**4**|**Visão dos casos de uso**| Descreve as partes significativas do ponto de vista da arquitetura do modelo de casos de uso |
|**5**|**Visão Lógica**| Descreve as partes significativas do ponto de vista da arquitetura do modelo de design |
|**6**|**Desempenho e Qualidade**| Descreve as características de desempenho do Software, bem como as restrições estabelecidas e possíveis falhas
|**7**|**Referências**| Fornece ao leitor uma visão geral das referência utilizadas durante a criação deste documento |

## 2: Representação Arquitetural

O projeto consiste em realizar uma integração de APIS disponibilizadas gratuitamente no mercado com o intuito de criar uma dashboard no qual ofereçca ao usuario a capacidade de observar graficos,noticias e dados de uma criptomoeda selecionada.

## 3: Metas e Restrições da arquitetura

### 3.1. Requisitos
Este projeto tem como principal intuito fazer um painel para disponibilizar aos usuários as seguintes informações sobre criptomoedas.

- Mostrar o preço atual das criptomoedas selecionadas pelo usuário
- Mostrar para o usuário notícias relevantes sobre a cripto selecionada
- Converter o valor das criptomoedas em outras moedas
- Mostrar graficos referente a criptomoeda selecionada

### 3.2. Tecnologias utilizadas

## <img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white">
Discord é um aplicativo de voz sobre IP proprietário e gratuito, projetado inicialmente para comunidades de jogos, utilizada para a comunicação entre os membros do grupo.

## <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white">
O HTML5 é uma linguagem de marcação de hipertexto para apresentar e estruturar o conteúdo na web.

## <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">
CSS3 é a terceira mais nova versão das famosas Cascading Style Sheets (ou simplesmente CSS), pela qual se define estilos para um projeto web (página de internet).

## <img src="https://img.shields.io/badge/FIGMA-F24E1E?style=for-the-badge&logo=FIGMA&logoColor=white">
O Figma e um editor grafico voltado para a a criação de interfaces como sites,aplicativos e etc.

## <img src="https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=VISUALSTUDIOCODE&logoColor=white">
O Visual Studio Code é um editor de texto desenvolvido pela Microsoft para Windows, Linux e macOS.

## <img src="https://img.shields.io/badge/LiveShare-007ACC?style=for-the-badge&logo=VISUALSTUDIOCODE&logoColor=white">
O Live share e uma extensão que fornece a capacidade de editar e depurar de maneira colaborativa, conversar com seus colegas, compartilhar terminais, servidores, ver comentários e muito mais.

## <img src="https://img.shields.io/badge/Google%20Drive-4285F4?style=for-the-badge&logo=GOOGLEDRIVE&logoColor=white">
Google drive é o serviço de armazenamento na nuvem do Google, oferecido tanto em modalidade gratuita como em planos por assinatura, no qual o objetivo no projeto e o arquivamento de documentos em versões iniciais

## <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">

O node e um software de codigo aberto no qual nos permite a execução de códigos JavaScript fora de um navegador web.

## 4: Visão Lógica 

Esta seção lista os casos de uso ou cenários do modelo de casos de uso quando eles representam uma funcionalidade central e significativa do sistema final ou, quando têm uma grande cobertura arquitetural — eles experimentam muitos elementos arquiteturais ou quando enfatizam ou ilustram um ponto complexo e específico da arquitetura.

### 4.1. Visão Geral

O sistema será desenvolvido utilizando o framework Bootstrap5 em relação ao Front-End da dashboard. Esse sistema comunicara com o usuario atraves do uso de 3 APIS principais da nossa aplicação NewsAPI,Coinmarket Cap API e Trading View API.

### 4.2. Diagrama de Pacotes

Nesta seção iremos separar o nosso projeto em duas partes diferentes, o Front-End e o Back-End, no qual o Front ira utilizar fortemente o framework Bootstrap 5, uma vez que ele fornece atalhos para utilizarmos seja em HTML, CSS E JAVASCRIPT.Desse modo, interagindo com nosso Back-End decidimos utilizar 3 APIS principais uma referente a cada epico do nosso backlog, sendo [NewsAPI](https://newsapi.org/) referente a noticias, [Coinmarket Cap API](https://coinmarketcap.com/api/) referente aos dados das Criptos e [Trading View API](https://br.tradingview.com/rest-api-spec/) de modo que todas interagem dentro do Back-End com nosso arquivo JSON e a partir desse ponto interage com o Front.

![Diagrama de Pacotes](Imgs/Diagramas/Diagrama%20de%20Pacotes.png)

### 4.3. Diagrama de Casos de Uso

![Diagrama de caso de uso](https://user-images.githubusercontent.com/56097889/178992553-4e5e9714-5aac-4641-a8bf-16d48e60fc47.png)


## 5: Backlog 

O [Backlog](Backlog_do_produto.md) representa uma lista de itens a se fazer, podendo ser acessada clicando em backlog.

## 6: Visão de implementação

### 6.1: Front-End Dashboard
 
Antes de tudo para a criação do nosso dashboard foram levantados documentos referentes a sua identidade visual desse modo buscando oferecer uma melhor experiencia ao usuario.Apos isso foram decidas as 3 principais ferramentas para sua implementação ou seja o HTML, CSS E JAVASCRIPT .

### 6.2: Back-End Dashboard

Após definido as tecnologias do Front-End e a nossa identidade visual, buscamos fontes no qual pudéssemos extrair dados referentes as criptomoedas, e chegamos a conclusão que o mais confiável seria utilizarmos o serviço de APIS, uma vez que estão em constante atualizações.Desse modo decidimos utilizar 3 APIS, News API, Coinmarket Cap API e Trading view API.Entretanto compreendemos que a instabilidade dos servidores dessas empresas, podem ocasionalmente oferecer um risco ao nosso dashboard, e por isso decidimos utilizar a ferramenta Node.js como servidor que fará o tratamento dos dados obtidos nas APIs, e emitirá um arquivos em formato JSON, os arquivos serão atualizados em cache para podermos sempre oferecer uma tela ao nosso usuario.
