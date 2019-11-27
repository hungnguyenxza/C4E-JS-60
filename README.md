# C4E-JS-60 Web basic

### I. Biến (Variables)
#### 1. Cách khai báo biến
```javascript
let tenBien;
var tenBien;
```
#### 2. Gán giá trị cho biến
```javascript
tenBien = giaTri;
```
#### 3. Kết hợp cả khai báo và gán
```javascript
let tenBien = giaTri;
var tenBien = giaTri;
const tenBien = giaTri;
```
#### 4. In ra màn hình
```javascript
console.log(tenBien);
alert(tenBien);
```
#### 5. Lấy dữ liệu từ người dùng
```javascript
prompt("Nội dung message");
```
Mặc dù đoạn code trên lấy được dữ liệu những chưa lưu lại được giá trị này,
mình cần gán giá trị này cho 1 biến để sau còn sử dụng
```javascript
let tenBien = prompt("Nội dung message");
```
#### 6. Sử khác nhau giữa các cách khai báo biến.
- **a. const**
  - Để khai báo 1 hằng số, không thể thay đổi giá trị
```javascript
const PI = 3.14;
```
  > Lưu ý: **Khi khai báo cần gán giá trị ngay**
- **b. let, var**
  - Khai báo 1 biến có khả năng thay đổi giá trị.
  - **let** có phạm vi sử dụng nhỏ hơn **var**, ưu tiên sử dụng **let** hơn

---
### II. Kiểu dữ liệu (Datatype)
#### 1. Kiểu dữ liệu là gì?
> Mỗi dữ liệu được lưu trong biến cần được định kiểu dữ liệu cho ngôn ngữ lập trình
> để phục vụ cho việc thao tác dữ liệu trên biến đó được chính xác

Ví dụ: biến lưu giá trị số có thế dùng để tính toán các phép tính, nhưng biến giá trị chữ không thể dùng để tính toán các tất cả các phép tính
#### 2. Các kiểu dữ liệu
##### a. Kiểu number (số)
Để xác định dữ liệu kiểu số, ta không cần bất kì kí hiệu nào, tự ngôn ngữ lập trình hiểu 1 số sẽ thuộc kiểu dữ liệu số.
Có 2 loại số, số nguyên và số thực
Ví dụ: 
```javascript
let age = 20;
let PI = 3.14;
```
> Lưu ý: Đối với số thực, cần thay dấu , thành dấu . để xác định phần thực phần nguyên
##### b. Kiểu string (chuỗi)
Để xác định dữ liệu kiểu chuỗi, ta có 2 ký hiệu
1. Cặp dầu nháy kép " "
2. Cặp dấu nháy đơn ' '
3. Cặp dấu chéo \` \`
Trong đó cách 1 & 2 tương đương nhau, cách 3 có thể viết code javascript vào trong đó
Ví dụ:
```javascript
let name = "Tùng";
let fullName = `Nguyễn ${name}`;
// => fullName = "Nguyễn Tùng"
```
##### c. Kiểu boolean
Chỉ có 2 giá trị duy nhất là `true` và `false`. 
Được sử dụng trong các câu lệnh điều kiện
##### d. Kiểu mảng (array)
Lưu nhiều dữ liệu vào 1 biến với dữ liệu có tính tương đồng nhau về mặt ý nghĩa
Ví dụ:
```javascript
let listName = ['Tùng', 'Quang', 'Chung'];
// Lưu danh sách tên
```
##### e. Kiểu object
Lưu nhiều dữ liệu vào 1 biến với dữ liệu khác nhau về mặt ý nghĩa
Ví dụ:
```javascript
let myInfo = {
  'name': 'Hùng',
  'age': 23,
  'country': 'Vietnam'
}
// => lưu thông tin cá nhân
```
#### 3. Các toán tử
Trong toán học với các toán tử `+` `-` `x` `:` thì tương ứng trong lập trình cũng có các phép toán này
  1. `+`: phép cộng
  2. `-`: phép trừ
  3. `*`: phép nhân
  4. `/`: phép chia
  5. `%`: phép chia lấy dư
  6. `++`: tăng biến lên 1 đơn vị. Ví dụ: `a++` 
  7. `--`: giảm biến đi 1 đơn vị. Ví dụ: `a--`

---
### III. Câu lệnh rẽ nhánh (Condition)
#### 1. Điều kiện
Điều kiện là các câu lệnh trả về giá trị đúng hoặc sai. Tương ứng với lập trình là trả về giá trị `true` hoặc `false`

Ví dụ: `2 > 3` => `false`, `1 = 1` => `true`

Các toán tử so sánh và toán tử logic giúp ta tạo 1 điều kiện
a. Toán tử so sánh
<br/>Toán => Code<br/>
`>` => `>`<br/>
`<` => `<`<br/>
&#8805; => `>=`<br/>
&#8804; => `<=`<br/>
`=` => `===`<br/>
&#8800; => `!===`<br/>
b. Toán tử logic<br/>
`and` => `&&`<br/>
`or` => `||`<br/>
`not` => `!`<br/>

#### 2. Cú pháp
```javascript
if(điều kiện 1){
  // code 1
}
else if(điều kiện 2){
  // code 2
}
else if(điều kiện 3){
  // code 3
}
...
else{ // <= có thể có hoặc không
  // code n
}
```

