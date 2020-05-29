import Head from "next/head";
import { withApollo } from "../lib/apollo";
import { TodoList } from "../components/TodoList";
import { AddTodoForm } from "../components/AddTodoForm";

function Home() {
  return (
    <div>
      <Head>
        <title>Banger Boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AddTodoForm />
        <TodoList />
      </main>
    </div>
  );
}

export default withApollo({ ssr: true })(Home);
