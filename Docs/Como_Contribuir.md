# Como contribuir com o nosso projeto

## Histórico de Revisão

| Data | Versão | Descrição | Autor(es) |
| :-: | :-: | :-: | :-: |
| 04/07/2022 | 0.0 | Criação do Documento de Contribuição | João Pedro Anacleto |
| 07/07/2022 | 0.1 | Atualização do Documento de Contribuição | Renato Gabriel |
| 12/07/2022 | 0.2 | Atualização do Documento de Contribuição | Renato Gabriel |
| 22/07/2022 | 0.3 | Atualização do Documento de Contribuição | Silas Neres    |

Olá estamos felizes que você tenha demonstrado interesse pelo nosso projeto, acreditamos que toda contribuição e pouca então, gostariamos apenas de deixar algumas instruções para que tudo ocorra bem, primeiramente gostariamos que antes de tudo você entrasse em contato conosco seja via email ou git através das issues.

Certifique-se de seguir os seguintes passos antes de enviar sua contribuição:

* Siga o [código de conduta](Codigo_de_conduta.md) do projeto.
* Antes de fazer qualquer alteração no projeto crie uma issue e se responsabilize pela mesma.
* Certifique-se de cumprir os critérios de aceitação.

## Como criar uma Issue

1. Procure por issues semelhantes para evitar redundância na documentação
2. Ao elaborar uma issue siga o [template de issue](../Template_de_Issue.md)

Pronto basta esperar ou solicitar o feedback de um dos responsáveis pelo repositório.

## Como criar um Pull request

1. Procure fazer todos os testes necessários antes de fazer o pull request. 
2. Certifique-se de resolver todos os conflitos entre a branches antes de solicitar o pull request.
3. Ao criar um pull request siga o [template de Pull Request.](../Template_de_pull_request.md)

Após enviar o pull request para avaliação basta esperar ou solicitar o feedback de um dos responsáveis pelo repositório.

## Política de branches
### Divisão de branches:
A Divisão de branches visa a melhor organização do trabalho, de forma que evite problemas no código Master 

A imagem a seguir ilustra como será esta divisão:

![img exemplo 1](https://github.com/fga-eps-mds/2022-1-OiaAMoeda/blob/main/Docs/Imgs/Identidade/branche_simples.png)

### Explicação de cada branch:

#### master(main)

Ela é a principal branch, é onde que vai estar o código estável em nível de produção, no caso as versões e as atualizações das branches feature. Toda branch feature que estiver concluída será juntada na master, seguindo a condição de estarem estáveis. 

#### feature 

São branches que serão criadas a partir da branch master para que possa ser desenvolvido novos recursos ao projeto. Quando uma feature for concluída deverá ser juntada na master seguindo a restrição de estar estável.

## Política de commits 
As descrições das alterações devem ser feitas seguindo um padrão, indicando a issue resolvida e a funcionalidade (ou correção) adicionada.

Utilize tags para definir o propósito do commit:
* `ADD` : quando adicionar uma nova funcionalidade 
* `DEL` : Caso seja um commit relacionado a remoção de algo
* `UPDATE` : quando atualizar alguma funcionalidade
* `FIX` : para referenciar correções
* `DOC` : para indicar documentação
* `REFACT` : indica refatoração do código

Ex:

`git commit -m " [tag] (Issue #x) : mensagem descritiva" `