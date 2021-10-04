const player = {
  name: "nico",
  points: 10,
  fat: true,
};

console.log(player);
console.log(player.name);
console.log(player["name"]); // player.name 과 같음.

player.fat = false; // 값을 업데이트할 수 있음.
// const 상수는 값 자체를 변경할 수는 없으나,
// object 안의 무언가를 수정할 수는 있다.
// 즉, const 전체를 하나의 값으로 업데이트하려고 할 때 에러가 발생한다.
player.lastName = "potato"; // 원한다면, 객체 초기화 후에 어떤 property든 만들 수 있다.
player.points = player.points + 15;

console.log(player);
