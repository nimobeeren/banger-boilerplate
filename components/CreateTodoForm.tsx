import {
  useCreateTodoMutation,
  TodosDocument,
} from "../graphql/generated/types";
import { useState } from "react";

export function CreateTodoForm() {
  const [title, setTitle] = useState("");
  const [createTodo] = useCreateTodoMutation({
    refetchQueries: [
      {
        query: TodosDocument,
      },
    ],
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createTodo({
          variables: {
            title,
          },
        });
      }}
    >
      <input
        type="text"
        required
        value={title}
        placeholder="Build an app...."
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">➕</button>
    </form>
  );
}
