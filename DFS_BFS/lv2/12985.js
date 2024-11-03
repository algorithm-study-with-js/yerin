function solution(n, a, b) {
  let round = 0;

  if (a % 2 == 0) {
    if (b == a - 1) return 1;
  }

  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    round += 1;
  }

  return round;
}

console.log(solution(8, 4, 7));
