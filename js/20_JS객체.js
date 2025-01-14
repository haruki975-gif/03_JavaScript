/* JS 객체 생성 + 다루기 */

const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {
  
  // 1. 객체 생성
  //  1) {} - JS 객체 리터럴을 이용한 생성
  
  // * key는 무조건 string 타입!!!! (고정)
  // "", '' 없어도 string으로 인식된다!!
  const product = {
    "productName" : "새우깡", // const productName = "새우깡";
    'brand' : "농심",
    price : 1700
  };
  console.log("product : ", product);
  
  
  // 2) new Object() - 새 객체 생성 === {}
  const person = new Object();
  
  /* 객체 내부에 값을 추가하는 방법 */
  // 1) 객체명.key = value; (대입 연산자 추가)
  person.name = "박무현";
  person.age = "37";
  
  // 2) 객체명["key"] = value; (대입 연산자 추가)
  person["height"] = 175;
  person["weight"] = 72;
  
  console.log("person", person); // {} 블럭
  
  
  
  /* 생성된 객체 내부 값 얻어오는 방법 */
  // 1. 객체명.key : 일반적인 방법
  console.log(product.productName);
  console.log(product.brand);
  console.log(product.price);
  
  // 2. 객체명["key"] : key에 특수문자, 공백 포함 시 사용
  //    + for문과 같이 사용하는 경우
  console.log(product["productName"]);
  console.log(product["brand"]);
  console.log(product["price"]);
  // ----------------------------------------------------
  
  // 2. 객체에 저장된 값 수정, 삭제
  
  // 1) 수정 - key가 중복되면 새로운 value로 덮어쓰기
  //  객체.기존key = 새 value;
  //  객체["기존key"] = 새 value;
  product.price = 1500;
  person["age"] = 38;
  console.log("수정된 product : ", product);
  console.log("수정된 person : ", person);
  
  // 2) 삭제 - 객체 내에서 key가 일치하는 요소(k:v) 삭제
  // delete 객체명.key
  // delete 객체명["key"]
  delete person.weight; // person.weight 삭제
  console.log("삭제 확인:", person);
});


/* JS 객체에 메서드(함수) 추가 */
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
  
  const student = {}; // 빈 객체
  
  // 연산자(.) : 객체(object) 내부 접근
  student.name = "신해량";
  student.age = 28;
  
  // 객체에 존재하는 함수 === 메서드(method)
  // + 메서드 작성 시 화살표 함수 X (this 문제 발생)
  student.introduce = function(){
    const gender = "남자"; // {} block scope
    
    // 저는 28세 남자 신해량입니다.
    // alert(`저는 ${age}세 ${gender} ${name}입니다.`);
    // -> age is not defined : 정의되지 않은 에러
    
    alert(`저는 ${this.age}세 ${gender} ${this.name}입니다.`);
    
    // 메서드 내에서 this
    // === 메서드가 작성된 객체(여기서는 student)
  }
  
  // student의 introduce() 메서드 호출
  student.introduce();
  
  
  // 메서드(함수) 추가
  student.study = function(subject){
    const str = `${this.name}은 ${subject} 공부를 합니다.`;
    console.log(str);
  }
  
  // study 메서드 호출
  student.study("수학");
  student["study"]("영어");
});



/* 
  this 참조 변수 위치에 따른 의미
  
  1) 객체 메서드(함수)에서 this === 현재 객체
  
  2) 이벤트가 발생된 요소 (화살표 함수 X)
  <button onclick="textFn(this)">테스트</button>
  
  btn.onclick = function(){ console.log(this); }
  
  btn.addEventListener("click", function(){
    consolo.log(this);
  });
  
  3) 일반 함수, 화살표 함수, 전역 변수에서 this
    === window 객체
*/



/* 생성자 함수 */
/* 
  function 객체명(매개변수...){
    // 객체명은 무조건 대문자로 시작
    
    this.필드명 = 값
    this.메서드명 = function(){}
    ...
  }
  // 여기서 this : 생성자 함수로 만들어진 객체를 나타냄
  
  [생성자 함수 사용법]
  const 객체명1 = new 생성자함수명([매개변수]);
  const 객체명2 = new 생성자함수명([매개변수]);
  const 객체명3 = new 생성자함수명([매개변수]);
  
  * new 연산자 :
    - (메모리)에 생성자 함수에 정의된 내용대로
      새로운 객체를 생성
*/

/** 학생 생성자 함수 정의
 * 
 * @param grade  : 전달 받은 학년
 * @param ban    : 전달 받은 반
 * @param number : 전달 받은 번호
 * @param name   : 전달 받은 이름
 */
function Student(grade, ban, number, name){
  
  // 전달 받은 값을
  // 생성된 객체의 필드로 대입
  
  // 생성된 Student 객체의 
  // key가 grade, ban, number, name인 필드에
  // value로 전달 받은 grade, ban, number, name를 대입
  this.grade = grade;
  this.ban = ban;
  this.number = number;
  this.name = name;
  
  // 메서드(객체의 함수) 생성
  this.inform = function(){
    let str = `${this.grade}학년 ${this.ban}반 ${this.number}번 ${this.name}`;
    return str;
  } 
}

/* --------------------------------------------------------------------------- */

/* 추가된 학생 객체를 모아둘 객체 배열 생성 */
// 객체 배열 : 객체만 저장된 배열
const studentList = [
  new Student(1, 1, 1, "서지혁"),
  new Student(1, 1, 2, "이지현"),
  new Student(1, 1, 3, "김재희"),
];

/*
  학생 추가 버튼 클릭 시 입력된 값을 모두 얻어와
  학생 객체 배열(studentList)에 추가하기
*/
const inputGrade = document.querySelector("#inputGrade");
const inputBan = document.querySelector("#inputBan");
const inputNumber = document.querySelector("#inputNumber");
const inputName = document.querySelector("#inputName");

const addStudent = document.querySelector("#addStudent");
addStudent.addEventListener("click", () => {
  
  // 입력된 값 모두 얻어오기
  const values = [
    inputGrade.value,
    inputBan.value,
    inputNumber.value,
    inputName.value
  ];
  
  // 입력되지 않은 값이 있는지 확인
  for(let val of values){
    if(val.trim() === ''){ // 입력하지 않은 경우
      alert("모든 값을 입력해 주세요.");
      return;
    }
  }
  
  // 학생 객체 생성 (생성자 함수 이용)
  const std = new Student(
    Number(values[0]), 
    Number(values[1]), 
    Number(values[2]), 
    values[3]
  );
  
  // 생성된 학생 객체를 
  // 학생 객체 배열 studentList의 제일 마지막으로 추가
  studentList.push(std); // 배열.push(값) : 배열 마지막 요소로 추가
  
  // 추가 완료 후 input에 작성된 값 모두 제거
  inputGrade.value = "";
  inputBan.value = "";
  inputNumber.value = "";
  inputName.value = "";
  
  inputGrade.focus(); // 초점 맞추기
});

/* --------------------------------------------------------------- */

/* 
  학생 조회 버튼 클릭 시 
  studentList에 저장된 모든 내용을
  #tbody에 요소를 만들어서 출력
*/
const selectStudent = document.querySelector("#selectStudent");
const tbody = document.querySelector("#tbody");

selectStudent.addEventListener("click", () => {
  
  tbody.innerHTML = ""; // tbody 내부 내용 모두 삭제
  
  // 요소 생성 + innerText 추가 함수
  const createEl = (tag, text) => {
    const el = document.createElement(tag); // 요소 생성
    el.innerText = text; // 내용 추가
    return el; // 만들어진 요소 반환
  }
  
  /* 
    배열.forEach((item, index) => {
      // item : for문 반복 시 0 인덱스부터 차례대로 꺼낸 요소
      // index : 현재 반복 접근 중인 index 값
    }) 
  */

  // studentList를 반복 접근하면서 tr, th, td 요소 만들어 추가
  studentList.forEach((std, index) => {
    // std : studentList에서 하나씩 꺼낸 학생 객체
    // index : 현재 index
    
    // tr 만들기
    const tr = document.createElement("tr");
    const th = createEl("th", index+1);
    const td1 = createEl("td", std.name);
    const td2 = createEl("td", std.grade);
    const td3 = createEl("td", std.ban);
    const td4 = createEl("td", std.number);

    // tr 조립
    tr.append(th, td1, td2, td3, td4);

    // tbody에 tr 추가
    tbody.append(tr);
    
    // 이름이 작성된 요소(td1)가 클릭되었을 때
    td1.addEventListener("click", () => {
      alert(std.inform()); // inform 메서드 반환 결과 alert로 출력
    });
  });
  
  //#total에 인원수 출력
  document.querySelector("#total").innerText = `${studentList.length}명`;
  
});





/* JSON */
const checkJson = document.querySelector("#checkJson");
checkJson.addEventListener("click", () => {
  
  // JS 객체 생성
  const user = {
    "id" : "user01",
    "pw" :"pass01",
    "email" : "user01@naver.com",
    "phone" : "010-1234-1234"
  };
  
  console.log("user : ", user, typeof user);
  
  // JSON.stringify(JS객체) : JS객체 -> JSON(문자열)
  console.log("JSON.stringify(user) : ",
              JSON.stringify(user),
              typeof JSON.stringify(user)
  );
  const menu = '{"name" : "김밥","proce" : 4000}';
  console.log("menu : ", menu, typeof menu); // string
  
  // JSON.parse(JSON문자열) : JSON문자열 -> JS 객체
  console.log(JSON.parse(menu), typeof JSON.parse(menu));
  
  
  // 에어코리아 전국 미세먼지 농도 확인
  // 사용 예시
  
});