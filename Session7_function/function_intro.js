function welcome() {
  console.log("Xin chào C4E JS 60");
}

// welcome();

function welcomeV2(message) {
  console.log(message);
}

// welcomeV2("Welcome C4E JS 60");

// let m = "Welcome C4E JS 60";
// welcomeV2(m);


function tinhTong(a, b) {
  let c = a + b;
  console.log(a);
  console.log(b);
  console.log(c);
}

let a = 10;
let b = 20;
// tinhTong(b, a);

function tinhTongV2(a, b) {
  return a + b;
}

let tong = tinhTongV2(a, b);
// console.log(tong);

function giaiPTBac1(a, b) {
  if (a !== 0) {
    return -b / a;
  }

  return;
}

// let soThuNhat = 0;
// let soThuHai = 5;
// let x = giaiPTBac1(soThuNhat, soThuHai);
// console.log(x);

// // Tìm số lớn nhất, nhỏ nhất của mảng.

// function timMax(array) {
//   let max = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (max < array[i]) {
//       max = array[i];
//     }
//   }
//   return max;
// }
// function timMin(array) {
//   let min = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (min > array[i]) {
//       min = array[i];
//     }
//   }
//   return min;
// }
// let numbers = [4, 7, 1, 8, 9];
// let max = timMax(numbers);

// function giaiThua(N){
//   let p = 1;
//   for (let i = 1; i <= N; i++) {
//     p *= i;
//   }
//   return p;
// }

// console.log(giaiThua(10));

// function giaiThuaDeQuy(N){
//   if(N === 0) {
//     return 1;
//   }
//   return N * giaiThuaDeQuy(N - 1);
// }


function changValue(a){
  a = 10;
  console.log(`a = ${a}`);
}  

let x = 20;
changValue(x);
console.log(`x = ${x}`);

function changeValueV2(p){
  p.age = 10;
  console.log(`p.age = ${p.age}`);
}
let person = {
  age: 20,
  gioiTinh: {

  }
}
changeValueV2(person);
console.log(`person.age = ${person.age}`);

let a = [1,2,3, {}];
let b = JSON.parse(JSON.stringify(a));


