import { Award } from "./Award";

export interface College {
  name: string;
  graduation: string;
  major: string;
  concentrations: string[];
  minor: string;
  honors: string;
  awards: Award[];
}
