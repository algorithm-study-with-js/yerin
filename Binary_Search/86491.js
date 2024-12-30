function solution(sizes) {
  let maxWidth = 0;
  let maxHeight = 0;

  for (let size of sizes) {
    size.sort((a, b) => a - b);
    maxWidth = Math.max(maxWidth, size[0]);
    maxHeight = Math.max(maxHeight, size[1]);
  }

  return maxWidth * maxHeight;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40]
  ])
);
