function solution(abs, signs) {
  let sum = 0;
  for (let i = 0; i < abs.length; i++) {
    sum += signs[i] ? abs[i] : -abs[i];
  }
  return sum;
}

console.log(solution([4, 7, 12], [true, false, true]));
