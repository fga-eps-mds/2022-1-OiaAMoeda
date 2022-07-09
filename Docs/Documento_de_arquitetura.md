# Documento de Arquitetura

|Data|Versão|Descrição|Autor|
|-|-|-|-|
|01/07/2022|0.1|Criação do documento de arquitetura|Arthur Taylor e Thiago Oliveira|

## 1: Introdução

### 1.1. Objetivo

Este documento visa, definir claramente de modo geral a visão arquitetural do projeto "Oia a moeda" evidenciando as características nescessárias para o controle arquitetural do projeto, evidenciando as tomadas de decisões realizadas pela equipe do projeto que molda todo o processo de desenvolvimento do projeto.


### 1.2. Escopo

O mercado das criptomoedas vem crescendo de forma muito rápida nos últimos tempos, com novas moedas sendo lançadas com uma frequência muito maior do que nos ultikmos anos. Um dos maiores problemas das criptomoedas é a grande volatilidade das mesmas, onde novos compras ou vendas em massa podem ser instigadas por até mesmo uma simples postagem em uma rede social.

Devido esta grande volatilidade nós decidimos criar uma aplicação para o monitoramento de criptomoedas, com o usúario podendo selecionar quais moedas gostariam de acompanhar, para facilitar o acompanhamento da flutuação do mercado em um único lugar, e podendo assim diminuir os esforços de busca por informação das criptos e poder ter um maior controle das suas finanças. 

### 1.3. Definições, Acrônimos e Abreviações


|Sigla |Significado |
--|--
|**UnB**| Universidade de Brasília
|**FGA**| Faculdade do Gama 
|**MDS**| Métodos de Desenvolvimento de Software

### 1.4. Visão Geral
Este documento está dividido em 6 grandes tópicos com subdivisões e tem como objetivo final detalhar as características arquiteturais do projeto, bem como seus requisitos e motivações. Os tópicos e a seção de referências podem ser encontrados a seguir:

| |Tópico |Descrição |
|-|-|-|
|**1**|**Introdução**| Fornece ao leitor uma visão geral do conteúdo abordado no documento
|**2**|**Representação Arquitetural**| Detalha a arquitetura utilizada no projeto e como ela está organizada
|**3**|**Metas e Restrições da Arquitetura**| Descreve os objetivos do projeto, bem como suas restrições, do ponto de vista arquitetural
|**4**|**Visão dos casos de uso**| Descreve as partes significativas do ponto de vista da arquitetura do modelo de casos de uso
|**5**|**Visão Lógica**| Descreve as partes significativas do ponto de vista da arquitetura do modelo de design
|**6**|**Desempenho e Qualidade**| Descreve as características de desempenho do Software, bem como as restrições estabelecidas e possíveis falhas
|**7**|**Referências**| Fornece ao leitor uma visão geral das referência utilizadas durante a criação deste documento

## 2: Representação Arquitetural

O projeto consiste em realizar o scrapping, buscando por informações das criptomoedas selecionadas pelo usuário. O acesso às informações serão realizadas através do _metabese_ com uma interface gráfica, com o usuário podendo selecionar as informações através de novos dashboards criads no _metabase_, com isso os dados poderão ser acessados pelo navegador.

## 3: Metas e Restrições da arquitetura

### 3.1. Requisitos
Este projeto tem como principal intuito fazer um painel para disponibilizar aos usuários as seguintes informações sobre criptomoedas.

- Mostrar o preço atual das criptomoedas selecionadas pelo usuário.
- Mostrar para o usuário notícias relevantes sobre a cripto selecionada.
- Converter o valor das criptomoedas em outras moedas.

### 3.2. Tecnologias utilizadas

## <img src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue">
Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte, sendo utilizada principalmente para a realização do scrapping de informações nescessárias

## <img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white">
Discord é um aplicativo de voz sobre IP proprietário e gratuito, projetado inicialmente para comunidades de jogos, utilizada para a comunicação entre os membros do grupo.

## 
Figma

## 
Visual studio code 

## 
Live share extension

## 
Google drive


## 4: Visão Lógica 

Esta seção lista casos de uso ou cenários do modelo de casos de uso quando eles representam funcionalidade central e significativa do sistema final ou, quando têm uma grande cobertura arquitetural — eles experimentam muitos elementos arquiteturais ou quando enfatizam ou ilustram um ponto complexo e específico da arquitetura.

### 4.1. Visão Geral

Esta subseção descreve toda a decomposição do modelo de design em termos de camadas e de hierarquia de pacotes.

### 4.2. Diagrama de Pacotes

### 4.3. Diagrama de Casos de Uso

### 4.4. Diagrama de Classes

## 5: Backlog 

O [backlog](https://github.com/fga-eps-mds/2022-1-OiaAMoeda/blob/main/Docs/Product_Backlog.md) representa uma lista de itens a se fazer ...

## 6: Visão de implementação

Esta seção descreve a estrutura geral do modelo de implementação, a divisão do software em camadas e os subsistemas no modelo de implementação e todos os componentes significativos do ponto de vista da arquitetura.


