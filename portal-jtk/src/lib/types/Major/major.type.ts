import type { Section } from "../Section/section.type";

export type Major = {
  name: string;
  description: string;
  sections: Array<Section>;
  accreditation: string;
  slug: string;
  updatedAt: string;
};
