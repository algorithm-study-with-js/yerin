// 오름차순으로 정렬을 마친 후 반복으로 빼주면서 최적 값 찾기
function solution(d, budget) {
  const list = d.sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < list.length; i++) {
    if (budget >= list[i]) {
      budget -= list[i];
      count++;
    } else {
      break;
    }
  }

  return count;
}

console.log(solution([1, 3, 2, 5, 4], 9));

//완전탐색으로 구하기
function solution(d, budget) {
  const dp = Array(budget + 1).fill(0);

  for (let cost of d) {
    for (let b = budget; b >= cost; b--) {
      dp[b] = Math.max(dp[b], dp[b - cost] + cost);
    }
  }

  return dp[budget];
}
