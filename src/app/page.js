import Image from "next/image";
import Link from 'next/link';

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       {/* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"> */}
//         <h1>Welcome Vivek</h1>
//       {/* </main> */}
      
//     </div>
//   );
// }


// export default function Home() {
//   return (
//     <h1>Welcome Vivek</h1>
//   );
// }



export default function HomePage() {
  return (
    <div style={{ padding: '20px', textAlign: 'center',  }}>
      <h1 style={{ textAlign: 'center', fontSize: '65px' }}>GradeSmart.AI</h1>
      <h2 style={{ textAlign: 'center', fontSize: '35px', color: 'grey' }}>Your AI companion to richer and faster feedback on student tests</h2>
      <hr></hr>
      <h3 style={{ textAlign: 'left', fontSize: '30px' }}>Choose an option to proceed:</h3>

      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        
        <Link href="/upload" style={{ textDecoration: 'none' }}>
          <button kind="secondary">Upload Student's Answers Sheets</button>
        </Link>

        <button kind="secondary">Upload Examiner's Answer Sheets</button>
        <button kind="secondary">Obtain rich, personalised feedback</button>
      </div>


    </div>
  );
}



