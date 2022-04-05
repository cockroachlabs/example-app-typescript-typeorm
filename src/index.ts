import "reflect-metadata";
import { Account } from "./entity/Account";
import { AppDataSource } from "./datasource";

async function insertAccount(repository, balance: number) {
  console.log("Inserting a new account into the database...");

  let account = new Account();
  account.balance = balance;

  await repository.save(account);

  console.log("Saved a new account.");
  return account.id;
}

async function printBalance(repository, id: string) {
  console.log("Printing balances from account " + id + ".");

  const account = await repository.find({where: {id: id}});

  console.log(account);
}

async function transferFunds(
  repository,
  amount: number,
  from: string,
  to: string
) {
  console.log(`Transferring ${amount} from account ${from} to account ${to}.`);

  let accountFrom = await repository.find({where: {id: from}});
  accountFrom.balance = accountFrom.balance - amount;
  await repository.save(accountFrom);

  let accountTo = await repository.find({where: {id: to}});
  accountTo.balance = accountTo.balance + amount;
  await repository.save(accountTo);

  console.log("Transfer complete.");
}

AppDataSource.initialize()
  .then(async () => {
    const accountRepository = await AppDataSource.getRepository(Account);

    const accountOne = await insertAccount(accountRepository, 1000);
    await printBalance(accountRepository, accountOne);

    const accountTwo = await insertAccount(accountRepository, 250);
    await printBalance(accountRepository, accountTwo);

    await transferFunds(accountRepository, 500, accountOne, accountTwo);
    await printBalance(accountRepository, accountOne);
    await printBalance(accountRepository, accountTwo);
  })
  .catch((error) => console.log(error));
