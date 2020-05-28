import { useTodosQuery, useSetDoneMutation } from "../graphql/generated/types";

export const TodoList: React.FC = () => {
  const { data, loading, error } = useTodosQuery();
  const [setDone] = useSetDoneMutation();

  if (error) {
    return <p>{`🚨 ${error.message}`}</p>;
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
            {todo.done ? "❎" : "✅"}
          </button>
          <span>{todo.title}</span>
        </li>
      ))}
    </ul>
  );
};
