# C4E-JS-60 Web basic

### I. Biến
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
