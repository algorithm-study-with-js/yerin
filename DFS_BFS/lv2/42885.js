function solution(people, limit) {
  people.sort((a, b) => a - b);

  let left = 0;
  let right = people.length - 1;
  let boats = 0;

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++;
    }

    right--;
    boats++;
  }

  return boats;
}

console.log(solution([40, 50, 150, 160], 200));
