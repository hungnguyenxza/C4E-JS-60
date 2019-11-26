let age = 20;
let pi = 3.14;

let name = 'Hung';
let school = `DH HN ${name}`;

// console.log(school);

// console.log(typeof age);
// console.log(typeof pi);
// console.log(typeof name);

let x = 50;
let y = '30';
y = parseInt(y); // '30' => 30
let tong = x + y;
let hieu = x - y;
let tich = x * y;
let thuong = x / y;
let soDu = x % y;
// console.log(`${x} + ${y} = ${tong}`);
// console.log(x + ' + ' + y + " = " + tong);
// console.log(`${x} - ${y} = ${hieu}`);
// console.log(`${x} * ${y} = ${tich}`);
// console.log(`${x} / ${y} = ${thuong}`);
// console.log(`${x} % ${y} = ${soDu}`);

// Math.pow(2, 5) // 2^5;
// Math.sin(Math.PI); // sin(pi) // radian;
// Math.sqrt(25); // căn(25) = 5;

// console.log(x); // 50
// console.log(x++); // 50
// console.log(x);

x = x + 2;
x = x - 5;
x = x * 10;
x = x / 20;
// rút gọn
x += 2; // <=> x = x + 2;
x -= 5; // <=> x = x - 5;
x *= 10;
x /= 20; 

let a = Number(prompt('Nhập số thứ nhất'));// do người dùng nhập
let b = Number(prompt('Nhập số thứ hai')); // do người dùng nhập
// Hiện thị tổng, hiệu, tích, thương của a và b
// theo cú pháp : {a} + {b} = giá trị;
console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} - ${b} = ${a - b}`);
