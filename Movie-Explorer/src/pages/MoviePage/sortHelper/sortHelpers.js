export const sortAlphabeticallyAsc = (array) => {
  return array.sort((a, b) => a.name.localeCompare(b.name));
};

export const sortAlphabeticallyDesc = (array) => {
  return array.sort((a, b) => b.name.localeCompare(a.name));
};

export const sortByYear = (array) => {
  return array.sort((a, b) => a.year - b.year);
};

export const sortByRating = (array) => {
  return array.sort((a, b) => b.rating - a.rating);
};
