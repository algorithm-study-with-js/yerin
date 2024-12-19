function solution(arr1, arr2) {
  return arr1.map((row, i) => row.map((int, j) => int + arr2[i][j]));
}
console.log(
  solution(
    [
      [1, 2],
      [2, 3]
    ],
    [
      [3, 4],
      [5, 6]
    ]
  )
);
