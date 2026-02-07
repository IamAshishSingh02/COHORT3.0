import { Client } from "pg";

// Docker Command => docker run --name cohort3.0-postgres-todo -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres
// Connection String Format => postgresql://USERNAME:PASSWORD@HOST:PORT/DATABASE
// Connection String => postgresql://postgres:mysecretpassword@localhost:5432/postgres
// Docker Command for running on terminal => docker exec -it cohort3.0-postgres-todo psql -U postgres

export const pgClient = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "mysecretpassword",
  database: "postgres",
})

const main = async () => {
  try{
    await pgClient.connect()
    console.log(`connected to Docker-PostgreSQL`);

    const res = await pgClient.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL
      )
    `)
    console.log(res)
    console.log(`Table created successfully`)
  }
  catch(e){
    console.log(`DB Error: ${e}`);
  }
  finally{
    await pgClient.end()
  }
}

main()