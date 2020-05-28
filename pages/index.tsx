import Head from "next/head";
import { withApollo } from "../lib/apollo";
import { TodoList } from "../components/TodoList";

function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TodoList />
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

          .done {
            text-decoration: line-through;
          }
        `}
      </style>
    </div>
  );
}

export default withApollo({ ssr: true })(Home);
