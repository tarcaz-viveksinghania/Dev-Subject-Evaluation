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




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: 'flex' }}>
          {/* Sidebar */}
          <aside style={{ width: '200px', height: '100vh', backgroundColor: '#36A9AE', padding: '20px' }}>
            
            <h3 style={{ textAlign: 'center' }}>GradeSmart.AI</h3>
            <hr style={{ backgroundColor: 'black', height: '1px', border: 'none' }} />
            
            <Link href="/" passHref>
              <button className="sidebar_button">Home</button>
            </Link>
            
            <Link href="/upload" passHref>
              <button className="sidebar_button">Upload Student Answers Sheet</button>
            </Link>
            
            <button className="sidebar_button">Upload Examiner Answers Sheet</button>
            <button className="sidebar_button">Evaluate</button>
            <button className="sidebar_button">Generate Answer Sheet</button>
          </aside>
          
          {/* Main content */}
          <main style={{ flexGrow: 1, padding: '20px' }}>
            {children}
          </main>
        </div>

        
      </body>
    </html>
  );
}

