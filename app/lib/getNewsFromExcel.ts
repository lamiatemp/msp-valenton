import * as XLSX from "xlsx";
import path from "path";
import fs from "fs";

export function getNewsFromExcel() {
  const filePath = path.join(process.cwd(), "public", "Inputs.xlsx");
  const workbook = XLSX.read(fs.readFileSync(filePath), { type: "buffer" });
  const sheet = workbook.Sheets["pdf"];
  if (!sheet) return [];
  const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
  // First row is header: [File, Title, Subtitle]
  return data.slice(1).map((row: any) => ({
    file: row[0] || "",
    title: row[1] || "",
    subtitle: row[2] || "",
    image: row[3] || "",
  }));
}
