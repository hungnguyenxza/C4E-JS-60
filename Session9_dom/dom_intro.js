
// let domH1 = document.getElementById("dom-intro");
// // domH1: kiểu dữ liệu là object
// console.dir(domH1);
// console.dir(domH1.innerHTML);
// domH1.innerHTML = "Welcome C4E 60";


// let imgIntro = document.getElementById("img-intro");
// console.dir(imgIntro);
// imgIntro.src = "http://wallpaperswide.com/download/winter_nature_3-wallpaper-1366x768.jpg";
// imgIntro.width = 600;

// let h1sClass = document.getElementsByClassName("dom-class-intro");
// console.dir(h1sClass);

// for (let i = 0; i < h1sClass.length; i++) {
//   const h1 = h1sClass[i];
//   h1.innerHTML = "Css Intro";
// }

document.getElementById("div-intro").innerHTML = "<h1>Css Intro by H1</h1>";

// document.getElementById('list-phone').innerHTML = 

let s = `<li>iPhone X</li>
<li>Galaxy Note 10</li>
<li>Xperia 1</li>`;

let listPhone = [
  'iPhone X',
  'Galaxy Note 10',
  'Xperia 1',
  'Xperia 2',
  'Xperia 3',
  'Xperia 4',
  'Xperia 5',
];
console.log(listPhone);


function displayListPhone() {
  let sumLi = '';
  for (let i = 0; i < listPhone.length; i++) {
    const phoneName = listPhone[i];
    //console.log('<li>' + phoneName + '</li>');
    sumLi += '<li>' + phoneName + '</li>';
  }
  // console.log(sumLi);
  document.getElementById('list-phone').innerHTML = sumLi;
}
displayListPhone();
//Thêm đt
// let newPhoneName = prompt("Tên đt mới");
// listPhone.push(newPhoneName);
// displayListPhone();

// Sửa



document.getElementById("event-intro").onclick = function(){
  alert("click from js");
}

function themDt(){
  // let newPhoneName = prompt("Tên đt mới");
  let newPhoneName = document.getElementById("txt-new-phone").value;
  document.getElementById("txt-new-phone").value = '';

  listPhone.push(newPhoneName);
  displayListPhone();
}

let listPhone2 = [
  {
    'name': '',
    'price': 0,
    'brand': '',
  },
  {
    'name': '',
    'price': 0,
    'brand': '',
  },
];

// Hiển thị listPhone2 lên 1 table

function displayListPhoneTable(){

  let sumTr = '';
  for (let i = 0; i < listPhone2.length; i++) {
    const phone = listPhone2[i];
    sumTr += `
        <tr>
          <td>${phone.name}</td>
          <td>${phone.price}</td>
          <td>${phone.brand}</td>
        </tr>
    `;
  }
  document.getElementById('list-phone-2').innerHTML = sumTr;

}


// Thêm điện thoại:
// Lấy 3 thông tin ng dùng nhập, cho vào 1 object rỗng,
// rồi mới push object này vào mảng listPhone2

// xóa
// let indexDelete = listPhone.indexOf("Galaxy Note 10");
// listPhone.splice(indexDelete, 1);

// indexDelete = listPhone.findIndex(function(v){
//   return v.includes("X");
// });

// for (let i = 0; i < listPhone.length; i++) {
//   const element = listPhone[i];
//   if(element === "X"){
//     listPhone.splice(i, 1);
//   }
// }
// listPhone.splice(indexDelete, 1);
