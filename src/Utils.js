function getCountByCategory(notes, category) {
  // debugger;
  return notes.reduce((total, current) => {
    if (current.category === category) {
      ++total;
    }
    return total;
  }, 0);
}

export { getCountByCategory };
