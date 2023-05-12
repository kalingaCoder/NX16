import { ApolloGateway, IntrospectAndCompose } from "@apollo/gateway";

export function getApolloServerConfig() {
  const appRedirect = process.env["NX_REACT_AD_REDIRECT_URI"];

  return {
    gateway: new ApolloGateway({
      supergraphSdl: new IntrospectAndCompose({
        subgraphs: [
          { name: "plan", url: `${appRedirect}plan/graphql` },        
        ],
      }),
    }),
  };
}
