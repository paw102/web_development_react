// // JavaScript 복습 및 React 활용 문법 # 2

// // 템플릿 리터럴
// let person = {firstName : 'John', lastName: 'Johnson'};
// let greeting = 'Hello ' + person.firstNameName + ' ' + person.lastName;

// console.log(greeting);

// // greeting2 를 템플릿 리터럴을 적용하여 작성 후 console 창 띄우기
// let greeting2 = `Hello ${person.firstName} ${person.lastName}`
// console.log(greeting2);

// // 객체 구조 분해
// // 해당 기능을 사용하면 객체에서 값을 추출하여 변수에 할당 할 수 있음
// // 단일 구문을 이용하여 객체의 여러 속성을 개별 변수에 할당하는 것도 가능하기 때문에 학습함

// const person2 = {
//   firstName: 'Jane',
//   lastName: 'Cooper',
//   email: 'j.cooper@mail.com',
// }

// // const firstName1 = person2.firstName;
// // const lastName1 = person2.lastName;
// // const email1 = person2.email;

// // 이상의 번거로운 코드를 구조 분해하는 방법

// const { firstName, lastName, email } = person2;
// console.log(firstName);
// console.log(lastName);
// console.log(email);