// 'use client';
// import { useState } from 'react';
// import styles from './upload.module.css'; // Import the CSS module

// export default function UploadPage() {
//   const [file, setFile] = useState(null);
//   const [error, setError] = useState('');

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//       setError('');
//     } else {
//       setError('Please select a file to upload');
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!file) {
//       setError('No file selected');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('answersheet', file);

//     // Logic to upload the file (simulated here)
//     console.log('File to upload:', file);

//     // Reset file input after submission
//     setFile(null);
//   };

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>Upload Answersheet</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="file" onChange={handleFileChange accept} />
//         {error && <p className={styles.error}>{error}</p>}
//         <button type="submit" className={styles.button}>
//           Upload
//         </button>
//       </form>

//       {file && (
//         <div className={styles.selectedFile}>
//           <h3>Selected file:</h3>
//           <p>{file.name}</p>
//         </div>
//       )}
//     </div>
//   );
// }


// 'use client';
// import { useState } from 'react';
// import styles from './upload.module.css'; // Import the CSS module

// export default function UploadPage() {
//   const [file, setFile] = useState(null);
//   const [error, setError] = useState('');

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile) {
//       if (selectedFile.type === 'application/pdf') {
//         setFile(selectedFile);
//         setError('');
//       } else {
//         setFile(null);
//         setError('Only PDF files are allowed');
//       }
//     } else {
//       setError('Please select a file to upload');
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!file) {
//       setError('No file selected');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('answersheet', file);

//     // Logic to upload the file (simulated here)
//     console.log('File to upload:', file);

//     // Reset file input after submission
//     setFile(null);
//   };

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>Upload Answersheet</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="file" onChange={handleFileChange} accept=".pdf" />
//         {error && <p className={styles.error}>{error}</p>}
//         <button type="submit" className={styles.button}>
//           Upload
//         </button>
//       </form>

//       {file && (
//         <div className={styles.selectedFile}>
//           <h3>Selected file:</h3>
//           <p>{file.name}</p>
//         </div>
//       )}
//     </div>
//   );
// }





// 'use client';
// import { useState } from 'react';
// import Papa from 'papaparse';
// import styles from './upload.module.css'; // Import the CSS module
// import Link from 'next/link';

// export default function UploadPage() {
//   const [files, setFiles] = useState([]); // Array to store selected files
//   const [csvData, setCsvData] = useState([]); // Array to store CSV data
//   const [error, setError] = useState('');
//   const [selectedQuestionPaper, setSelectedQuestionPaper] = useState(''); // State to track selected question paper

//   // Example list of existing question papers
//   const questionPapers = [
//     { id: 1, name: 'Math Paper 1' },
//     { id: 2, name: 'Science Paper 1' },
//     { id: 3, name: 'History Paper 1' },
//   ];

//   const handleFileChange = (e) => {
//     const selectedFiles = Array.from(e.target.files);
//     const csvFiles = selectedFiles.filter(file => file.type === 'text/csv');

//     if (csvFiles.length > 0) {
//       setFiles(csvFiles);
//       setError('');

//       // Parse the first CSV file
//       const file = csvFiles[0]; // Assuming single CSV file
//       Papa.parse(file, {
//         complete: (result) => {
//           setCsvData(result.data);
//         },
//         header: true, // Treat the first row as headers
//       });
//     } else {
//       setFiles([]);
//       setCsvData([]);
//       setError('Only CSV files are allowed');
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (files.length === 0) {
//       setError('No files selected');
//       return;
//     }

//     const formData = new FormData();
//     files.forEach(file => formData.append('answersheets', file)); // Append each file to FormData

//     // Logic to upload the files (simulated here)
//     console.log('Files to upload:', files);
//     console.log('Selected Question Paper:', selectedQuestionPaper);

//     // Reset file input after submission
//     setFiles([]);
//     setCsvData([]);
//     setSelectedQuestionPaper('');
//   };

//   const handleQuestionPaperChange = (e) => {
//     setSelectedQuestionPaper(e.target.value); // Update the selected question paper
//   };

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>Upload Examiner's Answers</h2>
    




//       {/* Dropdown to select existing question paper */}
//       <div className={styles.dropdownContainer}>
//         <label htmlFor="questionPaperSelect">Select Question Paper:</label>
//         <select
//           id="questionPaperSelect"
//           value={selectedQuestionPaper}
//           onChange={handleQuestionPaperChange}
//           className={styles.dropdown}
//         >
//           <option value="" disabled>Select a question paper</option>
//           {questionPapers.map((paper) => (
//             <option key={paper.id} value={paper.name}>
//               {paper.name}
//             </option>
//           ))}
//         </select>
//       </div>








//       {/* OR separator */}
//       <div style={{ display: 'flex', alignItems: 'center', textAlign: 'center', margin: '20px 0' }}>
//         <hr style={{ flexGrow: 1, border: '0.2px solid lightgrey' }} />
//         <span style={{ margin: '0 10px' }}>OR</span>
//         <hr style={{ flexGrow: 1, border: '0.2px solid lightgrey' }} />
//       </div>








//       {/* File upload section */}
//       <p style={{ textAlign: 'left', fontSize: '18px' }}>Upload CSV Files</p>
//       <form onSubmit={handleSubmit} className={styles.form}>
//         <div className={styles.fileInputContainer}>
//           <label htmlFor="fileUpload" className={styles.fileLabel}>Choose CSV files</label>
//           <input
//             type="file"
//             id="fileUpload"
//             onChange={handleFileChange}
//             accept=".csv"
//             multiple
//             className={styles.fileInput}
//           />

//             {error && <p className={styles.error}>{error}</p>}
            
//             <button type="submit" className={styles.button}>
//               Upload
//             </button>
//         </div>
//       </form>










//       {/* View upload section */}
//       {csvData.length > 0 && (
//         <div className={styles.csvPreview}>
//           <h3>CSV File Preview:</h3>
//           <table className={styles.csvTable}>
//             <thead>
//               <tr>
//                 {Object.keys(csvData[0]).map((header, index) => (
//                   <th key={index}>{header}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {csvData.map((row, rowIndex) => (
//                 <tr key={rowIndex}>
//                   {Object.values(row).map((value, colIndex) => (
//                     <td key={colIndex}>{value}</td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}




//       {/* Navigation button section */}
//       <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//         <Link href="/student" style={{ textDecoration: 'none' }}>
//           <button kind="secondary">Back</button>
//         </Link>
//         <Link href="/" style={{ textDecoration: 'none' }}>
//           <button kind="secondary">Evaluate</button>
//         </Link>
//       </div>
//     </div>
//   );
// }





// 'use client';
// import { useState } from 'react';
// import Papa from 'papaparse';
// import styles from './upload.module.css'; // Import the CSS module
// import Link from 'next/link';

// export default function UploadPage() {
//   const [files, setFiles] = useState([]); // Array to store selected files
//   const [csvData, setCsvData] = useState([]); // Array to store CSV data
//   const [error, setError] = useState('');
//   const [selectedQuestionPaper, setSelectedQuestionPaper] = useState(''); // State to track selected question paper

//   // Example list of existing question papers
//   const questionPapers = [
//     { id: 1, name: 'Math Paper 1' },
//     { id: 2, name: 'Science Paper 1' },
//     { id: 3, name: 'History Paper 1' },
//   ];

//   const handleFileChange = (e) => {
//     const selectedFiles = Array.from(e.target.files);
//     const csvFiles = selectedFiles.filter(file => file.type === 'text/csv');

//     if (csvFiles.length > 0) {
//       setFiles(csvFiles);
//       setError('');

//       // Parse the first CSV file
//       const file = csvFiles[0]; // Assuming single CSV file
//       Papa.parse(file, {
//         complete: (result) => {
//           setCsvData(result.data);
//         },
//         header: true, // Treat the first row as headers
//       });
//     } else {
//       setFiles([]);
//       setCsvData([]);
//       setError('Only CSV files are allowed');
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (files.length === 0) {
//       setError('No files selected');
//       return;
//     }

//     const formData = new FormData();
//     files.forEach(file => formData.append('answersheets', file)); // Append each file to FormData

//     // Logic to upload the files (simulated here)
//     console.log('Files to upload:', files);
//     console.log('Selected Question Paper:', selectedQuestionPaper);

//     // Reset file input after submission
//     setFiles([]);
//     setCsvData([]);
//     setSelectedQuestionPaper('');
//   };

//   const handleQuestionPaperChange = async (e) => {
//     const selectedPaper = e.target.value;
//     setSelectedQuestionPaper(selectedPaper);
  
//     try {
//       const response = await fetch(`/api/getCsv?paperName=${encodeURIComponent(selectedPaper)}`);
//       const data = await response.json();
//       setCsvData(data); // Set the fetched CSV data
//     } catch (error) {
//       setError('Failed to fetch the CSV file');
//     }
//   };
  

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>Upload Examiner's Answers</h2>
      







//       {/* Dropdown to select existing question paper */}
//       <div className={styles.dropdownContainer}>
//         <label htmlFor="questionPaperSelect">Select Question Paper:</label>
//         <select
//           id="questionPaperSelect"
//           value={selectedQuestionPaper}
//           onChange={handleQuestionPaperChange}
//           className={styles.dropdown}
//         >
//           <option value="" disabled>Select a question paper</option>
//           {questionPapers.map((paper) => (
//             <option key={paper.id} value={paper.name}>
//               {paper.name}
//             </option>
//           ))}
//         </select>
//       </div>







//       {/* OR separator */}
//       <div style={{ display: 'flex', alignItems: 'center', textAlign: 'center', margin: '20px 0' }}>
//         <hr style={{ flexGrow: 1, border: '0.2px solid lightgrey' }} />
//         <span style={{ margin: '0 10px' }}>OR</span>
//         <hr style={{ flexGrow: 1, border: '0.2px solid lightgrey' }} />
//       </div>






//       {/* File upload section */}
//       <p style={{ textAlign: 'left', fontSize: '18px' }}>Upload CSV Files</p>
//       <form onSubmit={handleSubmit} className={styles.form}>
//         <div className={styles.fileInputContainer}>
//           <label htmlFor="fileUpload" className={styles.fileLabel}>Choose CSV files</label>
//           <input
//             type="file"
//             id="fileUpload"
//             onChange={handleFileChange}
//             accept=".csv"
//             multiple
//             className={styles.fileInput}
//           />

//             {error && <p className={styles.error}>{error}</p>}
            
//             <button type="submit" className={styles.button}>
//               Upload
//             </button>
//         </div>
//       </form>





//       {/* View upload section */}
//       {csvData.length > 0 && (
//         <div className={styles.csvPreview}>
//           <h3>CSV File Preview:</h3>
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
//       )}





//       {/* Navigation button section */}
//       <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//         <Link href="/student" style={{ textDecoration: 'none' }}>
//           <button kind="secondary">Back</button>
//         </Link>
//         <Link href="/evaluate" style={{ textDecoration: 'none' }}>
//           <button kind="secondary">Evaluate</button>
//         </Link>
//       </div>
//     </div>
//   );
// }











// 'use client';
// import { useState, useEffect } from 'react';
// import Papa from 'papaparse';
// import styles from './upload.module.css';
// import Link from 'next/link';

// export default function UploadPage() {
//   const [files, setFiles] = useState([]); // Array to store selected files
//   const [csvData, setCsvData] = useState([]); // Array to store CSV data
//   const [error, setError] = useState('');
//   const [selectedQuestionPaper, setSelectedQuestionPaper] = useState(''); // State to track selected question paper

//   const questionPapers = [
//     { id: 1, name: 'Math Paper 1' },
//     { id: 2, name: 'Science Paper 1' },
//     { id: 3, name: 'History Paper 1' },
//   ];





//   // Load saved state from localStorage (if any) on page load
//   useEffect(() => {
//     const savedQuestionPaper = localStorage.getItem('selectedQuestionPaper');
//     const savedCsvData = localStorage.getItem('csvData');
//     const savedFiles = localStorage.getItem('files');
  
//     if (savedQuestionPaper) {
//       setSelectedQuestionPaper(savedQuestionPaper);
//     } else {
//       setSelectedQuestionPaper(''); // Ensure dropdown starts with no selection
//     }
  
//     // If you don't want to auto-load files, don't retrieve savedFiles from localStorage
//     if (savedCsvData) setCsvData(JSON.parse(savedCsvData));
//   }, []);
  





//   const handleFileChange = (e) => {
//     const selectedFiles = Array.from(e.target.files);
//     const csvFiles = selectedFiles.filter(file => file.type === 'text/csv');

//     if (csvFiles.length > 0) {
//       setFiles(csvFiles);
//       setError('');

//       const file = csvFiles[0];
//       Papa.parse(file, {
//         complete: (result) => {
//           setCsvData(result.data);
//           // Save CSV data and files to localStorage
//           localStorage.setItem('csvData', JSON.stringify(result.data));
//           localStorage.setItem('files', JSON.stringify(csvFiles));
//         },
//         header: true,
//       });
//     } else {
//       setFiles([]);
//       setCsvData([]);
//       setError('Only CSV files are allowed');
//     }
//   };






//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (files.length === 0) {
//       setError('No files selected');
//       return;
//     }
  
//     // Simulate upload logic and clear state after submission
//     setFiles([]);
//     setCsvData([]);
//     setSelectedQuestionPaper('');
  
//     // Clear localStorage after submission
//     localStorage.removeItem('files');
//     localStorage.removeItem('csvData');
//     localStorage.removeItem('selectedQuestionPaper');
//   };
  





//   const handleQuestionPaperChange = async (e) => {
//     const selectedPaper = e.target.value;
//     setSelectedQuestionPaper(selectedPaper);
    
//     // Save the selected question paper to localStorage
//     localStorage.setItem('selectedQuestionPaper', selectedPaper);
  
//     try {
//       const response = await fetch(`/api/getCsv?paperName=${encodeURIComponent(selectedPaper)}`);
//       const data = await response.json();
//       setCsvData(data);
//       // Save fetched CSV data to localStorage
//       localStorage.setItem('csvData', JSON.stringify(data));
//     } catch (error) {
//       setError('Failed to fetch the CSV file');
//     }
//   };





//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>Upload Examiner's Answers</h2>




//       {/* Dropdown to select existing question paper */}
//       <div className={styles.dropdownContainer}>
//         <label htmlFor="questionPaperSelect">Select Question Paper:</label>
//         <select
//           id="questionPaperSelect"
//           value={selectedQuestionPaper}
//           onChange={handleQuestionPaperChange}
//           className={styles.dropdown}
//         >
//           <option value="" disabled>Select a question paper</option>
//           {questionPapers.map((paper) => (
//             <option key={paper.id} value={paper.name}>
//               {paper.name}
//             </option>
//           ))}
//         </select>
//       </div>




//       {/* OR separator */}
//       <div style={{ display: 'flex', alignItems: 'center', textAlign: 'center', margin: '20px 0' }}>
//         <hr style={{ flexGrow: 1, border: '0.2px solid lightgrey' }} />
//         <span style={{ margin: '0 10px' }}>OR</span>
//         <hr style={{ flexGrow: 1, border: '0.2px solid lightgrey' }} />
//       </div>




//       {/* File upload section */}
//       <p style={{ textAlign: 'left', fontSize: '18px' }}>Upload CSV Files</p>
//       <form onSubmit={handleSubmit} className={styles.form}>
//         <div className={styles.fileInputContainer}>
//           <label htmlFor="fileUpload" className={styles.fileLabel}>Choose CSV files</label>
//           <input
//             type="file"
//             id="fileUpload"
//             onChange={handleFileChange}
//             accept=".csv"
//             multiple
//             className={styles.fileInput}
//           />
//           {error && <p className={styles.error}>{error}</p>}
//           <button type="submit" className={styles.button}>
//             Upload
//           </button>
//         </div>
//       </form>





//       {/* CSV preview */}
//       {csvData.length > 0 && (
//         <div className={styles.csvPreview}>
//           <h3>CSV File Preview:</h3>
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
//       )}





//       {/* Navigation buttons */}
//       <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//         <Link href="/student" style={{ textDecoration: 'none' }}>
//           <button kind="secondary">Back</button>
//         </Link>
//         <Link href="/evaluate" style={{ textDecoration: 'none' }}>
//           <button kind="secondary">Evaluate</button>
//         </Link>
//       </div>




//     </div>
//   );
// }




'use client';
import { useState, useEffect, useRef } from 'react';
import Papa from 'papaparse';
import styles from './upload.module.css';
import Link from 'next/link';

export default function UploadPage() {
  const [files, setFiles] = useState([]); // Array to store selected files
  const [csvData, setCsvData] = useState([]); // Array to store CSV data
  const [error, setError] = useState('');
  const [selectedQuestionPaper, setSelectedQuestionPaper] = useState(''); // State to track selected question paper
  const fileInputRef = useRef(null); // Reference to file input element

  const questionPapers = [
    { id: 1, name: 'Math Paper 1' },
    { id: 2, name: 'Science Paper 1' },
    { id: 3, name: 'History Paper 1' },
  ];

  // Load saved state from localStorage (if any) on page load
  useEffect(() => {
    const savedQuestionPaper = localStorage.getItem('selectedQuestionPaper');
    const savedCsvData = localStorage.getItem('csvData');

    if (savedQuestionPaper) {
      setSelectedQuestionPaper(savedQuestionPaper);
    } else {
      setSelectedQuestionPaper(''); // Ensure dropdown starts with no selection
    }
    if (savedCsvData) setCsvData(JSON.parse(savedCsvData));
  }, []);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const csvFiles = selectedFiles.filter(file => file.type === 'text/csv');

    if (csvFiles.length > 0) {
      setFiles(csvFiles);
      setError('');

      const file = csvFiles[0];
      Papa.parse(file, {
        complete: (result) => {
          setCsvData(result.data);
          // Save CSV data to localStorage
          localStorage.setItem('csvData', JSON.stringify(result.data));
        },
        header: true,
      });
    } else {
      setFiles([]);
      setCsvData([]);
      setError('Only CSV files are allowed');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (files.length === 0 && !selectedQuestionPaper) {
      setError('No files or question paper selected');
      return;
    }
  
    // Clear state after submission (simulate upload logic)
    setFiles([]);
    setCsvData([]);
    setSelectedQuestionPaper('');  // Reset the dropdown selection
  
    // Clear file input field
    if (fileInputRef.current) {
      fileInputRef.current.value = '';  // Reset the file input element
    }
  
    // Clear localStorage after submission
    localStorage.removeItem('csvData');
    localStorage.removeItem('selectedQuestionPaper');
  };
  

  const handleQuestionPaperChange = async (e) => {
    const selectedPaper = e.target.value;
    setSelectedQuestionPaper(selectedPaper);
    
    // Save the selected question paper to localStorage
    localStorage.setItem('selectedQuestionPaper', selectedPaper);
  
    try {
      const response = await fetch(`/api/getCsv?paperName=${encodeURIComponent(selectedPaper)}`);
      const data = await response.json();
      setCsvData(data);
      // Save fetched CSV data to localStorage
      localStorage.setItem('csvData', JSON.stringify(data));
    } catch (error) {
      setError('Failed to fetch the CSV file');
    }
  };

  useEffect(() => {
    // Clear storage on component load (if desired)
    localStorage.removeItem('csvData');
    localStorage.removeItem('selectedQuestionPaper');
  }, []);
  

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Upload Examiner's Answers</h2>

      {/* Dropdown to select existing question paper */}
      <div className={styles.dropdownContainer}>
        <label htmlFor="questionPaperSelect">Select Question Paper:</label>
        <select
          id="questionPaperSelect"
          value={selectedQuestionPaper}
          onChange={handleQuestionPaperChange}
          className={styles.dropdown}
        >
          <option value="">Select a question paper</option>
          {questionPapers.map((paper) => (
            <option key={paper.id} value={paper.name}>
              {paper.name}
            </option>
          ))}
        </select>
      </div>




      {/* OR separator */}
      <div style={{ display: 'flex', alignItems: 'center', textAlign: 'center', margin: '20px 0' }}>
        <hr style={{ flexGrow: 1, border: '0.2px solid lightgrey' }} />
        <span style={{ margin: '0 10px' }}>OR</span>
        <hr style={{ flexGrow: 1, border: '0.2px solid lightgrey' }} />
      </div>




      {/* File upload section */}
      <p style={{ textAlign: 'left', fontSize: '18px' }}>Upload CSV Files</p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.fileInputContainer}>
          <label htmlFor="fileUpload" className={styles.fileLabel}>Choose CSV files</label>
          <input
            type="file"
            id="fileUpload"
            ref={fileInputRef} // Reference to the file input
            onChange={handleFileChange}
            accept=".csv"
            multiple
            className={styles.fileInput}
          />
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit" className={styles.button}>
            Upload
          </button>
        </div>
      </form>




      {/* CSV preview */}
      {csvData.length > 0 && (
        <div className={styles.csvPreview}>
          <h3>CSV File Preview:</h3>
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
      )}




      {/* Navigation buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link href="/student" style={{ textDecoration: 'none' }}>
          <button kind="secondary">Back</button>
        </Link>
        <Link href="/evaluate" style={{ textDecoration: 'none' }}>
          <button kind="secondary">Evaluate</button>
        </Link>
      </div>




    </div>
  );
}
