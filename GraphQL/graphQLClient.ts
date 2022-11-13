import { GraphQLClient } from 'graphql-request'

    const endpoint = process.env.PREVIEW_ENDPOINT_PRODUCTION;
    const graphQLClient = new GraphQLClient(endpoint as string)

    export default graphQLClient;
  