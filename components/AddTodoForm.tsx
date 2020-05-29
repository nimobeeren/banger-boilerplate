import { useAddTodoMutation, TodosDocument } from "../graphql/generated/types";
import { useState } from "react";

export function AddTodoForm() {
  const [title, setTitle] = useState("");
  const [addTodo] = useAddTodoMutation({
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
        addTodo({
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
