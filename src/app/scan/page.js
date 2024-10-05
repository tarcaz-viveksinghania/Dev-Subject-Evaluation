// 'use client';

// import { useRef, useState } from 'react';
// import jsPDF from 'jspdf';
// import styles from './capture.module.css ';

// export default function CapturePage() {
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);
//   const [imageCaptured, setImageCaptured] = useState(null);




//   const startCamera = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//       if (videoRef.current) {
//         videoRef.current.srcObject = stream;
//       }
//     } catch (err) {
//       console.error("Error accessing the camera", err);
//     }
//   };




//   const captureImage = () => {
//     const canvas = canvasRef.current;
//     const video = videoRef.current;
//     const context = canvas.getContext('2d');
//     context.drawImage(video, 0, 0, canvas.width, canvas.height);

//     const imageData = canvas.toDataURL('image/png');
//     setImageCaptured(imageData);
//   };




//   const generatePDF = () => {
//     if (imageCaptured) {
//       const pdf = new jsPDF();
//       pdf.addImage(imageCaptured, 'PNG', 10, 10, 180, 240); // Adjust as needed for A4 size
//       pdf.save('AnswerSheet.pdf');
//     }
//   };





//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>Capture Answer Sheet</h2>
//       <div>
//         <video ref={videoRef} autoPlay className={styles.video} />
//         <button onClick={startCamera} className={styles.button}>Start Camera</button>
//       </div>
//       <div>
//         <canvas ref={canvasRef} width="400" height="300" style={{ display: 'none' }}></canvas>
//         <button onClick={captureImage} className={styles.button}>Capture Image</button>
//       </div>
//       {imageCaptured && (
//         <div>
//           <img src={imageCaptured} alt="Captured Answer Sheet" className={styles.image} />
//           <button onClick={generatePDF} className={styles.button}>Download as PDF</button>
//         </div>
//       )}
//     </div>
//   );
// }

// ======================================================================================================


// 'use client';
// import styles from './capture.module.css';
// import { useRef, useState } from 'react';
// import jsPDF from 'jspdf';

// export default function CapturePage() {
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);
//   const [capturedImages, setCapturedImages] = useState([]); // Store multiple images

//   // Start camera
//   const startCamera = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//       if (videoRef.current) {
//         videoRef.current.srcObject = stream;
//       }
//     } catch (err) {
//       console.error('Error accessing the camera', err);
//     }
//   };

//   // Capture an image
//   const captureImage = () => {
//     const canvas = canvasRef.current;
//     const video = videoRef.current;
//     const context = canvas.getContext('2d');
//     context.drawImage(video, 0, 0, canvas.width, canvas.height);

//     const imageData = canvas.toDataURL('image/png');

//     // Add the new image to the capturedImages array
//     setCapturedImages((prevImages) => [...prevImages, imageData]);
//   };

//   // Generate a PDF from all captured images
//   const generatePDF = () => {
//     if (capturedImages.length > 0) {
//       const pdf = new jsPDF();
//       capturedImages.forEach((image, index) => {
//         if (index > 0) {
//           pdf.addPage(); // Add a new page for each image
//         }
//         pdf.addImage(image, 'PNG', 10, 10, 180, 240);
//       });
//       pdf.save('AnswerSheet.pdf');
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>Capture Answer Sheet</h2>
//       <div>
//         <video ref={videoRef} autoPlay className={styles.video} />
//         <button onClick={startCamera} className={styles.button}>Start Camera</button>
//       </div>
//       <div>
//         <canvas ref={canvasRef} width="400" height="300" style={{ display: 'none' }}></canvas>
//         <button onClick={captureImage} className={styles.button}>Capture Image</button>
//       </div>
//       {capturedImages.length > 0 && (
//         <div>
//           <h3>Captured Images:</h3>
//           <div className={styles.imageGrid}>
//             {capturedImages.map((image, index) => (
//               <img
//                 key={index}
//                 src={image}
//                 alt={`Captured Answer Sheet ${index + 1}`}
//                 className={styles.image}
//               />
//             ))}
//           </div>
//           <button onClick={generatePDF} className={styles.button}>Download as PDF</button>
//         </div>
//       )}
//     </div>
//   );
// }

// ================================================================================================


// 'use client';
// import styles from './capture.module.css';
// import { useRef, useState } from 'react';
// import jsPDF from 'jspdf';

// export default function CapturePage() {
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);
//   const [capturedImages, setCapturedImages] = useState([]); // Store multiple images

//   // Start camera
//   const startCamera = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//       if (videoRef.current) {
//         videoRef.current.srcObject = stream;
//       }
//     } catch (err) {
//       console.error('Error accessing the camera', err);
//     }
//   };

//   // Capture an image
//   const captureImage = () => {
//     const canvas = canvasRef.current;
//     const video = videoRef.current;
//     const context = canvas.getContext('2d');
//     context.drawImage(video, 0, 0, canvas.width, canvas.height);

//     const imageData = canvas.toDataURL('image/png');

//     // Add the new image to the capturedImages array
//     setCapturedImages((prevImages) => [...prevImages, imageData]);
//   };

//   // Generate a PDF from all captured images and store it in localStorage
//   const generatePDF = () => {
//     if (capturedImages.length > 0) {
//       const pdf = new jsPDF();
//       capturedImages.forEach((image, index) => {
//         if (index > 0) {
//           pdf.addPage(); // Add a new page for each image
//         }
//         pdf.addImage(image, 'PNG', 10, 10, 180, 240);
//       });

//       // Generate the PDF as a Blob and create a URL
//       const pdfBlob = pdf.output('blob');
//       const pdfURL = URL.createObjectURL(pdfBlob);

//       // Save the PDF URL in localStorage
//       const storedPDFs = JSON.parse(localStorage.getItem('uploadedPDFs')) || [];
//       storedPDFs.push(pdfURL);
//       localStorage.setItem('uploadedPDFs', JSON.stringify(storedPDFs));

//       // Optionally, trigger download
//       pdf.save('AnswerSheet.pdf');
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>Capture Answer Sheet</h2>
//       <div>
//         <video ref={videoRef} autoPlay className={styles.video} />
//         <button onClick={startCamera} className={styles.button}>Start Camera</button>
//       </div>
//       <div>
//         <canvas ref={canvasRef} width="400" height="300" style={{ display: 'none' }}></canvas>
//         <button onClick={captureImage} className={styles.button}>Capture Image</button>
//       </div>
//       {capturedImages.length > 0 && (
//         <div>
//           <h3>Captured Images:</h3>
//           <div className={styles.imageGrid}>
//             {capturedImages.map((image, index) => (
//               <img
//                 key={index}
//                 src={image}
//                 alt={`Captured Answer Sheet ${index + 1}`}
//                 className={styles.image}
//               />
//             ))}
//           </div>
//           <button onClick={generatePDF} className={styles.button}>Download as PDF</button>
//         </div>
//       )}
//     </div>
//   );
// }


// ================================================================================================

'use client';
import styles from './capture.module.css';
import { useRef, useState } from 'react';
import jsPDF from 'jspdf';
import Link from 'next/link';

export default function CapturePage() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [capturedImages, setCapturedImages] = useState([]); // Store multiple images

  // Start camera
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error('Error accessing the camera', err);
    }
  };

  // Capture an image
  const captureImage = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageData = canvas.toDataURL('image/png');

    // Add the new image to the capturedImages array
    setCapturedImages((prevImages) => [...prevImages, imageData]);
  };

  // Generate a PDF from all captured images and store it in localStorage
  const generatePDF = () => {
    if (capturedImages.length > 0) {
      const pdf = new jsPDF();
      capturedImages.forEach((image, index) => {
        if (index > 0) {
          pdf.addPage(); // Add a new page for each image
        }
        pdf.addImage(image, 'PNG', 10, 10, 180, 240);
      });

      // Generate the PDF as a Blob and create a URL
      const pdfBlob = pdf.output('blob');
      const pdfURL = URL.createObjectURL(pdfBlob);

      // Save the PDF URL in localStorage
      const storedPDFs = JSON.parse(localStorage.getItem('uploadedPDFs')) || [];
      storedPDFs.push(pdfURL);
      localStorage.setItem('uploadedPDFs', JSON.stringify(storedPDFs));

      // Optionally, trigger download
      pdf.save('AnswerSheet.pdf');
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Capture Answer Sheet</h2>
      <div>
        <video ref={videoRef} autoPlay className={styles.video} />
        <button onClick={startCamera} className={styles.button}>Start Camera</button>
      </div>
      <div>
        <canvas ref={canvasRef} width="400" height="300" style={{ display: 'none' }}></canvas>
        <button onClick={captureImage} className={styles.button}>Capture Image</button>
      </div>
      {capturedImages.length > 0 && (
        <div>
          <h3>Captured Images:</h3>
          <div className={styles.imageGrid}>
            {capturedImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Captured Answer Sheet ${index + 1}`}
                className={styles.image}
              />
            ))}
          </div>
          <button onClick={generatePDF} className={styles.button}>Download as PDF</button>
        </div>
      )}

      {/* Navigation buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link href="/student" style={{ textDecoration: 'none' }}>
          <button kind="secondary">Go Back</button>
        </Link>
        <Link href="/examiner" style={{ textDecoration: 'none' }}>
          <button kind="secondary">Next</button>
        </Link>
      </div>


    </div>
  );
}
