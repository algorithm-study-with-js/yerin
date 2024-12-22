function solution(s) {
  s = String(s);

  if (s.length !== 6 && s.length !== 4) return false;
  return s.split('').every((char) => !isNaN(Number(char)));
}

console.log(solution(1234));

//굳이 array로 파싱 안하고 풀 수 있음
function alpha_string46(s) {
  return s.length == 4 || s.length == 6 ? !isNaN(s) : false;
}
