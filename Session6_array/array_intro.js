// let array = [2, 5, 7, 8];

// let customers = ["Phạm Văn A", "Nguyễn Thị B"];

// console.log(array);
// console.log(array.length);

// console.log(array[2]);

// array.push(1,2,3);
// console.table(array);

// let lastElement = array.pop();
// console.table(array);
// console.log(lastElement);

// array[2] = 50;
// console.table(array);

// array.splice(2, 1);
// console.table(array);

// for (let i = 0; i < customers.length; i++) {
//   const element = customers[i];
//   console.log("Xin chào " + element);
// }


// // Tính tổng các giá trị trong mảng
// // let array = [2, 5, 7, 8];
// let s = 0;
// for (let i = 0; i < array.length; i++) {
//   s += array[i];
// }
// console.log(s);

// // Tính giá trị trung bình của mảng.
// console.log(s/array.length);

// // Object

// let myInfo = {
//   "name": "Hung",
//   age: 20,
// }

// console.log(myInfo["name"]);
// console.log(myInfo.age);

// myInfo.school = "ĐH QG";
// myInfo["country"] = "VN";

// myInfo.age = 22;
// myInfo.age += 2;

// delete myInfo.school;

// for (const key in myInfo) {
//   if (myInfo.hasOwnProperty(key)) { // kiểm tra 1 key có trong 1 object ?
//     const value = myInfo[key];
//     console.log(value);
//     console.log(key + ": " + value);
//   }
// }

// tạo 1 object lưu thông tin 1 điện thoại
// gồm 2 thông tin: tên, giá

// 1. Nhập thêm thông tin: nsx, mô tả.

// 2. Cho sửa 1 thông tin mà người dùng muốn

// 3. Xóa 1 thông tin người dùng muốn.


// Mảng:
// Tìm 1 giá trị nhất định
// Tìm min max của 1 mảng
// Lọc các giá trị theo khoảng
// Sắp xếp.

// Danh sách điện thoại
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
];

// 1. Hiện thị danh sách.
// (Stt)1.
// Name: ...
// Price: ...
// Brand: ...
console.log("================In");
for (let index = 0; index <= listPhones.length - 1; index++) {
  console.log(index + 1);
  let phone = listPhones[index];
  for (let key in phone) {
    if (phone.hasOwnProperty(key)) {
      const value = phone[key];
      console.log(key + ": " + value);
    }
  }
}

// 2. Thêm
// Nhập name, price, brand, => object
// push listPhones

console.log("================Thêm");
let newphone = {};
newphone.name = prompt('Nhap ten: ');
newphone.price = Number(prompt('nhap gia: '));
newphone.brand = prompt('Nhap brand: ');

listPhones.push(newphone);

for (let index = 0; index <= listPhones.length - 1; index++) {
  console.log(index + 1);
  let phone = listPhones[index];
  for (let key in phone) {
    if (phone.hasOwnProperty(key)) {
      const value = phone[key];
      console.log(key + ": " + value);
    }
  }
}
// 3. Sửa
// Nhập stt. Nhập Name, Price, Brand,
// Cập nhật vào phone tương ứng.
console.log("================Sửa");
let stt = parseInt(prompt("Nhap stt can sua"));
let name = prompt("Nhập tên mới:");
let price = Number(prompt("Nhập giá mới:"));
let brand = prompt("Nhập hãng mới:");
let editPhone = listPhones[stt - 1];

editPhone.name = name;
editPhone.price = price;
editPhone.brand = brand;

for (let index = 0; index <= listPhones.length - 1; index++) {
  console.log(index + 1);
  let phone = listPhones[index];
  for (let key in phone) {
    if (phone.hasOwnProperty(key)) {
      const value = phone[key];
      console.log(key + ": " + value);
    }
  }
}
// 4. Xóa (Tương tự sửa)
console.log("================Xóa");
stt = parseInt(prompt("Nhap stt can xoa"));
listPhones.splice(stt - 1, 1);
//
