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
// 'use client';
// import { useEffect, useState } from 'react';
// import styles from './evaluated.module.css';

// export default function EvaluatedPage() {
//   const [pdfURLs, setPdfURLs] = useState([]);

//   useEffect(() => {
//     const uploadedPDFs = localStorage.getItem('uploadedPDFs');
//     if (uploadedPDFs) {
//       setPdfURLs(JSON.parse(uploadedPDFs)); // Parse the URLs and set them to state
//     }
//   }, []);

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>Uploaded PDFs</h2>
//       {pdfURLs.length > 0 ? (
//         pdfURLs.map((url, index) => (
//           <div key={index} className={styles.pdfViewer}>
//             <h3>PDF {index + 1}</h3>
//             <iframe src={url} width="100%" height="500px" className={styles.pdfFrame} />
//           </div>
//         ))
//       ) : (
//         <p>No PDFs have been uploaded yet.</p>
//       )}
//     </div>
//   );
// }




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













// ===================================================================================================
// 'use client';
// import { useEffect, useState } from 'react';
// import styles from './evaluated.module.css'; // Assuming you have CSS for the page
// import Papa from 'papaparse'; // Ensure you have this import if using Papa.parse



// export default function CombinedPage() {
//   const [pdfURLs, setPdfURLs] = useState([]);
//   const [csvData, setCsvData] = useState([]);
//   const [selectedQuestionPaper, setSelectedQuestionPaper] = useState('');
//   const [dataFrame, setDataFrame] = useState(null); // State to store the resulting DF






//   // Load uploaded PDFs and CSV from localStorage
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







//   // Function to process PDF and CSV
//   const handleProcessData = async () => {
//     if (csvData.length > 0 && pdfURLs.length > 0) {
//         const formData = new FormData();
        
//         // Convert csvData to CSV string using Papa.unparse
//         const csvString = Papa.unparse(csvData);
//         const csvBlob = new Blob([csvString], { type: 'text/csv' });
//         formData.append('csv_file', csvBlob, 'data.csv');
        
//         // Fetch the PDF file if pdfURLs contains URLs
//         try {
//             const pdfResponse = await fetch(pdfURLs[0]);
//             if (!pdfResponse.ok) {
//                 throw new Error('Failed to fetch PDF file');
//             }
//             const pdfBlob = await pdfResponse.blob();
//             formData.append('pdf_file', pdfBlob, 'document.pdf');
//         } catch (error) {
//             console.error('Error fetching PDF:', error);
//             return; // Exit if there's an issue fetching the PDF
//         }
    
//         // Send form data to the FastAPI endpoint
//         try {
//             const response = await fetch('/api/evaluate', { // Ensure the endpoint URL is correct
//                 method: 'POST',
//                 body: formData,
//             });
    
//             if (!response.ok) {
//                 throw new Error(`Error: ${response.statusText}`);
//             }
//             const resultDF = await response.json();
//             setDataFrame(resultDF); // Set the resulting DataFrame
//         } catch (error) {
//             console.error('Error during processing:', error);
//         }
//     } else {
//         console.error('CSV data or PDF URLs are missing');
//     }
// };











//   useEffect(() => {
//     if (csvData.length > 0 && pdfURLs.length > 0 && selectedQuestionPaper) {
//       handleProcessData(); // Call the processing function when both CSV and PDF are available
//     }
//   }, [csvData, pdfURLs, selectedQuestionPaper]);








//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>Evaluate Student's Answers and Uploaded PDFs</h2>


//       {/* Display Uploaded PDFs */}
//       <div className={styles.section}>
//          <h3>Uploaded PDFs</h3>
//          {pdfURLs.length > 0 ? (
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
















//       {/* Display message if no data */}
//       {!dataFrame && (
//         <div className={styles.message}>
//           <p>Please upload a CSV and PDF to process.</p>
//         </div>
//       )}




//       {/* Display the resulting DataFrame */}
//       {dataFrame && (
//         <div className={styles.section}>
//           <h3>Resulting DataFrame:</h3>
//           <div className={styles.tableContainer}>
//             <table className={styles.csvTable}>
//               <thead>
//                 <tr>
//                   {Object.keys(dataFrame).map((header, index) => (
//                     <th key={index}>{header}</th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {dataFrame.map((row, rowIndex) => (
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
//       )}




//     </div>
//   );
// }



// ===================================================================================================




'use client';
import { useEffect, useState } from 'react';
import styles from './evaluated.module.css';
import Papa from 'papaparse';
import Link from 'next/link';
import { saveAs } from 'file-saver';

export default function CombinedPage() {
  const [pdfURLs, setPdfURLs] = useState([]);
  const [csvData, setCsvData] = useState([]);
  const [selectedQuestionPaper, setSelectedQuestionPaper] = useState('');
  const [dataFrame, setDataFrame] = useState(null);




  // Load uploaded PDFs and CSV from localStorage
  useEffect(() => {
    const uploadedPDFs = localStorage.getItem('uploadedPDFs');
    if (uploadedPDFs) {
      setPdfURLs(JSON.parse(uploadedPDFs));
    }

    const savedQuestionPaper = localStorage.getItem('selectedQuestionPaper');
    const savedCsvData = localStorage.getItem('csvData');
    if (savedQuestionPaper) setSelectedQuestionPaper(savedQuestionPaper);
    if (savedCsvData) setCsvData(JSON.parse(savedCsvData));
  }, []);



  
  // Function to process PDF and CSV
  const handleProcessData = async () => {
    if (csvData.length > 0 && pdfURLs.length > 0) {
      const formData = new FormData();

      // Convert csvData to CSV string using Papa.unparse
      const csvString = Papa.unparse(csvData);
      const csvBlob = new Blob([csvString], { type: 'text/csv' });
      formData.append('csv_file', csvBlob, 'data.csv');

      // Fetch the PDF file
      try {
        const pdfResponse = await fetch(pdfURLs[0]);
        if (!pdfResponse.ok) {
          throw new Error('Failed to fetch PDF file');
        }
        const pdfBlob = await pdfResponse.blob();
        formData.append('pdf_file', pdfBlob, 'document.pdf');
      } catch (error) {
        console.error('Error fetching PDF:', error);
        return;
      }

      // Send form data to the FastAPI endpoint
      try {
        const response = await fetch('/api/evaluate', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const resultDF = await response.json();
        setDataFrame(resultDF); // Set the resulting DataFrame
      } catch (error) {
        console.error('Error during processing:', error);
      }
    } else {
      console.error('CSV data or PDF URLs are missing');
    }
  };




  // Process data when both CSV and PDF are available
  useEffect(() => {
    if (csvData.length > 0 && pdfURLs.length > 0 && selectedQuestionPaper) {
      handleProcessData();
    }
  }, [csvData, pdfURLs, selectedQuestionPaper]);



  const downloadCSV = () => {
    // Convert dataFrame to CSV format
    const csvContent = [
      Object.keys(dataFrame[0]).join(","), // Add headers
      ...dataFrame.map(row => Object.values(row).join(",")) // Add rows
    ].join("\n");
  
    // Create a Blob object for the CSV
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  
    // Trigger the download using FileSaver
    saveAs(blob, "dataframe.csv");
  };

  

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Evaluate Student's Answers and Uploaded PDFs</h2>




      {/* Display Uploaded PDFs */}
      <div className={styles.section}>
        <h3>Uploaded PDFs</h3>
        {pdfURLs.length > 0 ? (
          pdfURLs.map((url, index) => (
            <div key={index} className={styles.pdfViewer}>
              <h4>PDF {index + 1}</h4>
              <iframe src={url} width="100%" height="500px" className={styles.pdfFrame} />
            </div>
          ))
        ) : (
          <p>No PDFs have been uploaded yet.</p>
        )}
      </div>






      {/* Display CSV data */}
      {/* <div className={styles.section}>
        {selectedQuestionPaper && <p>Selected Question Paper: {selectedQuestionPaper}</p>}
        {csvData.length > 0 ? (
          <div className={styles.csvPreview}>
            <h3>CSV Data:</h3>
            <div className={styles.tableContainer}>
              <table className={styles.csvTable}>
                <thead>
                  <tr>
                    {Object.keys(csvData[0]).map((header, index) => (
                      <th key={index}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {csvData.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {Object.values(row).map((value, colIndex) => (
                        <td key={colIndex}>{value}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <p>No CSV data available</p>
        )}
      </div> */}




      {/* Display the resulting DataFrame */}
      {dataFrame && (
        <div className={styles.section}>
          <h3>Resulting DataFrame:</h3>
          <div className={styles.tableContainer}>
            <table className={styles.csvTable}>
              <thead>
                <tr>
                  {Object.keys(dataFrame[0]).map((header, index) => (
                    <th key={index}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dataFrame.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {Object.values(row).map((value, colIndex) => (
                      <td key={colIndex}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}




      {/* Navigation buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link href="/home" style={{ textDecoration: 'none' }}>
          <button kind="secondary">Go Home</button>
        </Link>
        <Link href="/examiner" style={{ textDecoration: 'none' }}>
          <button kind="secondary" onClick={downloadCSV}>Download</button>
        </Link>
      </div>


    </div>
  );
}
