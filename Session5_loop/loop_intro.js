// for (let index = 1; index < 11; index++) {
//   // console.log("Hello world");
//   console.log(index);
// }

// console.log("Nhập vào 1 số N, in từ 0 -> N");
// let N = Number(prompt("Nhập số N"));
// for (let index = 0; index <= N; index++) {
//   console.log(index);
// }

// console.log("Nhập vào 1 số N, in từ 1 -> N");
// for (let index = 1; index <= N; index++) {
//   console.log(index);
// }

// console.log("Nhập vào 2 số M, N, in từ M -> N");
// let M = Number(prompt("Nhập M"));
// for (let index = M; index <= N; index++) {
//   console.log(index);
// }

// // Nhập 1 số N, in từ N -> 0
// for (let i = N; i >= 0; i--){
//   console.log(i);
// }

// Nhập số N, in các số lẻ từ 0 -> N
// let N = parseInt(prompt("Nhập N"));
// // Cách 1:
// for (let i = 0; i <= N; i++) {
//   if (i % 2 === 1) { // i là số lẻ
//     console.log(i);
//   }
// }
// // Cách 2: 
// for (let i = 1; i <= N; i+=2) {
//   console.log(i);
// }

// // Nhập số N, in các số chẵn từ 0 -> N
// for (let i = 0; i < N; i++) {
//   if (i % 2 === 0) { // i là số chẵn
//     console.log(i);
//   }
// }
// // Cách 2: 
// for (let i = 0; i <= N; i+=2) {
//   console.log(i);
// }
// Nhập 1 số N, đếm xem có 
// bao nhiêu số chẵn
// bao nhiêu số chia hết cho 3.
// let countSoChan = 0;
// let countChiaHetCho3 = 0;

// for (let i = 0; i <= N; i++) {
//   if(i % 2 === 0){
//     countSoChan++;
//   }
// }

// console.log(`Có ${countSoChan} số chẵn`);
// console.log(`Có ${countChiaHetCho3} số chia hết cho 3`);


// Tính tổng S = 1 + 2 + 3 + ... + N
// let N = parseInt(prompt("Nhập N"));
// let s = 0;

// for (let i = 0; i <= N; i++) {
//   s = s + i; // s += i;
// }

// console.log(s);

// S =  1! + 2! + 3! + ... + N!
// let s = 0; 
// let N = parseInt(prompt("Nhập N"));

// for (let i = 1; i <= N; i++) {
//   let p = 1; // p = i!
//   for (let j = 1; j <= i; j++) {
//     p *= j;
//   }

//   s += p;
// }

// console.log(s);

// let M = parseInt(prompt("Nhập M"));
// let m = 0;
// let e = 1;
// for (let i = 1; i <= M; i++) {
//   e = e * i;
//   m = m + e;
// }
// console.log(m);



// Yêu cầu người dùng nhập 1 số > 8;

let n = Number(prompt("Nhập 1 số:"));
while (n <= 8) {
  n = Number(prompt("Nhập lại n > 8"));
}
console.log(n);

// 1. Nhập 1 mật khẩu dài ít nhất 8 kí tự,
// không thỏa mãn, thì nhập lại.

// let pass = prompt("nhập mật khẩu");
// if(pass.length < 8){
//   pass = prompt("Nhập mật khẩu lớn hơn 8 ký tự");
// }
// console.log(pass);

// 2. Nhập 1 mật khẩu phải chứa kí tự @.
// không thỏa mãn, nhập lại.
// let pass2 = prompt("Nhập mật khẩu:");
// if(pass2.indexOf('@') < 0){ // @ không nằm trong pass2
//   pass2 = prompt("Nhập mật khẩu có chứa @");
// }
// console.log(pass2);

// 3. Nhập 1 mật khẩu dài ít nhất 8 kí tự và chứa @
// sai nhập lại.

// let pass3 = prompt("Nhập mật khẩu");
// while(pass3.length < 8 || pass3.indexOf('@') < 0){
//   pass3 = prompt("Nhập lại");
// }
// console.log(pass3);

// tổng s = 1 + 3 + 5 + ... + N
let s = 0;
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    break;
  }
  s += i;
}

let a = 10;

for (let i = 0; i < 10; i++) {
  switch (key) {
    case value:
      break;
    default:
      break;
  }
}



