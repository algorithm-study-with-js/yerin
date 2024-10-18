function solution(s) {
  let arr = s.split(' ');
  arr = arr.map((n) => Number(n));

  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      console.log('min', min);
    }
    if (arr[i] > max) {
      max = arr[i];
      console.log('max', max);
    }
  }
  return String(min) + ' ' + String(max);
}

console.log(solution('-1 -2 -3 -4'));

// Math Min, Max로도 해결 가능 => 문자열도 인식 한다고함ㅎ,,, 왜 이런 고생 했을까
