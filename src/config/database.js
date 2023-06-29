import pkg from "pg";
const { Pool } = pkg;

const connectionString = process.env.DATABASE_URL;

export const dBase = new Pool({
    connectionString
});


