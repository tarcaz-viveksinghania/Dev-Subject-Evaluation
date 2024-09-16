import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  const uploadPath = path.join(process.cwd(), 'public', 'uploads');

  try {
    const files = await fs.readdir(uploadPath);
    const pdfFiles = files.filter(file => file.endsWith('.pdf')); // Only return PDF files
    return NextResponse.json({ files: pdfFiles });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to list uploaded files' }, { status: 500 });
  }
}
