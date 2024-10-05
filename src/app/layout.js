
// import localFont from "next/font/local";
import "./globals.css";
// import Link from 'next/link'; // Import Link from Next.js for navigation
// import { usePathname } from 'next/navigation';
import ClientLayout from "@/components/ClientLayout";

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

// Metadata export
export const metadata = {
  title: 'GradeSmart.AI',
  description: 'An AI-powered platform for grading answer sheets',
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

 

// export default function RootLayout({ children }) {
//   const pathname = usePathname();

//   // Check if we are on the login page (assuming login is at '/')
//   const isLoginPage = pathname === '/';

//   return (
//     <html lang="en" style={{ height: '100%' }}>
//       <body style={{ margin: 0, height: '120vh', display: 'flex', overflow: 'hidden', padding: '20px' }}>
//         {/* Conditionally render the sidebar */}
//         {!isLoginPage && (
//           <aside
//             style={{
//               width: '200px',
//               height: '100vh',
//               backgroundColor: '#36A9AE',
//               padding: '20px',
//               position: 'fixed',
//               top: 0,
//               left: 0,
//             }}
//           >
//             <h3 style={{ textAlign: 'center' }}>GradeSmart.AI</h3>
//             <hr style={{ backgroundColor: 'black', height: '1px', border: 'none' }} />
//             <Link href="/home" passHref>
//               <button className="sidebar_button">Home</button>
//             </Link>
//             <Link href="/student" passHref>
//               <button className="sidebar_button">Upload Student Answers Sheet</button>
//             </Link>
//             <Link href="/examiner" passHref>
//               <button className="sidebar_button">Upload Examiner Answers Sheet</button>
//             </Link>
//             <Link href="/evaluate" passHref>
//               <button className="sidebar_button">Evaluate</button>
//             </Link>
//             <button className="sidebar_button">Generate Answer Sheet</button>
//           </aside>
//         )}

//         {/* Scrollable container */}
//         <div
//           style={{
//             marginLeft: isLoginPage ? '0' : '200px', // Adjust margin when the sidebar is present or not
//             width: isLoginPage ? '100%' : 'calc(100% - 200px)', // Adjust width when the sidebar is present or not
//             height: '100vh',
//             overflowY: 'auto', // Enable vertical scrolling
//             padding: '20px',
//           }}
//         >
//           <main>{children}</main>
//         </div>
//       </body>
//     </html>
//   );
// }




// ====================================================================================================

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ height: '100%' }}>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
