# 💥 Banger Boilerplate 💥

_Inspired by [nice-boys/product-boilerplate](https://github.com/nice-boys/product-boilerplate)_

## The Stack

- [Next.js](https://nextjs.org/)
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [GraphQL Code Generator](https://graphql-code-generator.com/)
- [Nexus Schema](https://nexus.js.org/)
- [Prisma 2](https://www.prisma.io/)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)

## Project structure

```javascript
.
├── components/    // front-end components
│   └── ...
├── graphql/
│   ├── documents/ // GraphQL documents used by GraphQL codegen
│   │   └── ...    // structure doesn't matter
│   ├── generated/
│   │   ├── schema.graphql // Nexus schema output
│   │   └── types.ts       // GraphQL codegen output
│   ├── schema/    // code-first schema used by Nexus
│   │   └── index.ts
│   ├── createApolloClient.ts
│   └── createApolloServer.ts
├── lib/           // external source code
│   └── apollo.tsx // Apollo Client integration with Next.js
├── pages/
│   ├── api/
│   │   └── graphql.ts // GraphQL route
│   ├── _app.tsx
│   └── index.tsx
├── prisma/
│   ├── .env       // db conection details
│   ├── dev.db     // SQLite database
│   └── schema.prisma // interface between db and Prisma Client
├── public/
├── codegen.yml    // GraphQL codegen config
├── next-env.d.ts  // Next.js TypeScript types
├── nodemon.json   // nodemon config
├── package.json
├── styles.css     // basic CSS
└── ...
```
