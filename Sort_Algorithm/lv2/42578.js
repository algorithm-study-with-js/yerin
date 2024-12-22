function solution(clothes) {
  const clothesMap = new Map();

  clothes.forEach(([name, type]) => {
    clothesMap.set(type, (clothesMap.get(type) || 0) + 1);
  });

  let combinations = 1;

  for (const count of clothesMap.values()) {
    combinations *= count + 1;
  }

  return combinations - 1;
}

console.log(
  solution([
    ['동그란 안경', '얼굴'],
    ['검정 선글라스', '얼굴'],
    ['파란색 티셔츠', '상의'],
    ['청바지', '하의'],
    ['긴 코트', '겉옷']
  ])
);
