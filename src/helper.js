export const translateDifficultyToNumber = (difficulty) => {
  let difficultyLevels = {
    easy: [1, 2, 3],
    med: [4, 5, 6],
    hard: [7, 8, 9, 10]
  };
  const arrToUse = difficultyLevels[difficulty];
  return getARandomIdx(arrToUse);
}

export const getARandomIdx = (arr) => {
  const randomIdx = Math.floor(Math.random() * arr.length);
  return arr[randomIdx];
}
