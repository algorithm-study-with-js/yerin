function solution(n) {
  if (n === 0) return '0';
  let result = '';
  while (n > 0) {
    result = (n % 3) + result;
    n = Math.floor(n / 3);
  }
  let reversedBase3 = result.split('').reverse().join('');

  let answer = 0;
  for (let i = 0; i < reversedBase3.length; i++) {
    answer +=
      parseInt(reversedBase3[i]) * Math.pow(3, reversedBase3.length - 1 - i);
  }

  return answer;
}

console.log(solution(45));
