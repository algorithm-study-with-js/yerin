function solution(n) {
  let answer = '';
  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) answer += '수';
    if (i % 2 == 1) answer += '박';
  }
  return answer;
}

console.log(solution(3));

//아래 풀이가 더 좋아 보인다
function solution(n) {
  return '수박'.repeat(n / 2) + (n % 2 === 1 ? '수' : '');
}
