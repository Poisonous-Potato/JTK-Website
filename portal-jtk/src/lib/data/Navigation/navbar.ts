import type { Navigation } from "../../types/Navigation/navigation.type";
import type { Link } from "../../types/Navigation/link.type";
import type { Major } from "../../types/Major/brief.type";

import majors from "../examples/Major/brief";

const majorLink: Array<Link> = majors.map((major: Major) => {
  return {
    name: major.name,
    url: "/prodi/" + major.slug,
  };
});

const navbar: Array<Navigation> = [
  {
    name: "Program Studi",
    links: majorLink,
  },
  {
    name: "Prestasi",
    links: [
      { name: "Akademik", url: "/" },
      { name: "Non-Akademik", url: "/" },
    ],
  },
  {
    name: "Galeri",
    url: "/",
    links: [],
  },
  {
    name: "Staff",
    links: [
      { name: "Dosen", url: "/" },
      { name: "Tata Usaha", url: "/" },
    ],
  },
];

export default navbar;
