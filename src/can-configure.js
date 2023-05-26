export const canConfigure = (from, to) => {
  if (from === undefined) throw new Error("from is required");
  if (typeof from !== "string") throw new Error("from is not a string");
  if (typeof to !== "string") throw new Error("to is not a string");

  const sameLength = from.length === to.length;
  if (!sameLength) return false;

  const hasUniqueLetters = new Set(from).size === new Set(to).size;
  if (!hasUniqueLetters) return false;

  const transformations = {};

  for (let i = 0; i < from.length; i++) {
    const fromLetter = from[i];
    const toLetter = to[i];

    const saveLetter = transformations[fromLetter];
    if (saveLetter && saveLetter !== toLetter) return false;

    transformations[fromLetter] = toLetter;
  }

  return true;
};
