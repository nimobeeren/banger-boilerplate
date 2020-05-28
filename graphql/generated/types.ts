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
  deleteOneTodo?: Maybe<Todo>;
  updateOneTodo?: Maybe<Todo>;
};


export type MutationCreateOneTodoArgs = {
  data: TodoCreateInput;
};


export type MutationDeleteOneTodoArgs = {
  where: TodoWhereUniqueInput;
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

export type TodosQueryVariables = {};


export type TodosQuery = (
  { __typename?: 'Query' }
  & { todos: Array<(
    { __typename?: 'Todo' }
    & Pick<Todo, 'id' | 'title' | 'done'>
  )> }
);


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