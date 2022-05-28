import caller from "../config";

import type { Navigation } from "../../../types/Navigation/navigation.type";
import type { Link } from "../../../types/Navigation/link.type";

const getFooter = async () => {
  try {
    const url: string = "/navigations?populate=*";
    const raw: any = await caller.get(url);

    let result: Array<Navigation> = [];

    raw.data.data.forEach((navigation: any) => {
      let links: Array<Link> = navigation.attributes.links.map((link: any) => {
        return {
          name: link.name,
          url: link.url,
        };
      });

      result.push({
        name: navigation.attributes.name,
        links: links,
      });
    });

    return result;
  } catch (err: any) {
    console.error(err);
  }
};

export default getFooter;
