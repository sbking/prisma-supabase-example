# Prisma Supabase Example

This example shows how to use Prisma with Supabase Auth, including authorization using row level security (RLS).

Many Supabase examples demonstrate how to use the [Supabase JavaScript client library](https://github.com/supabase/supabase-js) to connect to Supabase over HTTP.

This example creates a [direct connection](https://supabase.com/docs/guides/database/connecting-to-postgres#types-of-connection) to the Postgres database, which by default does not set up any session context to enable row level security. A [Prisma Client extension](https://www.prisma.io/docs/concepts/components/prisma-client/client-extensions) wraps each individual request in a transaction and provides the session authentication context as a Postgres runtime variable.

The app is a simple REST app using [Express](https://expressjs.com/), without any client-side JavaScript. CRUD operations are performed on the server side using Prisma Client. However, this approach can be combined with any frontend framework and/or the isomorphic Supabase client.

## How to use

### Prerequisites

- Install [Node.js](https://nodejs.org/en/download/)

### 1. Download example & install dependencies

Clone this repository:

```sh
git clone git@github.com:sbking/prisma-supabase-example.git
```

Install dependencies:

```sh
npm install
```

### 2. Run the app

Run the following command to start the Express server:

```sh
npm run dev
```
