export const isPangram = (str) => {
  const string = str.toLowerCase();
  if (string == "" || string.length < 26) {
    return false;
  }

  const alp = [..."abcdefghijklmnopqrstuvwxyz"];

  for (let i = 0; i < alp.length; i++) {
    if (string.includes(alp[i]) == false) return false;
  }
  return true;
};
