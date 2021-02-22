import "reflect-metadata";
import { createConnection } from "typeorm";
import { Account } from "./entity/Account";

async function insertAccount(repository, id: number, balance: number) {
  console.log("Inserting a new account into the database...");

  let account = new Account();
  account.id = id;
  account.balance = balance;

  await repository.save(account);

  console.log("Saved a new account.");
}

async function printBalance(repository, id: number) {
  console.log("Printing balances from account " + id + ".");

  const account = await repository.findOne(id);

  console.log(account);
}

async function transferFunds(
  repository,
  amount: number,
  from: number,
  to: number
) {
  console.log(`Transferring ${amount} from account ${from} to account ${to}.`);

  let accountFrom = await repository.findOne(from);
  accountFrom.balance = accountFrom.balance - amount;
  await repository.save(accountFrom);

  let accountTo = await repository.findOne(to);
  accountTo.balance = accountTo.balance + amount;
  await repository.save(accountTo);

  console.log("Transfer complete.");
}

createConnection()
  .then(async (connection) => {
    const accountRepository = await connection.getRepository(Account);

    await insertAccount(accountRepository, 1, 1000);
    await printBalance(accountRepository, 1);

    await insertAccount(accountRepository, 2, 250);
    await printBalance(accountRepository, 2);

    await transferFunds(accountRepository, 500, 1, 2);
    await printBalance(accountRepository, 1);
    await printBalance(accountRepository, 2);
  })
  .catch((error) => console.log(error));
