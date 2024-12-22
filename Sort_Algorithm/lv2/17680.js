//LRU?
// 가장 최근에 사용되지 않은 것(Least Recently Used)을 교체하는 알고리즘

function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5;

  const cache = new Map();
  let time = 0;

  for (let city of cities) {
    city = city.toLowerCase();

    if (cache.has(city)) {
      time += 1;
      cache.delete(city);
    } else {
      time += 5;
      if (cache.size >= cacheSize) {
        const oldest = cache.keys().next().value;
        cache.delete(oldest);
      }
    }
    cache.set(city, true);
  }

  return time;
}

const cacheSize = 3;
const cities = [
  'Jeju',
  'Pangyo',
  'Seoul',
  'NewYork',
  'LA',
  'Jeju',
  'Pangyo',
  'Seoul',
  'NewYork',
  'LA'
];

console.log(solution(cacheSize, cities));

//Que를 활용해서 해결하는 방법

function solution(cacheSize, cities) {
  const MISS = 5,
    HIT = 1;

  if (cacheSize === 0) return MISS * cities.length;

  let answer = 0,
    cache = [];

  cities.forEach((city) => {
    city = city.toUpperCase();

    let idx = cache.indexOf(city);

    if (idx > -1) {
      cache.splice(idx, 1);
      answer += HIT;
    } else {
      if (cache.length >= cacheSize) cache.shift();
      answer += MISS;
    }

    cache.push(city);
  });

  return answer;
}
