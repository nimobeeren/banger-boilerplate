import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  NormalizedCacheObject,
} from "apollo-boost";

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

// Polyfill fetch() on the server (used by apollo-client)
// See: https://github.com/zeit/next.js/issues/2177#issuecomment-536178575
const isBrowser = typeof window !== "undefined";
if (!isBrowser) {
  // eslint-disable-next-line global-require
  global.fetch = require("isomorphic-unfetch");
}

function create(
  initialState?: NormalizedCacheObject,
  cookie?: string,
  host?: string
) {
  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
    link: new HttpLink({
      uri: `${host || ""}/api/graphql`,
      credentials: "include",
      headers: cookie && {
        Cookie: cookie,
      },
    }),
    cache: new InMemoryCache().restore(initialState || {}),
  });
}

export function getClient(
  initialState?: NormalizedCacheObject,
  cookie?: string,
  host?: string
) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections
  if (typeof window === "undefined") {
    return create(initialState, cookie, host);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState, cookie, host);
  }

  return apolloClient;
}
