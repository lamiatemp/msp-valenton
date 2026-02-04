
import * as XLSX from 'xlsx';
import path from 'path';
import fs from 'fs';

export interface AboutData {
	title: string;
	description: string;
	info: string;
}

export function getAboutData(): AboutData {
	// Path to the Excel file in the public folder
	const filePath = path.join(process.cwd(), 'public', 'Inputs.xlsx');
	const workbook = XLSX.read(fs.readFileSync(filePath), { type: 'buffer' });
	const sheet = workbook.Sheets['about'];
	if (!sheet) throw new Error('Sheet "about" not found');
	const data = XLSX.utils.sheet_to_json(sheet, { header: 1 }) as any[][];
	// Find the column indices for 'Title' and 'Description'
	const header = data[0] as string[];
	const titleIdx = header.findIndex(h => h.toLowerCase() === 'title');
	const descIdx = header.findIndex(h => h.toLowerCase() === 'description');
	// Use the first data row after the header
	const row = data[1] || [];
	const rawTitle = titleIdx !== -1 ? row[titleIdx] || '' : '';
	let rawDescription = descIdx !== -1 ? row[descIdx] || '' : '';
	const infoIdx = header.findIndex(h => h.toLowerCase() === 'info');
	let rawInfo = infoIdx !== -1 ? row[infoIdx] || '' : '';
	// Replace newlines with <br /> and bullets with HTML entities for web display
	rawDescription = rawDescription
		.replace(/\r?\n/g, '<br />')
		.replace(/•/g, '&#8226;');
	rawInfo = rawInfo.replace(/\r?\n/g, '<br />').replace(/•/g, '&#8226;');
	return {
		title: rawTitle,
		description: rawDescription,
		info: rawInfo,
	};
}
