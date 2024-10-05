// const sqlite3 = require('sqlite3').verbose();
// const bcrypt = require('bcrypt');

// // Create or connect to SQLite database
// const db = new sqlite3.Database('./users.db');

// // Register User Function (if needed, for testing purposes)
// async function registerUser(email, password) {
//   const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
//   db.run(`INSERT INTO users (email, password_hash) VALUES (?, ?)`, [email, hashedPassword], (err) => {
//     if (err) {
//       return console.log('User already exists or error:', err.message);
//     }
//     console.log('User registered successfully');
//   });
// }

// // Login User Function
// async function loginUser(email, password) {
//   return new Promise((resolve, reject) => {
//     db.get(`SELECT * FROM users WHERE email = ?`, [email], async (err, row) => {
//       if (err) {
//         reject('Database error');
//       }

//       if (!row) {
//         reject('User not found');
//       } else {
//         const isPasswordValid = await bcrypt.compare(password, row.password_hash);
//         if (isPasswordValid) {
//           resolve('Login successful');
//         } else {
//           reject('Invalid password');
//         }
//       }
//     });
//   });
// }

// // Register a new user (run only once to add a user)
// // registerUser('user@example.com', 'password123');

// // Test login functionality
// loginUser('user@example.com', 'password123')
//   .then((msg) => console.log(msg))
//   .catch((err) => console.log(err));













// ======================================================================================================
const sqlite3 = require('sqlite3').verbose();

// Path to your SQLite database file
const db = new sqlite3.Database('./mydb.sqlite'); // Adjust the path accordingly

// Function to view all users in the database
function viewUsers() {
  db.serialize(() => {
    db.all(`SELECT * FROM users`, (err, rows) => {
      if (err) {
        console.error('Error fetching data from database:', err.message);
        return;
      }

      console.log('Users in the database:');
      if (rows.length === 0) {
        console.log('No users found.');
      } else {
        rows.forEach((row) => {
          console.log(row);
        });
      }
    });
  });
}

// Close the database connection after viewing data
db.on('close', () => {
  console.log('Database connection closed.');
});

// Call the viewUsers function
viewUsers();

// Close the database after running the query
db.close();



















// ======================================================================================================

// const sqlite3 = require('sqlite3').verbose();
// const path = require('path');

// // Specify the path to your SQLite database
// const dbPath = path.join(__dirname, 'mydb.sqlite');

// // Connect to the database
// const db = new sqlite3.Database(dbPath, (err) => {
//     if (err) {
//         console.error('Error opening database ' + err.message);
//     } else {
//         console.log('Connected to the database.');
//     }
// });

// // Create the users table
// const createTableSQL = `
//     CREATE TABLE IF NOT EXISTS users (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         email TEXT NOT NULL UNIQUE,
//         password TEXT NOT NULL
//     );
// `;

// db.run(createTableSQL, (err) => {
//     if (err) {
//         console.error('Error creating table ' + err.message);
//     } else {
//         console.log('Users table created successfully.');
//     }
// });

// // Close the database connection
// db.close((err) => {
//     if (err) {
//         console.error('Error closing database ' + err.message);
//     } else {
//         console.log('Database connection closed.');
//     }
// });


// ======================================================================================================

// const sqlite3 = require('sqlite3').verbose();
// const { open } = require('sqlite');

// async function setupDatabase() {
//   const db = await open({
//     filename: './mydb.sqlite',
//     driver: sqlite3.Database,
//   });

//   // Drop the users table if it exists
//   await db.exec("DROP TABLE IF EXISTS users");

//   // Create a users table
//   await db.exec(`
//     CREATE TABLE IF NOT EXISTS users (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       username TEXT NOT NULL UNIQUE,
//       password TEXT NOT NULL
//     )
//   `);

//   // Insert the admin user if it doesn't exist
//   const existingUser = await db.get("SELECT * FROM users WHERE username = 'admin'");
//   if (!existingUser) {
//     await db.run("INSERT INTO users (username, password) VALUES (?, ?)", ['admin1', 'admin1']);
//   }

//   await db.close();
// }

// setupDatabase().catch(console.error);
// ======================================================================================================
