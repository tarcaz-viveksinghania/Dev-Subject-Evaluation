import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const paperName = searchParams.get('paperName');

  try {
    const filePath = path.join(process.cwd(), 'database', `${paperName}.csv`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // Parse CSV content using PapaParse
    const parsedData = Papa.parse(fileContent, {
      header: true, // Assuming CSV has headers
    });

    return NextResponse.json(parsedData.data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load the CSV file' }, { status: 500 });
  }
}
