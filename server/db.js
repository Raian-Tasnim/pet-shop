import dotenv from 'dotenv';
import fs from 'fs';
dotenv.config();

let dbPromise;
let jsonDb = null;

const VERCEL_DB_PATH = '/tmp/database.json';

const getJsonDb = () => {
  if (!fs.existsSync(VERCEL_DB_PATH)) {
    fs.writeFileSync(VERCEL_DB_PATH, JSON.stringify({ users: [] }));
  }
  return JSON.parse(fs.readFileSync(VERCEL_DB_PATH, 'utf8'));
};

const saveJsonDb = (data) => {
  fs.writeFileSync(VERCEL_DB_PATH, JSON.stringify(data));
};

export const getDb = async () => {
  const isVercel = process.env.VERCEL || process.env.NODE_ENV === 'production';
  
  if (isVercel) {
    if (!jsonDb) {
      jsonDb = {
        get: async (query, params) => {
          const data = getJsonDb();
          const email = params[0];
          return data.users.find(u => u.email === email);
        },
        run: async (query, params) => {
          const data = getJsonDb();
          const [name, email, password] = params;
          const newUser = { id: Date.now(), name, email, password, role: 'user', created_at: new Date().toISOString() };
          data.users.push(newUser);
          saveJsonDb(data);
          return { lastID: newUser.id };
        },
        all: async (query) => {
          const data = getJsonDb();
          return data.users;
        },
        exec: async (query) => {
          // Do nothing, JSON file is initialized
        }
      };
    }
    return jsonDb;
  }

  if (!dbPromise) {
    const sqlite3 = (await import('sqlite3')).default;
    const { open } = await import('sqlite');
    
    dbPromise = open({
      filename: './database.sqlite',
      driver: sqlite3.Database
    });
  }
  return dbPromise;
};
