# Termo de Abertura do Projeto
***

### Histórico de Versões

|**Data**|**Versão**|**Descrição**|**Autor(es/as)**|
| :-: | :-: | :-: | :-: | 
| 01/07/2022 | 0.1 | Versão Inicial | Thiago Oliveira Cunha, Arthur Taylor |
| 15/07/2022 | 0.2 | Adição dos tópicos 6,7 e 8 | Arthur Taylor |
| 15/07/2022 | 0.3 | Adição do tópico "prazo e custos" | Arthur Taylor |

### Siglas

|**Sigla**|**Descrição**|
| :-: | :-: |
| CRYPTO | Criptomoeda |
| MVP | Minimum viable product |

## 1. Introdução

Este documento visa informar as principais características do projeto **Óia a moeda** de forma concisa e clara para a leitura de todos os interessados no projeto e nas suas etapas de execução e decisão. Abaixo serão tratados os seguintes tópicos relacionados a este projeto: descrição, propósito e justificativa, objetivos, partes interessadas (usuários e envolvidos no desenvolvimento), análise de riscos, requisitos para a aprovação seguindo a _definition of done_ estabelecida e estratégias de comunicação.

## 2. Descrição

O projeto **Óia a moeda** visa mostrar um dash board contendo informações das criptomoedas mais populares tanto em conhecimento geral das pessoas, quanto em utilização, e também mostrar uma aba lateral com noticias sobre as mesmas criptomoedas(**sujeito a alteração**), 
As informações disponibilizadas no projeto **Óia a Moeda** são:
* Aba especifica para cada moeda
* Aba geral contendo todas as moedas e suas comparações
* Aba lateral com noticias recentes sobre todas as moedas
* Valor atual da moeda
* Gráfico com a flutuação dos valores anteriores da moeda
* Gráfico de comparaçao dos valores de todas as moedas
* Porcentagem de aumento/baixa de cada moeda


## 3. Propósito e justificativa

Olhando o mercado mundial nos dias atuais, e o contexto em que vivemos, podemos notar que a presença e utilização de criptomoedas está aumenta de maneira muito rápida. O que cria uma necessidade de sites/ambientes que fazem algum tipo de comparação entre tantas moedas presentes no mercado, apesar de ja existirem alguns ambientes assim, algo muito importante e bastante utilizado para prever o valor da moeda no futuro, são noticias sobre aquela moeda.
Visto isso, nosso projeto visa a criaçao de um ambiente que mescla essas duas funcionalidades, ja que por pesquisas gerais do grupo presente no projeto, nao foram achados sites que mesclam de maneira eficiente tais funções, fazendo assim com que a visualização e tiradas de conclusão sobre o mercado de cryptos sejam feitas de maneira extremamente mais eficiente.

## 4. Objetivos

Nesse contexto, o objetivo do projeto é propiciar uma melhor visualização das informações sobre cryptos
disponibilizadas pelo nosso site. Sendo assim, os usuários, sejam eles bancos, grandes empresas ou até investidores solo, terão a possibilidade de visualizar
O valor atual da moeda , um gráfico com a flutuação dos valores anteriores da moeda, um gráfico de comparação dos valores de todas as moedas, porcentagens de aumento/baixa de cada moeda(**sujeito a alterações**). 
Por meio dessas funcionalidades, a visualização, análise de preços recentes e análise de preços futuros, podem ser feitos de maneira muito mais eficientes
permitindo que os bancos de crypto/grandes empresas/ investidores solo consigam realizar suas tarefas mais rapidamente.

## 5. Partes interessadas

### 5.1 Usuários

O público-alvo consiste na comunidade da Universidade de Brasília, isto é: Coordenadores, professores e estudantes. Tendo como foco os cargos administrativos.

|**Usuário**|**Descrição**|
| :-: | :-: |
| Investidores Solo | Individuos que majoritariamente visam o investimento em criptomoedas em ascenção, más tambem a visualização dos dados e noticias para se manter informado sobre os assuntos recentes |
| Bancos de crypto | Instituições financeiras com o objetivo de fazer uma grande quantia em dinheiro, guardando cryptos e estimando seu valor futuro, fariam grande proveito das noticias presentes no site |
| Grandes Empresas | Instituições podendo ser financeiras ou não, ou apenas empresas privadas com objetivos similares aos bancos, porem com uma janela de tempo menor, e tambem com objetivos diferentes para tal dinheiro, como investimento em outras áreas ou na própria empresa |
| Outros | Quaisquer indivíduos que optarem por acessar dados relativos ás criptomoedas |

### 5.2 Equipes e papéis

#### Definição dos papéis:

|**Usuário**|**Descrição**|
| :-: | :-: |
|_Scrum Master_ | É o responsável pela eficiência do grupo, auxiliando a todos no entendimento do _framework Scrum_ e atuando na gestão do grupo |
| _Product Owner_ | Responsável por aumentar o valor do produto a ser desenvolvido e na gestão do _Product Backlog_, comunicando com o time sobre o objetivo a ser atingido |
| Arquiteto de Software | Atua na decisão das melhores tecnologias a serem utilizadas pelo grupo durante o desenvolvimento do projeto. Atua em suporte ao DevOps |
| DevOps | Atua na configuração do ambiente de desenvolvimento e homologação do produto. Visa também automatizar processos, como os testes. Visa atuar para que o projeto forneça uma entrega e integração contínuas |
| Desenvolvedor | Atua no desenvolvimento e teste do produto, criando o _Sprint Backlog_ e adaptando seu plano de modo a atingir o objetivo definido ao final da _Sprint_ |
| _Designer_ | Atua nas responsabilidades, operações, atributos e relacionamentos de elementos do _design_ do produto, assegurando também que esse esteja consistente com a arquitetura do software |

#### Grupo Responsavel(Cargos rotativos = "**cargo**")

|**Usuário**|**Descrição**|
| :-: | :-: |
| _Scrum Master_ | Arthur Taylor de Jesus Popov |
| _"Scrum Master"_ | Yago Milagres Passos |
| _Product Owner_ | Renato Gabriel Moreira Caravlho |
| _"Product Owner"_ | Thiago Oliveira Cunha |
| Arquiteto de Software | Silas Neres de Sousa | 
| "Arquiteto de Software" | João Gabriel Elvas |
| DevOps | João Pedro Anacleto Ferreira Machado |
| "DevOps" | Pablo Santos Costa |

## 6. Requisitos de alto nível

**Nome** | **Descrição**
--- | --- 
Visualização das notícias | As notícias deverão ser apresentadas para o usúario de acordo com a moeda selecionada para vizualização.
Obtenção dos dados | Obtenção dos dados contidos nas APIs que serão utilizadas para o projeto. 
Filtros de exibição | Deverá ser possível filtrar as moedas, para uma exibição mais "personalizada" da tela para o usuário que está utilizando.
Interatividade com o usuário | As mensagens do sistema para o usuário devem ser claras, e o usuário deve poder buscar pelas moeda e notícias que desejar.

## 7. Riscos

**Risco** | **Prevenção** | **Ação**
:---: | :---: | :---:
Algum membro contrair COVID-19 | Estar previamente organizado entre os membros do grupo, para que alguém consiga assumir a função do membro em questão. | Organização com a equipe.
Falta de comunicação | Estabelecer canais de comunicação fixos, além das prtáticas do SCRUM para melhor colaboração. | Préticas do SCRUM realizadas de forma correta, membros procurarem ajuda se sentirem dificuldades.
Desistência de algum membro do projeto | Estimular a participação do membro no projeto. | Não sobrecarregar nenhum membro e auxiliar em suas devidas tarefas.
Dificuldade ao adaptar às tecnologias escolhidas | Compartilhamento de links ou aulas para estudo e aprofundamento da tecnologia. | Procurar sobre as tecnologias e incentivar o estudo. 

## 8. Requisitos para a aprovação

* Validação pela professora Dr. Carla Rocha Aguiar.
* Atender às expectativas definidas pelo _**MVP**_.
* Entrega de todos os itens necessários na _Release 2 da disciplina de MDS_.

## 9. Prazo e custo

O projeto deve ser desenvolvido durante os 90 dias letivos do semestre 2022 - 1 da universidade de brasilia, os custos calculados estão apresentados na tabela abaixo, sendo o custo do risco a média de salarios da equipe de desenvolvimento. 

| Nome | Custo | Quantidade | Custo Mensal | Custo Total |
| :--: | :---: | :--------: | :----------: | :---------: |
| Desenvolvedores Júnior | 3.000,00 | 8 | 24.000,00 | 72.000,00|
| ΔRisco  | 3.000,00 | - | 3.000,00 | 9.000,00 |
| |||| 81.000,00|

Os valores do salário foram calculados de acordo com a média salarial do mercado de trabalho.


## 10. Estratégias de comunicação

Para comunicação interna foram utilizadas as seguintes ferramentas: **Discord**,**Telegram** e **Whatsapp**.<br />
Demais ferramentas à definir(como ferramentas de treinamento e etc)

## 11. Referências

UNIVERSIDADE DE BRASÍLIA (Brasil). **INDICAA - Termo de abertura do projeto.** [S. l.], 2022. Disponível em: <https://github.com/fga-eps-mds/2021.2-INDICAA-Wiki/blob/main/docs/documentacao/termo_de_abertura.md>. Acesso em: 01 julho. 2022. <br />
UNIVERSIDADE DE BRASÍLIA (Brasil). **Acácia - Termo de abertura do projeto.** [S. l.], 2019. Disponível em: <https://fga-eps-mds.github.io/2019.2-Acacia/#/project_charter>. Acesso em: 28 jan. 2022. <br />
UNIVERSIDADE DE BRASÍLIA (Brasil). **AlligaBot - Termo de abertura do projeto.** [S. l.], 2021. Disponível em: <https://fga-eps-mds.github.io/2021.1-AlligaBot/2021/08/02/termo-de-abertura-do-projeto/>. Acesso em: 28 jan. 2022. <br />
