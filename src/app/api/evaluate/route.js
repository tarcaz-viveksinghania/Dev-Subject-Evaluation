import { NextResponse } from 'next/server';

export async function POST(request) {
  // Parse the form data from the request
  const formData = await request.formData();
  const csvFile = formData.get('csv_file');
  const pdfFile = formData.get('pdf_file');

  // Optionally log or process the files
  console.log('Received CSV file:', csvFile);
  console.log('Received PDF file:', pdfFile);

  // Perform your logic here, like sending a request to your FastAPI server
  const response = await fetch('http://localhost:8000/process', {
    method: 'POST',
    body: formData,
  });

  const result = await response.json();

  // Return the result as a JSON response
  return NextResponse.json(result);
}
