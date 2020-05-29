/* eslint-disable */
/*
 * This is GENERATED CODE, do not modify!
 *
 * Here we provide TypeScript types and utilities for the GraphQL schema.
 * When you make changes to your GraphQL schema, you should regenerate this file using `yarn generate`.
 */

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  createOneTodo: Todo;
  updateOneTodo?: Maybe<Todo>;
};


export type MutationCreateOneTodoArgs = {
  data: TodoCreateInput;
};


export type MutationUpdateOneTodoArgs = {
  data: TodoUpdateInput;
  where: TodoWhereUniqueInput;
};

export type Query = {
  __typename?: 'Query';
  todos: Array<Todo>;
};


export type QueryTodosArgs = {
  after?: Maybe<TodoWhereUniqueInput>;
  before?: Maybe<TodoWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type Todo = {
  __typename?: 'Todo';
  done: Scalars['Boolean'];
  id: Scalars['Int'];
  title: Scalars['String'];
};

export type TodoCreateInput = {
  done: Scalars['Boolean'];
  title: Scalars['String'];
};

export type TodoUpdateInput = {
  done?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type TodoWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type AddTodoMutationVariables = {
  title: Scalars['String'];
};


export type AddTodoMutation = (
  { __typename?: 'Mutation' }
  & { createOneTodo: (
    { __typename?: 'Todo' }
    & Pick<Todo, 'id'>
  ) }
);

export type SetDoneMutationVariables = {
  id: Scalars['Int'];
  done: Scalars['Boolean'];
};


export type SetDoneMutation = (
  { __typename?: 'Mutation' }
  & { updateOneTodo?: Maybe<(
    { __typename?: 'Todo' }
    & Pick<Todo, 'id' | 'done'>
  )> }
);

export type TodosQueryVariables = {};


export type TodosQuery = (
  { __typename?: 'Query' }
  & { todos: Array<(
    { __typename?: 'Todo' }
    & Pick<Todo, 'id' | 'title' | 'done'>
  )> }
);


export const AddTodoDocument = gql`
    mutation AddTodo($title: String!) {
  createOneTodo(data: {title: $title, done: false}) {
    id
  }
}
    `;
export type AddTodoMutationFn = ApolloReactCommon.MutationFunction<AddTodoMutation, AddTodoMutationVariables>;

/**
 * __useAddTodoMutation__
 *
 * To run a mutation, you first call `useAddTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTodoMutation, { data, loading, error }] = useAddTodoMutation({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useAddTodoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddTodoMutation, AddTodoMutationVariables>) {
        return ApolloReactHooks.useMutation<AddTodoMutation, AddTodoMutationVariables>(AddTodoDocument, baseOptions);
      }
export type AddTodoMutationHookResult = ReturnType<typeof useAddTodoMutation>;
export type AddTodoMutationResult = ApolloReactCommon.MutationResult<AddTodoMutation>;
export type AddTodoMutationOptions = ApolloReactCommon.BaseMutationOptions<AddTodoMutation, AddTodoMutationVariables>;
export const SetDoneDocument = gql`
    mutation SetDone($id: Int!, $done: Boolean!) {
  updateOneTodo(where: {id: $id}, data: {done: $done}) {
    id
    done
  }
}
    `;
export type SetDoneMutationFn = ApolloReactCommon.MutationFunction<SetDoneMutation, SetDoneMutationVariables>;

/**
 * __useSetDoneMutation__
 *
 * To run a mutation, you first call `useSetDoneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetDoneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setDoneMutation, { data, loading, error }] = useSetDoneMutation({
 *   variables: {
 *      id: // value for 'id'
 *      done: // value for 'done'
 *   },
 * });
 */
export function useSetDoneMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetDoneMutation, SetDoneMutationVariables>) {
        return ApolloReactHooks.useMutation<SetDoneMutation, SetDoneMutationVariables>(SetDoneDocument, baseOptions);
      }
export type SetDoneMutationHookResult = ReturnType<typeof useSetDoneMutation>;
export type SetDoneMutationResult = ApolloReactCommon.MutationResult<SetDoneMutation>;
export type SetDoneMutationOptions = ApolloReactCommon.BaseMutationOptions<SetDoneMutation, SetDoneMutationVariables>;
export const TodosDocument = gql`
    query Todos {
  todos {
    id
    title
    done
  }
}
    `;

/**
 * __useTodosQuery__
 *
 * To run a query within a React component, call `useTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useTodosQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TodosQuery, TodosQueryVariables>) {
        return ApolloReactHooks.useQuery<TodosQuery, TodosQueryVariables>(TodosDocument, baseOptions);
      }
export function useTodosLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TodosQuery, TodosQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TodosQuery, TodosQueryVariables>(TodosDocument, baseOptions);
        }
export type TodosQueryHookResult = ReturnType<typeof useTodosQuery>;
export type TodosLazyQueryHookResult = ReturnType<typeof useTodosLazyQuery>;
export type TodosQueryResult = ApolloReactCommon.QueryResult<TodosQuery, TodosQueryVariables>;