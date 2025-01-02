function fillZero(n, s) {
  const length = n - s.length;
  const padding = '0'.repeat(length);

  return padding + s;
}

function solution(n, arr1, arr2) {
  const binary1 = arr1.map((i) => fillZero(n, i.toString(2)));
  const binary2 = arr2.map((i) => fillZero(n, i.toString(2)));

  let answer = [];

  for (let i = 0; i < n; i++) {
    answer[i] = [];
    for (let j = 0; j < n; j++) {
      answer[i][j] = binary1[i][j] == '1' || binary2[i][j] == '1' ? '#' : ' ';
    }
  }
  return answer.map((i) => i.join(''));
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
