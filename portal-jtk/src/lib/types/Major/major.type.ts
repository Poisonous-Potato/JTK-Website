import type { Section } from "../Section/section.type";
import type { Accreditation } from "./accreditation.type";

export type Major = {
  name: string;
  description: string;
  sections: Array<Section>;
  accreditation: Array<Accreditation>;
  slug: string;
  updatedAt: string;
};
