import { useTodosQuery, useSetDoneMutation } from "../graphql/generated/codegen";

export function TodoList() {
  const { data, loading, error } = useTodosQuery();
  const [setDone] = useSetDoneMutation();

  if (error) {
    return <pre>{`🚨 ${error.message}`}</pre>;
  }

  if (loading || !data) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {data.todos.map((todo) => (
        <li key={todo.id} className={todo.done ? "done" : ""}>
          <button
            onClick={() =>
              setDone({
                variables: {
                  id: todo.id,
                  done: !todo.done,
                },
              })
            }
          >
            {todo.done ? "X" : "V"}
          </button>
          <span>{todo.title}</span>
        </li>
      ))}
    </ul>
  );
}
