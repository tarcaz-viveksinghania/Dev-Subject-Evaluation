// lib/db.js
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Function to open the SQLite database
export async function openDB() {
  return open({
    filename: './mydb.sqlite',
    driver: sqlite3.Database
  });
}
