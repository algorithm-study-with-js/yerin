function solution(n) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      arr.push(i);
    }
  }
  //   console.log(arr);
  const answer = arr.reduce((a, b) => {
    return a + b;
  }, 0);

  return answer;
}

console.log(solution(12));
