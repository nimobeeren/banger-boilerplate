import Head from "next/head";
import { useQuery } from "react-apollo";
import gql from "graphql-tag";

const GET_HELLO = gql`
  query {
    hello
  }
`;

export default function Home() {
  const { data, loading, error } = useQuery(GET_HELLO);
  if (error) {
    console.error(error);
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {loading ? <p>Loading...</p> : <pre>{JSON.stringify(data)}</pre>}
      </main>

      <style jsx global>
        {`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}
      </style>
    </div>
  );
}
