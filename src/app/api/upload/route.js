import { IncomingForm } from 'formidable';
import path from 'path';
import fs from 'fs/promises';

export const config = {
  api: {
    bodyParser: false, // Disable default bodyParser to handle `multipart/form-data`
  },
};

export async function POST(req) {
  return new Promise((resolve, reject) => {
    const form = new IncomingForm({
      uploadDir: path.join(process.cwd(), 'uploads'),
      keepExtensions: true, // Retain file extension
    });

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error('Formidable parse error:', err);
        reject(new Response(JSON.stringify({ message: 'Error parsing the files' }), { status: 500 }));
      }

      const file = files.answersheets;

      if (!file) {
        resolve(new Response(JSON.stringify({ message: 'No file uploaded' }), { status: 400 }));
      }

      // Ensure it's a PDF
      if (file.mimetype !== 'application/pdf') {
        resolve(new Response(JSON.stringify({ message: 'Only PDF files are allowed' }), { status: 400 }));
      }

      // Move the file to the uploads directory
      const filePath = path.join(process.cwd(), 'uploads', file.newFilename);

      try {
        await fs.rename(file.filepath, filePath); // Move the file from temp location to final destination
        resolve(new Response(JSON.stringify({ message: 'File uploaded successfully' }), { status: 200 }));
      } catch (error) {
        console.error('Error moving file:', error);
        reject(new Response(JSON.stringify({ message: 'Error uploading file' }), { status: 500 }));
      }
    });
  });
}
