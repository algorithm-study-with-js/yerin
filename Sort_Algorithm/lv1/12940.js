function solution(n, m) {
  //유클리드 호제법: 나머지가 0이 될 때 까지 나누기
  function gcd(n, m) {
    while (m !== 0) {
      const temp = m;
      m = n % m;
      n = temp;
    }
    return n;
  }
//최소 공배수 구하는 공식
  function lcm(n, m) {
    return (n * m) / gcd(n, m);
  }

  return [gcd(n, m), lcm(n, m)];
}

console.log(solution(3, 12));
