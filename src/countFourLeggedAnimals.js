function countFourLeggedAnimals(animals) {
  const fourLeggedAnimals = new Set([
    'lion',
    'deer',
    'elephant',
    'horse',
    'dog',
    'cat'
  ]);

  let count = 0;

  for (const animal of animals) {
    if (fourLeggedAnimals.has(animal)) {
      count++;
    }
  }

  return count;
}

module.exports = countFourLeggedAnimals;
