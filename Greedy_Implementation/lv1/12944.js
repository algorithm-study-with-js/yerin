function solution(arr) {
  let sum = 0;

  for (n of arr) {
    sum += n;
  }

  return sum / arr.length;
}

console.log(solution([1, 2, 3]));

// 콜백함수로 풀어보기
function solution(arr) {
  const sum = arr.reduce((a, b) => {
    return a + b;
  }, 0);
  return sum / arr.length;
}

console.log(solution([1, 2, 3]));
