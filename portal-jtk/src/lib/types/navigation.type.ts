export type Navigation = {
  name: string;
  links: Array<Link>;
  url?: string;
};

type Link = {
  name: string;
  url: string;
};
