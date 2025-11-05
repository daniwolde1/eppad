import mysql from "mysql2/promise";

export const pool = mysql.createPool({
  host: process.env.DB_HOST,       // e.g., 'localhost'
  user: process.env.DB_USER,       // MySQL user
  password: process.env.DB_PASS,   // MySQL password
  database: process.env.DB_NAME,   // e.g., 'eppad_contact'
});
