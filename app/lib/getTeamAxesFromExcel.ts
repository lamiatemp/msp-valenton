import * as XLSX from "xlsx";
import path from "path";
import fs from "fs";
import { Axe, SubAxe } from "../components/teamAxesData";

export function getTeamAxesFromExcel(): Axe[] {
  const filePath = path.join(process.cwd(), "public", "Inputs.xlsx");
  const workbook = XLSX.read(fs.readFileSync(filePath), { type: "buffer" });
  const sheet = workbook.Sheets["team"];
  if (!sheet) return [];
  const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
  // First row is header: [axeId, axeTitle, axeDescription, axeIcon, subAxeId, subAxeTitle, subAxePhoto, subAxePhone]
  const axesMap = new Map<string, Axe>();

  data.slice(1).forEach((row: any) => {
    const axeId = row[0];
    if (!axeId) return;
    if (!axesMap.has(axeId)) {
      axesMap.set(axeId, {
        id: axeId,
        title: row[1] || "",
        description: row[2] || "",
        icon: row[3] || "",
        subAxes: [],
      });
    }
    if (row[4]) {
      const subAxe: SubAxe = {
        id: row[4],
        title: row[5] || "",
        description: row[6] || "",
        photo: row[7] || undefined,
        link: row[8] || undefined,
      };
      axesMap.get(axeId)!.subAxes.push(subAxe);
    }
  });
  return Array.from(axesMap.values());
}
