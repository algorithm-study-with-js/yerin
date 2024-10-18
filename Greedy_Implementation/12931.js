function solution(n) {
  const array = Array.from(String(n), (n) => Number(n));
  let answer = 0;

  array.forEach((m) => {
    answer += m;
  });

  return answer;
}

console.log(solution(123));
