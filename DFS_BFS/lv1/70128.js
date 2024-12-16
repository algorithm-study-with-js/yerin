function solution(a, b) {
  let answer = [];
  for (let i = 0; i < a.length; i++) {
    answer.push(a[i] * b[i]);
  }
  return answer.reduce((acc, sum) => (sum += acc), 0);
}

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));

//왜 이 아래 풀이를 생각을 못 해냈지;;
function solution(a, b) {
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}
