import { useTodosQuery } from "../graphql/generated/types";

export const TodoList: React.FC = () => {
  const { data, loading, error } = useTodosQuery();

  if (loading || !data) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <pre>{error}</pre>;
  }

  return (
    <ul>
      {data.todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
