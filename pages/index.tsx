import Head from "next/head";
import { withApollo } from "../lib/apollo";
import { useHelloQuery } from "../graphql/generated/types";

function Home() {
  const { data, loading, error } = useHelloQuery();
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

export default withApollo({ ssr: true })(Home);
