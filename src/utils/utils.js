export const calculateTotalScore = (scores, data, revMapping) => {
  let total_score = 0;
  let max_score = 0;
  const goodCats = {};
  const badCats = {};

  scores.forEach(score => {
    if (data[revMapping[score.category]]) {
      total_score += Number(score.score);
      max_score += 10;
      if (score.score > 7) {
        goodCats[revMapping[score.category]] = score.score;
      }
    }
    if (
      score.score < 3 &&
      score.category !== 'smallScore' &&
      score.category !== 'medScore' &&
      score.category !== 'largeScore' &&
      revMapping[score.category] !== undefined
    ) {
      badCats[revMapping[score.category]] = score.score;
    }
  });

  return { total_score, max_score, goodCats, badCats };
};
