import urql, { cacheExchange, fetchExchange } from '@urql/vue';

export default {
    install: (app) => {
        app.use(urql, {
            url: 'http://localhost:8080/v1/graphql',
            exchanges: [cacheExchange, fetchExchange],
            fetchOptions: {
                headers: {
                    //   Authorization: `bearer ${GITHUB_TOKEN}`,
                    //   Accept: 'application/vnd.github.packages-preview+json',
                    "X-HASURA-User-Id": "1",
                    "X-Hasura-Role": "user"
                },
            },
        })
    }
  }
