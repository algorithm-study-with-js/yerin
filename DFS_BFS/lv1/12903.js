function solution(s) {
  if (s.length % 2 == 1) return s[Math.floor(s.length / 2)];
  if (s.length % 2 == 0) return s[s.length / 2 - 1] + s[s.length / 2];
}

console.log(solution('abde'));

//처음 알게 된 개념: substr
function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
