// pages/api/register.js
import bcrypt from 'bcryptjs';
import { openDB } from '../../lib/db';

export default async function register(req, res) {
  const { email, password } = req.body;

  const db = await openDB();

  // Check if the user already exists
  const user = await db.get('SELECT * FROM users WHERE email = ?', [email]);

  if (user) {
    res.status(400).json({ message: 'User already exists!' });
    return;
  }

  // Hash the password before storing it
  const hashedPassword = await bcrypt.hash(password, 10);

  await db.run('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword]);

  res.status(200).json({ message: 'Registration successful!' });
}
