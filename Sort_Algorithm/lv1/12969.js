function solution(n) {
  const arr = n.split(' ').map(Number);
  return ('*'.repeat(arr[0]) + '\n').repeat(arr[1]);
}

console.log(solution('5 3'));

//제출용 분해
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const star = `${'*'.repeat(a)}\n`;

    console.log(star.repeat(b));
});