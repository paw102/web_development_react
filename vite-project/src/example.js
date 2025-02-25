// // JavaScript 복습 및 React 적용 문법 # 1

// let a = 1;
// console.log(a);

// let count = 10;
// if(count > 5) {
//   const total = count * 2;
//   console.log(total);
// }

// // console.log(total);    // {} 범위를 벗어났기 때문에 오류 발생

// // const 가 객체 / 배열

// const myObj = {foo:3};
// console.log(myObj.foo);
// myObj.foo = 5;
// console.log(myObj.foo);

// /**
//  * const 가 상수이기는 한데 객체 또는 배열인 경우 내부의 속성이나 요소를 업데이트 할 수 있음
//  */

// // 화살표 함수

// // JS 상에서 함수를 정의하는 방법 # 1
// function multiply(x) {
//   return x * 2;
// }

// console.log(multiply(2));   // 4 출력

// // 이상의 코드를 화살표 함수를 적용했을 때는

// x => x*2;

// const calc = x => x*2;

// console.log(calc(3));   // 6 출력

// // 매개변수가 두 개 이상인 경우에는 () 로 묶어줘야함
// const calcSum = (x,y) => x + y;

// console.log(calcSum(2,3));

// // (화살표)함수 본분이 return 값인 경우 명시 할 필요 X (이상에서 볼 수 있듯) 그런데 함수 본문{ }이 여러 줄에 걸칠 경우 중괄호를 명시해주어야함.

// const calcMulti = (x,y) => {
//   console.log('곱셈 결과');
//   return x*y;
// }

// console.log(calcMulti(5,6)) 
// // 곱셈 결과
// // 30

// // 함수에 파라미터가 없다면 빈 괄호로 작성해야함.
// const sayHello = () => console.log('ㅎㅇ');

// sayHello();   // ㅎㅇ
