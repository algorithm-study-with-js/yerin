function solution(s) {
  return s
    .split(' ')
    .map((word) =>
      word
        .split('')
        .map((n, index) =>
          index % 2 === 0 ? n.toUpperCase() : n.toLowerCase()
        )
        .join('')
    )
    .join(' ');
}

console.log(solution('try hello world'));
