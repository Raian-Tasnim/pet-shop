import { getDb } from './db.js';
import dotenv from 'dotenv';
dotenv.config();

async function initDB() {
  try {
    const db = await getDb();

    const createUsersTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        role TEXT DEFAULT 'user',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `;
    await db.exec(createUsersTableQuery);
    console.log("Users table created or already exists in SQLite.");

    console.log("Database initialization complete.");
  } catch (err) {
    console.error("Error initializing database:", err);
  }
}

initDB();
