import "reflect-metadata";
import { createConnection } from "typeorm";
import { TableName } from "./entity/TableName";

async function insertTableName(repository, primaryKeyColumnName: number, columnName: number) {
  console.log("Inserting a new tablename into the database...");

  let tableName = new TableName();
  tableName.primaryKeyColumnName = primaryKeyColumnName;
  tableName.columnName = columnName;

  await repository.save(tableName);

  console.log("Saved a new tablename.");
}

async function printColumnName(repository, columnName: number) {
  console.log("Printing columnname from tablename " + columnName + ".");

  const tableName = await repository.findOne(columnName);

  console.log(tableName);
}

async function transferSomethingName(
  repository,
  amount: number,
  from: number,
  to: number
) {
  console.log(`Transferring ${amount} from tablename ${from} to tablename ${to}.`);

  let tableNameFrom = await repository.findOne(from);
  tableNameFrom.columnName = tableNameFrom.columnName - amount;
  await repository.save(tableNameFrom);

  let tableNameTo = await repository.findOne(to);
  tableNameTo.columnName = tableNameTo.columnName + amount;
  await repository.save(tableNameTo);

  console.log("Transfer complete.");
}

createConnection()
  .then(async (connection) => {
    const tableNameRepository = await connection.getRepository(TableName);

    await insertTableName(tableNameRepository, 1, 1000);
    await printColumnName(tableNameRepository, 1);

    await insertTableName(tableNameRepository, 2, 250);
    await printColumnName(tableNameRepository, 2);

    await transferSomethingName(tableNameRepository, 500, 1, 2);
    await printColumnName(tableNameRepository, 1);
    await printColumnName(tableNameRepository, 2);
  })
  .catch((error) => console.log(error));
