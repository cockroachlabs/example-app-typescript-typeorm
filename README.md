This repo contains an example "Hello World" TypeScript application that uses the [TypeORM](https://typeorm.io/#/) framework to connect to [CockroachDB](https://www.cockroachlabs.com/docs/stable/).

To run the code:

1. Create a Cockroach Cloud account as described in LINK TO BIZZLEBEE CHAPTER.

1. Create a database and a user and password as described in LINK TO BIZZLEBEE CHAPTER.

1. From the SQL client:

   ```sql
   > GRANT ALL ON DATABASE databasename TO username;
   ```

1. If necessary, update the `ormconfig.json` file with the correct connection values.

1. In your terminal, from the top of this project directory:

   ```shell
   $ npm i
   $ npm start
   ```
