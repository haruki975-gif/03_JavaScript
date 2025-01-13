/* 클릭한 div 태그 안의 숫자를 append로 #result에 추가하기 */
const divs = document.querySelectorAll(".number"); // div 태그 안의 숫자
const result = document.querySelector("#result"); // 결과창
let cnt = 0; // 버튼 클릭 수

for(let div of divs){
  div.addEventListener("click", () => {
    // div 안에 있는 숫자 콘솔에 찍어보기
    // console.log(div.innerHTML);
    
    // 버튼 클릭 카운트
    cnt += 1;
    
    // 클릭 숫자 10자 제한
    if(cnt > 10){
      alert("10자까지만 입력할 수 있습니다.");
      return;
    }
    
    result.append(div.innerHTML);
  });
}

/* 초기화 버튼 */
const reset = document.querySelector("#reset");

reset.addEventListener("click", () => {
  // 클릭 횟수 초기화
  cnt = 0;
  
  result.innerText = ""; // innerText 사용!!!
});
