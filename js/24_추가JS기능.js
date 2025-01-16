/** for in 확인하기 */
const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click",()=>{
  
  // JS 객체 생성
  const obj = {
    menu : "제육볶음",
    price : 8000,
    option : {
      spicy : ["기본", "안맵게", "아주맵게"],
      rice : ["기본", "적게", "많이"]
    }
  };
  
  // for in 구문
  for(let key in obj){
    // console.log(key); // 객체의 key만 출력
    
    // 객체에 저장된 값 얻어오기
    // 1) 객체명.key
    // 2) 객체명["key"]
    
    // 객체의 저장된 모든 값 출력하기
    console.log(`obj[${key}] : ${obj[key]}]`);
    
    /* 만약 꺼내온 key가 option인 경우 */
    if(key === "option"){
      for(let key2 in obj[key]){
        
        // obj[key] === obj["option"]{
        //    spicy : ["기본", "안맵게", "아주맵게"],
        //    rice : ["기본", "적게", "많이"]  
        // }
        
        // key2 === rice, spicy
        
        // obj[key][key2] === obj["option"]["rice"]
        console.log(key2, obj[key][key2]);
      }
    }
  }
  
  console.log(obj["menu"]);
  // menu가 문자열이 아닌 변수명으로 인식되어 오류!!
  // -> 해결 방법 : 문자열로 인식할 수 있게 "", ''로 감싸주기
  // (참고 : JS 객체의 key는 모두 string 자료형이다)
});


// ----------------------------------------------------------

/** 구조 분해 할당 확인 */
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", ()=>{
  
  
  // [배열 + 구조 분해 할당]
  const fruits = ['사과', '바나나', '오렌지'];

  // const first = fruits[0] // '사과'
  // const second = fruits[1] // '바나나'
  // const third = fruits[2] // '오렌지'

  // / 위의 변수 선언/대입 구문을 구조 분해 할당으로 변경
  const [first, second, third] = fruits;
  
  console.log("first : ", first);
  console.log("second : ", second);
  console.log("third : ", third);
  
  // ------------------------------------------------------
  
  // [객체 + 구조 분해 할당]
  const person = {name : "박무현", age : 35, height : 175};
  
  // 기존 방법
  // const name = person.name;
  // const age = person.age;
  // const height = person.height;
  
  // 구조 분해 할당
  const {name, age, height} = person;
  console.log("name : ", name);
  console.log("age : ", age);
  console.log("height : ", height);
  

});