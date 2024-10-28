function solution(s) {
  const trim = s.trim('');
  let count = 0;

  if (!trim.charAt(0) == '(' || !trim.charAt(trim.length - 1) == ')')
    return false;
  for (let i of s) {
    if (i == '(') {
      count++;
    } else if (i === ')') {
      count--;
    }
    if (count < 0) return false;
  }
  return count === 0;
}

console.log(solution('     ()) '));
console.log(solution(' )( '));
