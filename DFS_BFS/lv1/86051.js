function solution(numbers) {
  let totallToTen = 0;
  for (let i = 1; i < 10; i++) {
    totallToTen += i;
  }
  const totalnum = numbers.reduce((sum, num) => sum + num, 0);
  return totallToTen - totalnum;
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));

//아래 풀이가 더 좋아보이는듯 함
function solution(numbers) {
  let cnt = 0;
  for (let i = 0; i < 10; i++) {
    if (!numbers.includes(i)) cnt += i;
  }
  return cnt;
}
