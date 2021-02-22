This repo contains an example "Hello World" TypeScript application that uses the [TypeORM](https://typeorm.io/#/) framework to connect to [CockroachDB](https://www.cockroachlabs.com/docs/stable/).

To run the code:

1. Start a [demo CockroachDB cluster](https://www.cockroachlabs.com/docs/stable/cockroach-demo.html) from the command line: `cockroach demo --empty`

1. Create a `bank` database and a user and password as described in [Build a TypeScript App with CockroachDB](https://www.cockroachlabs.com/docs/stable/build-a-typescript-app-with-cockroachdb.html).

1. From the SQL client:

   ```sql
   > GRANT ALL ON DATABASE bank TO user;
   ```

1. If necessary, update the `ormconfig.json` file with the correct connection values.

1. In your terminal, from the top of this project directory:

   ```shell
   $ npm i
   $ npm start
   ```
