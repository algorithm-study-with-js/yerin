function solution(n) {
  const arr = n.split(' ');
  //   console.log(arr);
  const answer = arr.map((word) => {
    if (word === '') return; // 이 부분 때문에 계속 오류 났었음,,,

    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });

  return answer.join(' ');
}

console.log(solution(' hello  world'));
