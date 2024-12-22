function solution(n) {
  let batteryUsage = 0;

  while (n > 0) {
    if (n % 2 === 1) {
      batteryUsage++;
      n--;
    }
    n = Math.floor(n / 2);
  }

  return batteryUsage;
}

console.log(solution(5));
