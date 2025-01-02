function solution(s) {
  const NUMTOENG = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
  };
  Object.keys(NUMTOENG).forEach((word) => {
    const num = NUMTOENG[word];

    while (s.includes(word)) {
      s = s.replace(word, num);
    }
  });

  return Number(s);
}

console.log(solution('one4seveneight'));
