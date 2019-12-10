// function welcome() {
//   console.log("Xin chào C4E JS 60");
// }

// // welcome();

// function welcomeV2(message) {
//   console.log(message);
// }

// // welcomeV2("Welcome C4E JS 60");

// // let m = "Welcome C4E JS 60";
// // welcomeV2(m);


// function tinhTong(a, b) {
//   let c = a + b;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// let a = 10;
// let b = 20;
// // tinhTong(b, a);

// function tinhTongV2(a, b) {
//   return a + b;
// }

// let tong = tinhTongV2(a, b);
// // console.log(tong);

// function giaiPTBac1(a, b) {
//   if (a !== 0) {
//     return -b / a;
//   }

//   return;
// }

// // let soThuNhat = 0;
// // let soThuHai = 5;
// // let x = giaiPTBac1(soThuNhat, soThuHai);
// // console.log(x);

// // // Tìm số lớn nhất, nhỏ nhất của mảng.

// // function timMax(array) {
// //   let max = array[0];
// //   for (let i = 1; i < array.length; i++) {
// //     if (max < array[i]) {
// //       max = array[i];
// //     }
// //   }
// //   return max;
// // }
// // function timMin(array) {
// //   let min = array[0];
// //   for (let i = 1; i < array.length; i++) {
// //     if (min > array[i]) {
// //       min = array[i];
// //     }
// //   }
// //   return min;
// // }
// // let numbers = [4, 7, 1, 8, 9];
// // let max = timMax(numbers);

// // function giaiThua(N){
// //   let p = 1;
// //   for (let i = 1; i <= N; i++) {
// //     p *= i;
// //   }
// //   return p;
// // }

// // console.log(giaiThua(10));

// // function giaiThuaDeQuy(N){
// //   if(N === 0) {
// //     return 1;
// //   }
// //   return N * giaiThuaDeQuy(N - 1);
// // }


// function changValue(a){
//   a = 10;
//   console.log(`a = ${a}`);
// }  

// let x = 20;
// changValue(x);
// console.log(`x = ${x}`);

// function changeValueV2(p){
//   p.age = 10;
//   console.log(`p.age = ${p.age}`);
// }
// let person = {
//   age: 20,
//   gioiTinh: {

//   }
// }
// changeValueV2(person);
// console.log(`person.age = ${person.age}`);

// let a = [1,2,3];
// let b = JSON.parse(JSON.stringify(a));

// let a = [1,2,3,4,5, 2];
// let result = a.find(function(value, index, arr){
//   // console.log(value);
//   // console.log(index);
//   // console.log(arr);
//   // console.log("=============");
//   return value === 6;
// });
// console.log(result);
// // a.filter() // Trả 1 mảng các giá trị thỏa mãn
// // a.find() // Trả 1 giá trị thõa mãn đầu tiên
// // a.findIndex() // Trả chỉ số của giá trị thỏa mãn đầu tiên
// a.filter(function(v){
//   return v >= 2 && v < 4;
// });

// let b = [5,6,7,8];
// let d = [7,8,9,10];
// let c = a.concat(b, d);
// console.table(c);

// let char = ["H", 'e', 'l', 'l', 'o'];
// console.log(char.join('-'));


// let marks = [5.5, 7, 8, 9, 10];
// let m = marks.every(function(value, index, arr){
//   return value >= 5;
// });// Tất cả điểm có trên trung bình hay không?

// // Kiểm tra xem có điểm nào dưới trung bình hay không?
// let n = marks.some(function(value){
//   return n < 5;
// });

// // Sắp xếp mảng
// marks.sort();


let listPhones = [
  {
    name: 'Iphone 7',
    price: 100000,
    brand: 'Apple',
  },
  {
    name: 'Samsung S8',
    price: 7000,
    brand: 'Samsung',
  },
  {
    name: 'Xperia 1',
    price: 7000,
    brand: 'Sony',
  },
];

listPhones.find(function(value, index, arr){
  // console.log(value);
  // console.log(index);
  // console.log(arr);
  // console.log("======="); 
  return value.price === 7000;
});

listPhones.sort(function(value1, value2){
  // Tăng dần, theo giá
  //return value1.price - value2.price;
  //Giảm dần, theo giá
  // return value2.price - value1.price;

  // Tăng dần, name,
  return value1.name.toLowerCase().localeCompare(value2.name.toLowerCase());
});
console.log(listPhones);

console.log("Đây là code mới nhất");


