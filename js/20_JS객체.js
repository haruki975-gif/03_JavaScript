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