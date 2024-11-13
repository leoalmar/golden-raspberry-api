# Golden Raspberry Awards API

API para consultar dados sobre os vencedores do prêmio Golden Raspberry Awards. 

A API oferece endpoints RESTful, documentação Swagger e suporte a consultas GraphQL para fornecer flexibilidade no acesso aos dados.

## Tecnologias Utilizadas
- Node.js
- Express
- SQLite (banco de dados em memória)
- Swagger (documentação da API RESTful)
- GraphQL (API de consulta avançada)
- Jest (testes de integração)

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/leoalmar/golden-raspberry-api.git
    cd golden-raspberry-api
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Inicie o servidor:

    ```bash
    npm start
    ```

   O servidor estará disponível em `http://localhost:3000`.

## Endpoints Disponíveis

### API RESTful

- **GET /api/producers** Retorna os produtores com o menor e maior intervalo entre vitórias.
- **GET /api/winning-movies** Retorna os filmes vencedores de cada ano.

### Documentação Swagger

A documentação Swagger está disponível em:

- [Swagger UI](http://localhost:3000/api-docs/): `http://localhost:3000/api-docs/`

### GraphQL

A API GraphQL permite consultas personalizadas e está disponível em:

- [GraphQL Playground](http://localhost:3000/graphql): `http://localhost:3000/graphql`

Exemplos de queries:

- **Obter produtores com menor e maior intervalo entre vitórias:**

    ```graphql
    {
      minProducers {
        producer
        interval
        previousWin
        followingWin
      }
      maxProducers {
        producer
        interval
        previousWin
        followingWin
      }
    }
    ```

- **Obter filmes vencedores:**

    ```graphql
    {
      winningMovies {
        title
        year
        producers
      }
    }
    ```

- **Combinar consultas de produtores e filmes:**

    ```graphql
    {
      minProducers {
        producer
        interval
        previousWin
        followingWin
      }
      maxProducers {
        producer
        interval
        previousWin
        followingWin
      }
      winningMovies {
        title
        year
        producers
      }
    }
    ```

## Executar Testes

Para rodar os testes de integração, use o comando:

```bash
npm test
