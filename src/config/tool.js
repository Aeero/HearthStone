function randomRank(num) {
  let arr = ' '.repeat((num - 1)).split(' ');
  arr = arr.map((e, i) => {
    return i + 1;
  });

  arr.sort(() => {
    return Math.random() > 0.5 ? -1 : 1;
  });

  return arr;
}

function add() {
  return 1;
}

export { randomRank, add };
