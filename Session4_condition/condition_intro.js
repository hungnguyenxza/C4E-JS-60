// cho người dùng nhập vào 1 số
// nếu số đó lớn hơn 10 thì thông báo ra màn hình
// ngược lại, thông báo không lớn hơn 10

// let n = Number(prompt("Nhập vào 1 số"));
// if(n > 10){
//   console.log("Số vừa nhập lớn hơn 10");
// }
// else{
//   console.log("Số vừa nhập không lớn hơn 10");
// }

// Cho người dùng nhập vào 1 số,
// Kiểm tra số đó là số chẵn, hay số lẻ
// let n1 = parseInt(prompt("Nhập vào 1 số"));
// if (n1 % 2 === 0) {
//   console.log("Số chẵn");
// } else {
//   console.log("Số lẻ");
// }

// Tháng: cho người dùng nhập vào 1 tháng
// in ra màn hình số ngày của tháng đó 
// sử dụng if - else
// let month;

// Nhập vào chiều cao, cân nặng,
// Tính chỉ số BMI.
// In ra màn hình trạng thái cơ thể hiện tại

// let canNang = Number(prompt("hãy nhập số cân nặng (kg)"));
// let chieuCao = Number(prompt("hãy nhập chiều cao (m)"));
// if (canNang <= 0 || chieuCao <= 0) {
//   alert("Nhập sai");
// } else {
//   let bmi = (canNang / (chieuCao * chieuCao));
//   if (bmi <= 18.5) { // bmi > 18.5
//     console.log("chỉ số BMI của bạn ...");
//   }
//   else if (bmi <= 24.5) { // bmi > 24.5
//     console.log("chỉ số BMI của bạn ở mức bình thường");
//   }
//   else if (bmi <= 29) {
//     console.log("chỉ số BMI của bạn có vấn đề");
//   }
//   else {
//     console.log("chỉ số BMI của bạn ở mức báo động");
//   }
// }


// Tháng: cho người dùng nhập vào 1 tháng
// in ra màn hình số ngày của tháng đó
// sử dụng switch - case
let month = parseInt(prompt("Nhập 1 tháng"));
switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
    alert("31 ngày")
    break;
  case 2:
    alert("28 hoặc 29 ngày");
    break;
  case 4:
  case 6:
  case 9:
    alert("30 ngày");
    break;
  default:
    alert("Nhập sai tháng");
    break;
}