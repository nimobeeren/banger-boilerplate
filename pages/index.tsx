import Head from "next/head";
import { withApollo } from "../lib/apollo";
import { TodoList } from "../components/TodoList";
import { CreateTodoForm } from "../components/CreateTodoForm";

function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <CreateTodoForm />
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
            font-size: 20px;
          }

          main {
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            justify-content: center;
            width: 100vw;
            height: 100vh;
          }

          li {
            margin: 16px;
          }

          li.done {
            text-decoration: line-through;
          }
        `}
      </style>
    </div>
  );
}

export default withApollo({ ssr: true })(Home);
