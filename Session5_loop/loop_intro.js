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
let N = parseInt(prompt("Nhập N"));
let s = 0;

for (let i = 0; i <= N; i++) {
  s = s + i; // s += i;
}

console.log(s);