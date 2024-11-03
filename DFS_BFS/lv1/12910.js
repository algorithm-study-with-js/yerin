function solution(arr, div) {
  let ans = [];
  let sorted = arr.sort((a, b) => a - b);
  for (a of sorted) {
    if (a % div === 0) {
      ans.push(a);
    }
  }
  return ans.length == 0 ? [-1] : ans;
}
console.log(solution([5, 9, 7, 10], 5));
