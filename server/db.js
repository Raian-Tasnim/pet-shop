import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import dotenv from 'dotenv';
dotenv.config();

let dbPromise;

export const getDb = async () => {
  if (!dbPromise) {
    const isVercel = process.env.VERCEL || process.env.NODE_ENV === 'production';
    const dbPath = isVercel ? '/tmp/database.sqlite' : './database.sqlite';
    dbPromise = open({
      filename: dbPath,
      driver: sqlite3.Database
    });
    
    if (isVercel) {
       const db = await dbPromise;
       await db.exec(`
        CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          email TEXT NOT NULL UNIQUE,
          password TEXT NOT NULL,
          role TEXT DEFAULT 'user',
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );
       `);
    }
  }
  return dbPromise;
};
