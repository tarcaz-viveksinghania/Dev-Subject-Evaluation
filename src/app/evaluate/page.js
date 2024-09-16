// 'use client';
// import { useEffect, useState } from 'react';
// import styles from './upload.module.css'; // Import the CSS module
// import Link from 'next/link';

// export default function EvaluatedPage() {
//   const [uploadedFiles, setUploadedFiles] = useState([]);

//   useEffect(() => {
//     // Fetch the list of uploaded PDFs
//     fetch('/api/upload-list') // Assume you create an endpoint to list the files
//       .then((res) => res.json())
//       .then((data) => setUploadedFiles(data.files));
//   }, []);

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>Evaluated PDFs</h2>
      
//       {uploadedFiles.length > 0 ? (
//         <ul>
//           {uploadedFiles.map((file, index) => (
//             <li key={index}>
//               <a href={`/uploads/${file}`} target="_blank" rel="noopener noreferrer">
//                 {file}
//               </a>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No files uploaded yet</p>
//       )}



//       {/* Navigation buttons */}
//       <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//         <Link href="/" style={{ textDecoration: 'none' }}>
//           <button kind="secondary">Go Home</button>
//         </Link>
//         {/* <Link href="/" style={{ textDecoration: 'none' }}>
//           <button kind="secondary">Next</button>
//         </Link> */}
//       </div>


//     </div>
//   );
// }





// ===================================================================================================
'use client';
import { useEffect, useState } from 'react';
import styles from './evaluated.module.css';

export default function EvaluatedPage() {
  const [pdfURLs, setPdfURLs] = useState([]);

  useEffect(() => {
    const uploadedPDFs = localStorage.getItem('uploadedPDFs');
    if (uploadedPDFs) {
      setPdfURLs(JSON.parse(uploadedPDFs)); // Parse the URLs and set them to state
    }
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Uploaded PDFs</h2>
      {pdfURLs.length > 0 ? (
        pdfURLs.map((url, index) => (
          <div key={index} className={styles.pdfViewer}>
            <h3>PDF {index + 1}</h3>
            <iframe src={url} width="100%" height="500px" className={styles.pdfFrame} />
          </div>
        ))
      ) : (
        <p>No PDFs have been uploaded yet.</p>
      )}
    </div>
  );
}




// ===================================================================================================
// 'use client';
// import { useEffect, useState } from 'react';
// import styles from './evaluate.module.css';

// export default function EvaluatePage() {
//   const [csvData, setCsvData] = useState([]);
//   const [selectedQuestionPaper, setSelectedQuestionPaper] = useState('');

//   useEffect(() => {
//     // Retrieve data from localStorage
//     const savedQuestionPaper = localStorage.getItem('selectedQuestionPaper');
//     const savedCsvData = localStorage.getItem('csvData');

//     if (savedQuestionPaper) setSelectedQuestionPaper(savedQuestionPaper);
//     if (savedCsvData) setCsvData(JSON.parse(savedCsvData));
//   }, []);

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>Evaluate Student's Answers</h2>

//       {/* Display selected question paper */}
//       {selectedQuestionPaper && <p>Selected Question Paper: {selectedQuestionPaper}</p>}

//       {/* Display CSV data */}
//       {csvData.length > 0 ? (
//         <div className={styles.csvPreview}>
//           <h3>CSV Data:</h3>
//           <div className={styles.tableContainer}>
//             <table className={styles.csvTable}>
//               <thead>
//                 <tr>
//                   {Object.keys(csvData[0]).map((header, index) => (
//                     <th key={index}>{header}</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {csvData.map((row, rowIndex) => (
//                   <tr key={rowIndex}>
//                     {Object.values(row).map((value, colIndex) => (
//                       <td key={colIndex}>{value}</td>
//                     ))}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       ) : (
//         <p>No CSV data available</p>
//       )}
//     </div>
//   );
// }






// ===================================================================================================
// 'use client';
// import { useEffect, useState } from 'react';
// import styles from './evaluated.module.css'; // Assuming you have CSS for combined page

// export default function CombinedPage() {
//   const [pdfURLs, setPdfURLs] = useState([]);
//   const [csvData, setCsvData] = useState([]);
//   const [selectedQuestionPaper, setSelectedQuestionPaper] = useState('');

//   // Load uploaded PDFs from localStorage
//   useEffect(() => {
//     const uploadedPDFs = localStorage.getItem('uploadedPDFs');
//     if (uploadedPDFs) {
//       setPdfURLs(JSON.parse(uploadedPDFs));
//     }

//     const savedQuestionPaper = localStorage.getItem('selectedQuestionPaper');
//     const savedCsvData = localStorage.getItem('csvData');
//     if (savedQuestionPaper) setSelectedQuestionPaper(savedQuestionPaper);
//     if (savedCsvData) setCsvData(JSON.parse(savedCsvData));
//   }, []);

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>Evaluate Student's Answers and Uploaded PDFs</h2>

//       {/* Display Uploaded PDFs */}
//       <div className={styles.section}>
//         <h3>Uploaded PDFs</h3>
//         {pdfURLs.length > 0 ? (
//           pdfURLs.map((url, index) => (
//             <div key={index} className={styles.pdfViewer}>
//               <h4>PDF {index + 1}</h4>
//               <iframe src={url} width="100%" height="500px" className={styles.pdfFrame} />
//             </div>
//           ))
//         ) : (
//           <p>No PDFs have been uploaded yet.</p>
//         )}
//       </div>

//       {/* Display selected question paper */}
//       <div className={styles.section}>
//         {selectedQuestionPaper && <p>Selected Question Paper: {selectedQuestionPaper}</p>}

//         {/* Display CSV data */}
//         {csvData.length > 0 ? (
//           <div className={styles.csvPreview}>
//             <h3>CSV Data:</h3>
//             <div className={styles.tableContainer}>
//               <table className={styles.csvTable}>
//                 <thead>
//                   <tr>
//                     {Object.keys(csvData[0]).map((header, index) => (
//                       <th key={index}>{header}</th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {csvData.map((row, rowIndex) => (
//                     <tr key={rowIndex}>
//                       {Object.values(row).map((value, colIndex) => (
//                         <td key={colIndex}>{value}</td>
//                       ))}
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         ) : (
//           <p>No CSV data available</p>
//         )}
//       </div>
//     </div>
//   );
// }
