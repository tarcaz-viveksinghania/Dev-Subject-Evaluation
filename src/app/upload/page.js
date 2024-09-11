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

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState(null); // State to store the URL of the uploaded file
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.type === 'application/pdf') {
        setFile(selectedFile);
        setFileURL(URL.createObjectURL(selectedFile)); // Create a URL to display the file
        setError('');
      } else {
        setFile(null);
        setFileURL(null);
        setError('Only PDF files are allowed');
      }
    } else {
      setError('Please select a file to upload');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('answersheet', file);

    // Logic to upload the file (simulated here)
    console.log('File to upload:', file);

    // Reset file input after submission
    setFile(null);
    setFileURL(null);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Upload Student's Answers</h2>
      
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} accept=".pdf" />
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit" className={styles.button}>
          Upload
        </button>
      </form>

      {file && (
        <div className={styles.selectedFile}>
          <h3>Selected file:</h3>
          <p>{file.name}</p>
        </div>
      )}

      {fileURL && (
        <div className={styles.pdfViewer}>
          <h3>Preview of the uploaded PDF:</h3>
          {/* Display the PDF file using iframe */}
          <iframe
            src={fileURL}
            width="100%"
            height="500px"
            className={styles.pdfFrame}
          />
        </div>
      )}
    
    </div>
  );
}



