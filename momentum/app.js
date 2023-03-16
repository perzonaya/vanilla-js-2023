const a = 5;
const b = 2;
let myName = "perzona";
// 변수명은 빈칸대신 대문자로 표시한다
// const(변하지 않는 값 업데이트 불가) let(변하는 값 업데이트 가능)
// 대부분 프로그래머는 기본값으로 const를 사용한다.
console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "perzonaya";
// let으로 변수 생성하고 나면 변수명으로만 값을 바꿔주면 된다.
console.log("your new name is  " + myName);

// boolean = True or False
let amIFat = false;
console.log(amIFat);

// null 아무것도 없다는 걸 정의함
// undifined 변수는 있으나 (값이 정의되지 않음) null과 다르다.
// null, true, false 모두 type이다
amIFat = null;
console.log(amIFat);
let something;
console.log(something, amIFat);

// 데이터 정리하는 방법
// const mon = "mon";
// const tue = "tue";
// const wed = "wed";
// const thu = "thu";
// const fri = "fri";
// const sat = "sat";
// const sun = "sund";
// const daysOfWeek = mon + tue + wed + thu + fri + sat + sun;
// console.log(daysOfWeek);
// 하나의 string이 되어 문제점이 많음

// 가장 기본적 데이터 구조 array or object
// const daysOfWeek = [mon, tue, wed, thu, fri, sat, sun];
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// 각각의 const로 하지 않고 array안에 ""로 정의하면 한줄로 끝난다.
console.log(daysOfWeek);
// array는 []와 ,를 사용해서 만든다. 내가 원하는 뭐든지 써도 된다. 설명없어도 의미 유추가능한 것들
// 각각의 항목을 따로 볼 수 있다.
const nonsense = [1, 2, "hello", false, null, true, undefined];
console.log(nonsense);
console.log(daysOfWeek, nonsense);
console.log(daysOfWeek[3]); //4번째인 thu를 출력하기 위해서는 [3]인 이유 컴퓨터는 0부터 순서샌다.
//중요함// array에 아이템 하나더 추가하기
daysOfWeek.push("day");
console.log(daysOfWeek);

const toBuy = ["potato", "tomato", "icecream"];
toBuy.push("apple");
console.log(toBuy);

// const playerName="perzona";
// const playerPoints=121212;
// const playerHandsome= false;
// const playerFat="little bit";
//중복된 변수명 말고 다른 방법이 좋겠지
// player.name
// player.points
// player.handsome

// objet로 만들어 쓰면 좋다. 리스트가 아니다. 설명이 필요한 세부속성같은 것을 정의하기 좋다
const player = {
  name: "perzona",
  points: 10,
  fat: true,
};
console.log(player);
console.log(player.name); //name을 나타내는 방법1
console.log(player["name"]); //name을 나타내는 방법2

// const이지만 세부항목으로 업데이트 가능하다.
player.fat = false;
console.log(player);
player.points = player.points + 15;
console.log(player.points);

// object도 추가할 수 있다.
player.lastName = "kang";
console.log(player);

//Funcion 은 계속 반복해서 사용 할 수 있는 코드의 조각
//이름에 hello를 해주는 기능 만들어보자

// console.log("Hello my name is Nico");
// console.log("Hello my name is Dal");
// console.log("Hello my name is Shigatsu");
// console.log("Hello my name is Perzona");
// console.log("Hello my name is Bongahe");
//전체적으로 반복하는 것은 비효율적이야. 코드의 반복을 최소한 으로 줄여야함

function sayHello(nameOfPerson, age) {
  console.log("Hello! my name is " + nameOfPerson + " and I'm " + age);
}
sayHello("Nico", 10);
sayHello("Perzona", 50);
sayHello("Bonghae", 49);

function plus(a, b) {
  console.log(a + b);
}
plus(8, 60);

// object안에 속성으로 function을 넣을 수 있다
const singer = {
  name: "nico",
  sayHello: function (otherSinger) {
    console.log("Hello " + otherSinger + " Singer!!!");
  },
};
singer.sayHello("Perzona");
singer.sayHello("Bonghae");

//과제 claculator
// const calculator = {
//   plus: function (a, b) {
//     console.log(a + b);
//   },
//   minus: function (a, b) {
//     console.log(a - b);
//   },
//   times: function (a, b) {
//     console.log(a * b);
//   },
//   divide: function (a, b) {
//     console.log(a / b);
//   },
//   square: function (a, b) {
//     console.log(a ** b);
//   },
// };
// calculator.plus(2, 10);
// calculator.minus(2, 10);
// calculator.times(2, 10);
// calculator.divide(2, 10);
// calculator.square(2, 10); //2의 10제곱

//Returns 2.11강  function 안에 console하는 것과 차이가 있다.
//한번 리턴하면 function은 작동을 멈추고 값을 리턴하고 끝낸다
//외부에서 value값을 알기 원하기 때문에 리턴을 사용한다.
// const age = 96;
// function calculateKrAge(ageOfForeigner) {
//   return ageOfForeigner + 2;
// }
// const krAge = calculateKrAge(age);
// console.log(krAge);

// const calculator = {
//   plus: function (a, b) {
//     return a + b;
//   },
//   minus: function (a, b) {
//     return a - b;
//   },
//   times: function (a, b) {
//     return a * b;
//   },
//   divide: function (a, b) {
//     return a / b;
//   },
//   square: function (a, b) {
//     return a ** b;
//   },
// };
// const plusResult = calculator.plus(2, 3);
// const minusResult = calculator.minus(plusResult, 10);
// const timesResult = calculator.times(10, minusResult);
// const divideResult = calculator.divide(timesResult, plusResult);
// const squareResult = calculator.square(divideResult, minusResult);
// console.log(plusResult);
// console.log(minusResult);
// console.log(timesResult);
// console.log(divideResult);
// console.log(squareResult);

//2.13 conditional
//conditional조건문 뭔가의 true, false를 알려주는 것,  if  else
//prompt는 사용자에게 질문을 하고 답을 하라고 요구한다
//CSS를 적용못하고 이쁘지 않고 동작을 멈추므로 요즘은 잘 사용하지 않음
// const age = prompt("How old are you?");
//자바스크립트가 질문을 하고 기다린다. 아직 console은 작동하지 않음
// console.log(age);
//값을 받아서 다른 type으로 바꾸는 방법 string-> number
// console.log(age, parseInt(age));
// const age = parseInt(age);
const age = parseInt(prompt("How old are you?"));
// console.log(age, parseInt(age));
// console.log(isNaN(age));

// if (isNaN(age)) {
//   ///true age가  Not a Number =true 숫자가 아니라는 뜻
//   console.log("Please write a number");
// } else {
//   ///false age가 Not a Number =false 숫자라는 뜻
//   console.log("Thank you for wirting your age");
// }

if (isNaN(age) || age < 0) {
  console.log("Please write a real positive number");
} else if (age < 18) {
  console.log("You are too young");
} else if (age >= 18 && age <= 50) {
  //&& and  || or
  console.log("You can drink");
} else if (age > 50 && age <= 80) {
  console.log("You should exercise");
} else if (age > 80) {
  console.log("You can do wahtever you want");
}
3.0부터 들으면 됩니다