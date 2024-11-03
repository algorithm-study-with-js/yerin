function solution(s) {
  let converted = '';
  for (let i = 0; i < s.length - 4; i++) {
    converted += '*';
  }
  return (converted += s.slice(-4));
}

console.log(solution('027778888'));
