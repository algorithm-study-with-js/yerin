function solution(t, p) {
  let count = 0;
  const pLen = p.length;
  const pInt = parseInt(p, 10);

  for (let i = 0; i <= t.length - pLen; i++) {
    const stringPart = t.substring(i, i + pLen);
    if (parseInt(stringPart, 10) <= pInt) {
      count++;
    }
  }

  return count;
}

console.log(solution('3141592', '271'));
