import type { Partner } from "../../../types/Partner/partner.type";

import google from "../../../../assets/landing-page/partner-logo/google.png";
import microsoft from "../../../../assets/landing-page/partner-logo/microsoft.png";
import oracle from "../../../../assets/landing-page/partner-logo/oracle.png";
import tokopedia from "../../../../assets/landing-page/partner-logo/tokopedia.png";
import riot from "../../../../assets/landing-page/partner-logo/riot.png";
import nvidia from "../../../../assets/landing-page/partner-logo/nvidia.png";

const partners: Array<Partner> = [
  {
    name: "Google",
    web: "https://about.google/",
    logo: google,
  },
  {
    name: "Microsoft",
    web: "https://www.microsoft.com/en-us/about/company",
    logo: microsoft,
  },
  {
    name: "Oracle",
    web: "https://www.oracle.com/index.html",
    logo: oracle,
  },
  {
    name: "Tokopedia",
    web: "https://www.tokopedia.com/about/?lang=en",
    logo: tokopedia,
  },
  {
    name: "Riot Games",
    web: "https://www.riotgames.com/en",
    logo: riot,
  },
  {
    name: "Nvidia",
    web: "https://www.nvidia.com/en-us/about-nvidia/",
    logo: nvidia,
  },
];

export default partners;
