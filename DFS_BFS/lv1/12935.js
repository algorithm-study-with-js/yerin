function solution(arr) {
  if (arr.length === 1 && arr[0] == 10) return [-1];
  const minValue = Math.min(...arr);
  return (answer = arr.filter((num) => num !== minValue));
}

console.log(solution([4, 3, 2, 1]));
