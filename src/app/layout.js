// import localFont from "next/font/local";
import "./globals.css";
import Link from 'next/link'; // Import Link from Next.js for navigation

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "GradeSmart.AI",
  description: "GradeSmart Application",
};

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//         {children}        
//       </body>
//     </html>
//   );
// }




// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <div style={{ display: 'flex' }}>
//           {/* Sidebar */}
//           <aside style={{ width: '200px', height: '123vh', backgroundColor: '#36A9AE', padding: '20px' }}>
            
//             <h3 style={{ textAlign: 'center' }}>GradeSmart.AI</h3>
//             <hr style={{ backgroundColor: 'black', height: '1px', border: 'none' }} />
            
//             <Link href="/" passHref>
//               <button className="sidebar_button">Home</button>
//             </Link>
            
//             <Link href="/student" passHref>
//               <button className="sidebar_button">Upload Student Answers Sheet</button>
//             </Link>
            
//             <Link href="/examiner" passHref>
//               <button className="sidebar_button">Upload Examiner Answers Sheet</button>
//             </Link>
//             <button className="sidebar_button">Evaluate</button>
//             <button className="sidebar_button">Generate Answer Sheet</button>
//           </aside>
          
//           {/* Main content */}
//           <main style={{ flexGrow: 1, padding: '20px' }}>
//             {children}
//           </main>
//         </div>

        
//       </body>
//     </html>
//   );
// }






export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ height: '100%' }}>
      <body style={{ margin: 0, height: '120vh', display: 'flex', overflow: 'hidden', padding: '20px' }}>
        <aside
          style={{
            width: '200px',
            height: '100vh',
            backgroundColor: '#36A9AE',
            padding: '20px',
            position: 'fixed',
            top: 0,
            left: 0,
          }}
        >
          <h3 style={{ textAlign: 'center' }}>GradeSmart.AI</h3>
          <hr style={{ backgroundColor: 'black', height: '1px', border: 'none' }} />
          <Link href="/" passHref>
            <button className="sidebar_button">Home</button>
          </Link>
          <Link href="/student" passHref>
            <button className="sidebar_button">Upload Student Answers Sheet</button>
          </Link>
          <Link href="/examiner" passHref>
            <button className="sidebar_button">Upload Examiner Answers Sheet</button>
          </Link>
          <Link href="/evaluate" passHref>
            <button className="sidebar_button">Evaluate</button>
          </Link>
          <button className="sidebar_button">Generate Answer Sheet</button>
        </aside>

        {/* Scrollable container */}
        <div
          style={{
            marginLeft: '200px', // This ensures the content stays next to the sidebar
            width: 'calc(100% - 200px)', // Make the content fill the rest of the screen width
            height: '100vh',
            overflowY: 'auto', // Enable vertical scrolling
            padding: '20px',
          }}
        >
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}

