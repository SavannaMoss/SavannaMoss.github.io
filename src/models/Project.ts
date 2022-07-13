import { Link } from "./Link";

export interface Project {
  name: string;
  semester: string;
  description: string;
  link?: Link;
}
