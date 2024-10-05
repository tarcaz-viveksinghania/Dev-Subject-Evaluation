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
// import styles from './upload.module.css'; // Import the CSS module
// import Link from 'next/link';

// export default function UploadPage() {
//   const [files, setFiles] = useState([]); // Array to store selected files
//   const [fileURLs, setFileURLs] = useState([]); // Array to store URLs of uploaded files
//   const [selectedFileIndex, setSelectedFileIndex] = useState(null); // Index of the selected file
//   const [error, setError] = useState('');

//   // Handle file input change
//   const handleFileChange = (e) => {
//     const selectedFiles = Array.from(e.target.files);
//     const pdfFiles = selectedFiles.filter(file => file.type === 'application/pdf');

//     if (pdfFiles.length > 0) {
//       setFiles(pdfFiles); // Set the selected files to state
//       setFileURLs(pdfFiles.map(file => URL.createObjectURL(file))); // Create URLs for preview
//       setSelectedFileIndex(0); // Set default selected file to first
//       setError('');
//     } else {
//       setFiles([]);
//       setFileURLs([]);
//       setSelectedFileIndex(null);
//       setError('Only PDF files are allowed');
//     }
//   };

//   // Handle PDF selection from dropdown
//   const handleFileSelect = (e) => {
//     setSelectedFileIndex(parseInt(e.target.value, 10)); // Update the selected file index
//   };

//   // Handle file upload
//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   if (files.length === 0) {
//   //     setError('No files selected');
//   //     return;
//   //   }

//   //   // Normally, here you would submit the form data to a server
//   //   const formData = new FormData();
//   //   files.forEach(file => formData.append('answersheets', file)); // Append each file to FormData

//   //   // Simulated logic to upload the files
//   //   console.log('Files to upload:', files);

//   //   // No need to reset the state here, we want to retain the uploaded files
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     if (files.length === 0) {
//       setError('No files selected');
//       return;
//     }
  
//     const formData = new FormData();
//     files.forEach(file => formData.append('answersheets', file));
  
//     try {
//       const res = await fetch('/api/upload', {
//         method: 'POST',
//         body: formData,
//       });
  
//       if (res.ok) {
//         const result = await res.json();
//         console.log(result.message); // Show success message
//         setError(''); // Clear any previous errors
//       } else {
//         const errorResult = await res.json();
//         setError(errorResult.message || 'Error uploading files');
//       }
//     } catch (err) {
//       setError('Error uploading files');
//     }
//   };
  
  

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>Upload Student's Answers</h2>
//       <p style={{ textAlign: 'left', fontSize: '18px' }}>Choose PDF Files</p>

//       {/* File upload form */}
//       <form onSubmit={handleSubmit} className={styles.form}>
//         <div className={styles.fileInputContainer}>
//           <label htmlFor="fileUpload" className={styles.fileLabel}>Choose PDF files</label>
//           <input
//             type="file"
//             id="fileUpload"
//             onChange={handleFileChange}
//             accept=".pdf"
//             multiple
//             className={styles.fileInput}
//           />
//           {error && <p className={styles.error}>{error}</p>}

//           <button type="submit" className={styles.button}>
//             Upload
//           </button>
//         </div>
//       </form>

//       {/* Dropdown to select uploaded PDF */}
//       {files.length > 0 && (
//         <div className={styles.dropdownContainer}>
//           <label htmlFor="pdfSelect">Select a PDF to view:</label>
//           <select id="pdfSelect" onChange={handleFileSelect} value={selectedFileIndex || ''}>
//             {selectedFileIndex === null && <option value="" disabled>Select a PDF</option>}
//             {files.map((file, index) => (
//               <option key={index} value={index}>
//                 {file.name}
//               </option>
//             ))}
//           </select>
//         </div>
//       )}

//       {/* PDF Viewer */}
//       {selectedFileIndex !== null && fileURLs[selectedFileIndex] && (
//         <div className={styles.pdfViewer}>
//           <h3>Preview of the selected PDF:</h3>
//           <iframe
//             src={fileURLs[selectedFileIndex]}
//             width="100%"
//             height="500px"
//             className={styles.pdfFrame}
//           />
//         </div>
//       )}

//       {/* Navigation buttons */}
//       <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//         <Link href="/" style={{ textDecoration: 'none' }}>
//           <button kind="secondary">Go Home</button>
//         </Link>
//         <Link href="/examiner" style={{ textDecoration: 'none' }}>
//           <button kind="secondary">Next</button>
//         </Link>
//       </div>
//     </div>
//   );
// }





'use client';
import { useState } from 'react';
import styles from './upload.module.css';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UploadPage() {
  const [files, setFiles] = useState([]);
  const [fileURLs, setFileURLs] = useState([]);
  const [selectedFileIndex, setSelectedFileIndex] = useState(null);
  const [error, setError] = useState('');






  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const pdfFiles = selectedFiles.filter(file => file.type === 'application/pdf');

    if (pdfFiles.length > 0) {
      setFiles(pdfFiles);
      const urls = pdfFiles.map(file => URL.createObjectURL(file));
      setFileURLs(urls);
      setSelectedFileIndex(0);
      setError('');
      
      // Store file URLs in localStorage
      localStorage.setItem('uploadedPDFs', JSON.stringify(urls));
    } else {
      setFiles([]);
      setFileURLs([]);
      setSelectedFileIndex(null);
      setError('Only PDF files are allowed');
    }
  };





  const handleFileSelect = (e) => {
    setSelectedFileIndex(parseInt(e.target.value, 10));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Upload Student's Answers</h2>
      <p style={{ textAlign: 'left', fontSize: '18px' }}>Choose PDF Files</p>

      <div className={styles.fileInputContainer}>
        <label htmlFor="fileUpload" className={styles.fileLabel}>Choose PDF files</label>
        <input
          type="file"
          id="fileUpload"
          onChange={handleFileChange}
          accept=".pdf"
          multiple
          className={styles.fileInput}
        />
        {error && <p className={styles.error}>{error}</p>}
      </div>






      {/* OR separator */}
      <div style={{ display: 'flex', alignItems: 'center', textAlign: 'center', margin: '20px 0' }}>
        <hr style={{ flexGrow: 1, border: '0.2px solid lightgrey' }} />
        <span style={{ margin: '0 10px' }}>OR</span>
        <hr style={{ flexGrow: 1, border: '0.2px solid lightgrey' }} />
      </div>




      {/* Capture PDF */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link href="/scan" >
          <button className={styles.bluebutton}>Scan</button>
        </Link>
      </div>









      {/* Dropdown to select uploaded PDF */}
      {files.length > 0 && (
        <div className={styles.dropdownContainer}>
          <label htmlFor="pdfSelect">Select a PDF to view:</label>
          <select id="pdfSelect" onChange={handleFileSelect} value={selectedFileIndex || ''}>
            {selectedFileIndex === null && <option value="" disabled>Select a PDF</option>}
            {files.map((file, index) => (
              <option key={index} value={index}>
                {file.name}
              </option>
            ))}
          </select>
        </div>
      )}





      {/* PDF Preview */}
      {selectedFileIndex !== null && fileURLs[selectedFileIndex] && (
        <div className={styles.pdfViewer}>
          <h3>Preview of the selected PDF:</h3>
          <iframe
            src={fileURLs[selectedFileIndex]}
            width="100%"
            height="500px"
            className={styles.pdfFrame}
          />
        </div>
      )}





      {/* Navigation buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link href="/home" style={{ textDecoration: 'none' }}>
          <button kind="secondary">Go Home</button>
        </Link>
        <Link href="/examiner" style={{ textDecoration: 'none' }}>
          <button kind="secondary">Next</button>
        </Link>
      </div>


      
    </div>
  );
}
