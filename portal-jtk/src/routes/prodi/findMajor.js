import majors from "../../lib/data/examples/Major/major";

function findMajor(slug) {
  let idx = -1;
  let i = 0;

  while (idx == -1 && i < majors.length) {
    if (majors[i].slug == slug)
      idx = i;
    else
      i++;
  }

  if (idx == -1)
    return null;
  else
    return majors[idx];
}

export default findMajor;
