function solution(n) {
  const arr = n.split(' ');

  const answer = arr.map((word) => {
    if (word.length == 0) return ' ';

    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });

  return answer.join(' ');
}

console.log(solution('hello  world'));
