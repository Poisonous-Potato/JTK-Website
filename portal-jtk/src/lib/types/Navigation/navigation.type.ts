import type { Link } from "./link.type";

export type Navigation = {
  name: string;
  links: Array<Link>;
  url?: string;
};
