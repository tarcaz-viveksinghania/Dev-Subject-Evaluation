// import { NextResponse } from 'next/server';
// import sqlite3 from 'sqlite3';
// import { open } from 'sqlite';

// const DB_PATH = '../../mydb.sqlite'; // Path to your SQLite database

// // Open a database connection
// async function openDatabase() {
//   try {
//     return await open({
//       filename: DB_PATH,
//       driver: sqlite3.Database,
//     });
//   } catch (error) {
//     console.error('Database connection error:', error);
//   }
// }


// // Authentication function
// async function authenticateUser(username, password) {

//   console.log("AAA")
//   const db = await openDatabase();
//   const user = await db.get('SELECT * FROM users WHERE username = ?', username);
//   await db.close();

//   // Here you would normally hash passwords and compare
//   // For simplicity, we're comparing plain text
//   if (user && user.password === password) {
//     return user;
//   }

//   return null;
// }

// // export async function POST(request) {
// //   const { username, password } = await request.json();

// //   const user = await authenticateUser(username, password);

// //   if (user) {
// //     // Login successful, return a success response
// //     return NextResponse.json({ message: 'Login successful!', user: { name: user.username } }, { status: 200 });
// //   }

// //   // If login fails, return an error response
// //   return NextResponse.json({ message: 'Invalid username or password' }, { status: 401 });
// // }


// export async function POST(request) {
//   const { username, password } = await request.json();

//   try {
//     const user = await authenticateUser(username, password);
    
//     if (user) {
//       return NextResponse.json({ message: 'Login successful!', user: { name: user.username } }, { status: 200 });
//     }
    
//     return NextResponse.json({ message: 'Invalid username or password' }, { status: 401 });
//   } catch (error) {
//     console.error('Error during authentication:', error);
//     return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
//   }
// }


// ====================================================================================================

import { NextResponse } from 'next/server';

const VALID_USERNAME = 'admin';
const VALID_PASSWORD = 'admin';

export async function POST(request) {
  const { username, password } = await request.json();

  if (username === VALID_USERNAME && password === VALID_PASSWORD) {
    return NextResponse.json({ message: 'Login successful!', user: { name: 'Admin' } }, { status: 200 });
  }

  return NextResponse.json({ message: 'Invalid username or password' }, { status: 401 });
}














// import { NextResponse } from 'next/server';
// import sqlite3 from 'sqlite3';
// import { open } from 'sqlite';

// const DB_PATH = '../mydb.sqlite'; // Path to your SQLite database

// // Open a database connection
// async function openDatabase() {
//   return open({
//     filename: DB_PATH,
//     driver: sqlite3.Database,
//   });
// }

// // Login User Function
// async function loginUser(email, password) {
//   const db = await openDatabase();
//   return new Promise((resolve, reject) => {
//     db.get(`SELECT * FROM users WHERE email = ?`, [email], (err, row) => {
//       if (err) {
//         reject('Database error');
//       }

//       if (!row) {
//         reject('User not found');
//       } else {
//         // Directly comparing the plain text password with the stored password
//         if (row.password === password) {
//           resolve(row); // Resolve with the user row if login is successful
//         } else {
//           reject('Invalid password');
//         }
//       }
//     });
//   }).finally(() => {
//     db.close(); // Ensure the database connection is closed
//   });
// }

// export async function POST(request) {
//   const { email, password } = await request.json();

//   try {
//     const user = await loginUser(email, password);
//     // Login successful, return a success response
//     return NextResponse.json({ message: 'Login successful!', user: { name: user.username } }, { status: 200 });
//   } catch (error) {
//     // If login fails, return an error response
//     return NextResponse.json({ message: error }, { status: 401 });
//   }
// }
