function solution(n) {
  let ans = 0;
  while (n > 1) {
    if (n % 2 == 0) {
      n = n / 2;
      ans += 1;
    } else {
      n = n * 3 + 1;
      ans += 1;
    }
  }
  return ans >= 500 ? -1 : ans;
}

console.log(solution(626331));
