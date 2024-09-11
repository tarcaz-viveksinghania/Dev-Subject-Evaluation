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


'use client';
import { useState } from 'react';
import styles from './upload.module.css'; // Import the CSS module
import Link from 'next/link';

export default function UploadPage() {
  const [files, setFiles] = useState([]); // Array to store selected files
  const [fileURLs, setFileURLs] = useState([]); // Array to store URLs of uploaded files
  const [selectedFileIndex, setSelectedFileIndex] = useState(null); // Index of the selected file
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const pdfFiles = selectedFiles.filter(file => file.type === 'application/pdf');

    if (pdfFiles.length > 0) {
      setFiles(pdfFiles);
      setFileURLs(pdfFiles.map(file => URL.createObjectURL(file)));
      setSelectedFileIndex(0); // Set the default selected file to the first one
      setError('');
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (files.length === 0) {
      setError('No files selected');
      return;
    }

    const formData = new FormData();
    files.forEach(file => formData.append('answersheets', file)); // Append each file to FormData

    // Logic to upload the files (simulated here)
    console.log('Files to upload:', files);

    // Reset file input after submission
    setFiles([]);
    setFileURLs([]);
    setSelectedFileIndex(null);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Upload Examiner's Answers</h2>
      <p style={{ textAlign: 'left', fontSize: '18px' }}>Choose PDF Files</p>

      <form onSubmit={handleSubmit} className={styles.form}>
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
        </div>
        
        {error && <p className={styles.error}>{error}</p>}
        
        <button type="submit" className={styles.button}>
          Upload
        </button>
      </form>


      {files.length > 0 && (
        <div className={styles.dropdownContainer}>
          <label htmlFor="pdfSelect">Select a PDF to view:</label>
          <select id="pdfSelect" onChange={handleFileSelect} value={selectedFileIndex || ''}>
            <option value="" disabled>Select a PDF</option>
            {files.map((file, index) => (
              <option key={index} value={index}>
                {file.name}
              </option>
            ))}
          </select>
        </div>
      )}

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

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          
          <Link href="/student" style={{ textDecoration: 'none' }}>
            <button kind="secondary">Back</button>
          </Link>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <button kind="secondary">Evaluate</button>
          </Link>
          
        </div>

    </div>
  );
}
