import { useTodosQuery } from "../graphql/generated/types";

export const TodoList: React.FC = () => {
  const { data, loading, error } = useTodosQuery();

  if (error) {
    return <p>{`🚨 ${error.message}`}</p>;
  }

  if (loading || !data) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {data.todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
