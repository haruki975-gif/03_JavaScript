
const boxs = document.querySelectorAll(".box"); // 색상 채워지는 영역
const inputs = document.querySelectorAll(".color-input"); // 색상 입력하는 영역
// const radios = document.getElementsByName(".opacity-btn > input"); // 불투명도 버튼
const radios = document.querySelectorAll("[name=opacity-btn]");

for(let i = 0; i < inputs.length; i++){
  inputs[i].addEventListener("keyup", function(){
    boxs[i].style.backgroundColor = inputs[i].value;
  });
}

// radio 버튼 + change 이벤트

// * change 이벤트 :
// input에 작성된 값 또는 체크박스/라디오 체크 여부가 변했을 때
for(let i = 0; i < radios.length; i++){
  
  // 라디오 버튼의 값이 변했을 때를 감지
  radios[i].addEventListener("change", function(e){
    // e : 이벤트 객체(이벤트 관련 정보가 담겨있음)
    // console.log(e);
    
    // radio 버튼은 체크 X -> 체크 O
    // change 이벤트가 감지된다!!!
    
    // e.target : 이벤트가 발생한 요소
    
    // 체크된 라디오 버튼의 value를 얻어오기
    console.log(e.target.value);
    
    // 모든 .box 요소의 opacity 값으로 체크된 값을 대입
    
    /* 향상된 for문 :
      - 배열에 저장된 모든 요소를 순차 접근하는 용도의 for문
      - 순차 접근 상황이 빈번히 발생하여
      - 작성법을 간단하게 변화시킴
      
      [for of 구문]
      for (let 변수명 of 배열명){
        변수명;
      }
      - for문이 반복될 때마다
        배열 내 요소를 0번부터 1개씩 꺼내서
        of 앞의 변수에 대입하는 for문
    */
    for(let box of boxs){
      // for문이 반복될 때마다
      // boxs[0] ~ boxs[4]까지
      // 1개씩 차례대로 box 변수에 대입
      
      box.style.opacity = e.target.value;
    }
    // boxs.style.opacity = radios[i].target.value;
  });
}



