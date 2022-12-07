const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const checkLineLength = (string, maxLength) => string.length <= maxLength;

getRandomPositiveInteger(-1000, 0);
checkLineLength('qwertyui', 2);
export {getRandomPositiveInteger};
