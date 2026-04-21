import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  const data = await request.json();
  const filePath = path.join(process.cwd(), "data", "satisfaction_responses.json");

  // Ensure the data directory exists
  fs.mkdirSync(path.dirname(filePath), { recursive: true });

  let responses = [];
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    try {
      responses = JSON.parse(fileContent);
    } catch {
      responses = [];
    }
  }
  responses.push({ ...data, date: new Date().toISOString() });
  fs.writeFileSync(filePath, JSON.stringify(responses, null, 2));

  return NextResponse.json({ success: true });
}
