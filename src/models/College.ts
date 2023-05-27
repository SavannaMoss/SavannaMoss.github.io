import { Award } from "./Award";

export interface College {
  name: string;
  graduation: string;
  degree: string;
  honors: string;
  major: string;
  concentrations: string[];
  minor: string;
  awards: Award[];
}
