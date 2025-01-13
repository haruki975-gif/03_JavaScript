/* 계산하기 */
const calc = document.querySelector(".calc");
calc.addEventListener("click", () => {
  const inputs = document.querySelectorAll(".input-number"); // 숫자 입력칸
  const result = document.querySelector(".result"); // 결과칸
  
  let sum = 0; // input에 적은 숫자 합계
  for(let input of inputs){
    sum += Number(input.value);
  }
  result.innerText = sum; // 결과란에 합계 표시
});


/* 추가하기 */
const container = document.querySelector(".container"); // 감싸는 요소
const cBtn = document.querySelector(".cBtn"); // 생성 버튼

cBtn.addEventListener("click", () => {
  const num = document.querySelector("#num-input"); // input 생성 개수
  
  // 입력한 숫자 만큼 input 생성
  for(let i = 0; i < num.value; i++){
    const div = document.createElement("div"); // div 생성
    div.className = "row";
    
    const input = document.createElement("input"); // input 생성
    input.type = "number";
    input.className = "input-number";
    
    div.append(input);
    container.append(div);
  }
});
