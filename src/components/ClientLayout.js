"use client"; // This is the Client Component

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/';

  return (
    <div style={{ margin: 0, height: '120vh', display: 'flex', overflow: 'hidden', padding: '20px' }}>
      {/* Conditionally render the sidebar */}
      {!isLoginPage && (
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
          <Link href="/home" passHref>
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
      )}

      {/* Scrollable container */}
      <div
        style={{
          marginLeft: isLoginPage ? '0' : '200px', // Adjust margin when the sidebar is present or not
          width: isLoginPage ? '100%' : 'calc(100% - 200px)', // Adjust width when the sidebar is present or not
          height: '100vh',
          overflowY: 'auto', // Enable vertical scrolling
          padding: '20px',
        }}
      >
        <main>{children}</main>
      </div>
    </div>
  );
}
