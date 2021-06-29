import "reflect-metadata";
import { createConnection } from "typeorm";
import { Account } from "./entity/Account";

async function insertAccount(repository, id: number, balance: number, color: string) {
  
  let account = new Account();
  account.id = id;
  account.balance = balance;

  await repository.save(account);

  console.log(`Collected ${balance} ${color} Shime Stones.`);
}



createConnection()
  .then(async (connection) => {
    const accountRepository = await connection.getRepository(Account);

    await insertAccount(accountRepository, 1, 1000, 'blue');
    await insertAccount(accountRepository, 2, 250, 'green');
    await insertAccount(accountRepository, 3, 400, 'red');
    
  })
  .catch((error) => console.log(error));
