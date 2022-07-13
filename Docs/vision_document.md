# Documento de visão

## Histórico de Revisão

| Data | Versão | Descrição | Autor(es) |
|:-:|:-:|:-:|:-: |
| 29/06/2022 | 0.0    | Criação do Template do Documento de Visão  |   João Pedro Anacleto |
| 30/06/2022 | 0.1    | Atualização do Documento de Visão  |   Renato Gabriel M. Carvalho |
| 07/07/2022 | 0.2    | Adição do Histórico de Revisão  |   Renato Gabriel M. Carvalho |
| 12/07/2022 | 0.3 | Correções ortográficas do Documento |   Renato Gabriel M. Carvalho |


## 1: Introdução

### 1.1 Propósito

Este documento busca delinear as características do desenvolvimento da aplicação em questão, definir os perfis das partes interessadas e dos usuários, e também definir os requisitos tanto funcionais quanto não funcionais.

### 1.2 Escopo

No contexto econômico enfervecente atual, sendo diariamente inundado com novas moedas de forma cada vez mais veloz, se torna cada vez mais difícil para potênciais investidores se manter atualizado no estado do mercado. É tendo esse desafio em vista que este projeto busca auxiliar investidores na obtenção curada dessas informações essenciais.

### 1.3 Definições, Acrônimos e Abreviações

| **Siglas e Acrônimos** | **Definição** |
| :-: | :-: |
| MDS | Métodos de Desenvolvimento de Software |
| UNB | Universidade de Brasília |
| FGA | Faculdade do Gama |

## 2: Posicionando

### 2.1 Instrução do problema

| O problema é | que afeta | cujo impacto é | uma boa solução seria |
| :-: | :-: | :-: | :-: |
| Dificuldade na obtenção de informações sobre as novas moedas do mercado| Investidores em busca de informações curadas | A carência de informações necessárias para a avaliação da performance de novas moedas no mercado | Organização das informações em uma aplicação de fácil entendimento |

### 2.2 Instrução de Posição de Produto

A aplicação, será implementada como uma aplicação web que pode ser usada facilmente em navegadores mobile proporcionando uma experiência muito parecida a de um app nativo. Permitindo ao investidor checar notícias e gráficos detalhando a performance das moedas que estão mais em voga.

### 2.3 Oportunidade de Negócios

Descreve brevemente a oportunidade de negócios que é tratada por este projeto.

## 3: Descrição dos Usuários e Envolvidos

### 3.1 Descrição dos Usuários

|**Usuário**|**Descrição**|
| :-: | :-: |
| Investidores Solo | Individuos que majoritariamente visam o investimento em criptomoedas em ascenção, más tambem a visualização dos dados e noticias para se manter informado sobre os assuntos recentes |
| Bancos de crypto | Instituições financeiras com o objetivo de fazer uma grande quantia em dinheiro, guardando cryptos e estimando seu valor futuro, fariam grande proveito das noticias presentes no site |
| Grandes Empresas | Instituições podendo ser financeiras ou não, ou apenas empresas privadas com objetivos similares aos bancos, porem com uma janela de tempo menor, e tambem com objetivos diferentes para tal dinheiro, como investimento em outras áreas ou na própria empresa |
| Outros | Quaisquer indivíduos que optarem por acessar dados relativos ás criptomoedas |

### 3.2 Principais Necessidades dos Usuários

|**Usuário**|**Necessidade**|**Solução Atual**|**Solução Proposta**|
| :-: | :-: | :-: | :-: |
| Investidores | Acessar informações sobre seus interesses de investimento | Pesquisar por informações sobre investimentos em portais online | Forcecer um hub com todas as informações pertinentes ao usuário de forma curada |

### 3.3 Descrição dos Envolvidos

|**Nome**|**Descrição**|**Responsabilidade**|
|:-:|:-:|:-:|
| Grupo de desenvolvimento | Estudantes de MDS |Projetar, desenvolver, testar, manter e gerir o software proposto e todos os documentos relacionados |
| Grupo de avaliação | Professora e monitores de MDS | Ajudar o grupo de desenvolvimento com orientação e feedback sobre o projeto |

### 3.4 Perfis dos Envolvidos

#### 3.4.1 Equipe de Desenvolvimento de Software

| Papel  |  Descrição  |
|:-:|:-:|
| Scrum Master | Arthur Taylor |
| Scrum Master | Yago Passos |
| Product Owner | Renato Gabriel |
| Product Owner | Thiago Oliveira Cunha |
| Arquiteto de Software | Silas Neres |
| Arquiteto de Software | João Gabriel |
| Desenvolvedor | João Pedro Anacleto |
| Desenvolvedor | Pablo Santos Costa |

#### 3.4.2 Avaliadores e Monitores

|**Representantes**|**Tipo**|**Responsabilidade**|**Critério de Sucesso**|**Envolvimento**|
|:-:|:-:|:-:|:-:|:-:|
| Carla Rocha | Profº de MDS | Auxiliar a equipe de desenvolvimento provendo feedback e orientação em relação ao desenvolvimento do projeto | Entrega do projeto dentro do prazo limite | Baixo |

### 3.5 Perfis dos Usuários

À definir

### 3.6 Alternativas e Concorrências

À definir

## 4: Visão Geral do Produto

### 4.1 Perspectiva do Produto

O projeto tem como principal objetivo elaborar um hub que possibilite ao usuário obter informações sobre as principais moedas do mercado.

### 4.2 Resumo das Capacidades

|**Benefícios**|**Recurso de Suporte**|
|:-:|:-:|
|Facilidade de acesso a informações| Interface customizável permitindo a seleção de moedas favoritas bem como o monitoramento de moedas em crescimento |

## 5: Recursos do Produto

O usuário poderá ter acesso aos seguintes recursos:

- Receber notícias sobre as moedas com a melhor performance recente
- Filtrar por moeda as notícias que o usuário deseja receber

## 6: Restrições e Dependências

### 6.1 Restrições de Implementação

A aplicação será desenvolvida usando linguagem de programação a ser definida, utilizando-se da mesma para a integração da página com diversas API's de obtenção de informações relacionadas as criptos, como notícias e gráficos, necessárias para a construção do site.

### 6.2 Restrições Externas

A equipe possui, em geral, um nível baixo de experiência com as tecnologias utilizadas.

### 6.3 Restrições de Desing

A aplicação deve ser de fácil uso.

### 6.4 Restrições de Uso

O usuário precisará ter acesso a um computador ou smartphone e conexão à internet.

## 7: Requisitos do Produto

### 7.1: Lista de Requisitos Funcionais

|**Identificador**|**Requisito**|**Prioridade**|
|:-:|:-:|:-:|
| RF01 | A aplicação deverá apresentar noticias recentes sobre o mercado em cards | Alta |
| RF02 | A aplicação deverá providenciar gráficos de performance das principais moedas | Alta |
| RF03 | A aplicação deverá permitir ao usuário pesquisar sobre notícias relativas a uma moeda específica | Média |

### 7.2: Lista de Requisitos Não Funcionais

|**Identificador**|**Requisito**|**Prioridade**|
|:-:|:-:|:-:|
| RNF01 | A aplicação deverá obter informações em tempo real | Alta |
| RNF02 | A aplicação deverá armazenar essas informações em um banco de dados | Alta |
| RNF03 | O Back-End da aplicação será desenvolvido usando -,-,-. | Alta |
| RNF04 | O Front-End da aplicação será desenvolvido usando -,-,-. | Alta |
| RNF05 | A aplicação deve possuir auta coesão e baixo acoplamento | Média |

## 9: Referências

UNIVERSIDADE DE BRASÍLIA (BRASIL). **INDICAA - documento de visão**. Disponível em: <https://github.com/fga-eps-mds/2021.2-INDICAA-Wiki/blob/main/docs/documentacao/documento_de_visao.md>. Acesso em: 12 de julho de 2022. <br />

UNIVERSIDADE DE BRASÍLIA (BRASIL). **AlligaBot - documento de visão**. Disponível em: <https://fga-eps-mds.github.io/2021.1-AlligaBot/2021/08/04/documento-de-vis%C3%A3o/>. Acesso em: 12 de julho de 2022. <br />

UNIVERSIDADE DE BRASÍLIA (BRASIL). **Anunbis - documento de visão**. Disponível em: <https://fga-eps-mds.github.io/2020.2-Anunbis/documentacao/documento-de-visao/>. Acesso em: 12 de julho de 2022. <br />