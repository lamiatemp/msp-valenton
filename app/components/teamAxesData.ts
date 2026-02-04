export interface SubAxe {
  description: any;
  id: string;
  title: string;
  photo?: string;
  phone?: string;
  link?: string;
}

export interface Axe {
  id: number;
  title: string;
  description: string;
  icon: string; // path to SVG
  subAxes: SubAxe[];
}

import { getTeamAxesFromExcel } from "../lib/getTeamAxesFromExcel";

export function getTeamAxes(): Axe[] {
  return getTeamAxesFromExcel();
}
