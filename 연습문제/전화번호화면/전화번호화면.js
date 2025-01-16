/* 누른 번호 실시간 출력 */
const numbers = document.querySelectorAll(".number"); // number
const inNumber = document.querySelector(".in-number") // 실시간 번호 입력칸

const rightDiv = document.querySelector(".right"); // 전화번호 목록

const add = document.querySelector(".add"); // 전화번호 추가 버튼
const reset = document.querySelector(".reset"); // 초기화 버튼

// 번호 눌렀을 때 누적해서 출력
for(let num of numbers){
  num.addEventListener("click", ()=>{
    inNumber.append(num.innerHTML);
  });
}

// 누른 번호 초기화
reset.addEventListener("click", ()=>{
  inNumber.innerText = "";
});

/* 
  추가 버튼 클릭 -> 전화번호 목록의 마지막에 생성해서 추가
  실시간 번호 입력칸 -> 지워져야 함
*/
add.addEventListener("click", ()=>{
  const div = document.createElement("div"); // phone number div 추가
  div.className = "phone-number";
  
  const spanNum = document.createElement("span"); // 번호 span 추가
  spanNum.className = "phone";
  spanNum.innerText = inNumber.innerText;
  
  
  const star = document.createElement("span"); // 별 span 추가
  star.className = "star";
  star.innerText = "☆";
  
  // 별 클릭 -> 색 변환
  // 전화번호 클릭 -> 색 변환
  star.addEventListener("click", ()=>{
    if(star.innerText === "☆"){
      star.innerText = "★";
      star.style.color = "orange";
      spanNum.style.color = "red"; // 전화번호
      return;
    }
    star.innerText = "☆";
    star.style.color = "black";
    spanNum.style.color = "black"; // 전화번호
  });
  
  
  const removeX = document.createElement("span"); // x span 추가
  removeX.className = "remove";
  removeX.innerHTML = "&times";
  
  // x버튼 클릭 -> 한 줄 삭제
  removeX.addEventListener("click", (e)=>{
    e.target.parentElement.remove(); // 한 줄(.row) 제거
  });
  
  
  // 전화번호 목록 div 조립
  div.append(spanNum, star, removeX);
  rightDiv.append(div);
  
  // 누른 번호 초기화
  inNumber.innerText = "";
});


