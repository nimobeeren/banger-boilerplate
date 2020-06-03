import { AddTodoForm } from "../components/AddTodoForm";
import { TodoList } from "../components/TodoList";
import { withApollo } from "../lib/apollo";

function Home() {
  return (
    <div>
      <main>
        <AddTodoForm />
        <TodoList />
      </main>
    </div>
  );
}

export default withApollo({ ssr: true })(Home);
