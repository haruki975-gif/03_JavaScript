/*
  식당명 클릭 -> value 지우기
  입력한 값이 없으면 그대로 "식당명을 입력하세요" 넣기
*/
const title = document.querySelector("#r-name");

// 식당명 클릭 했을 때
title.addEventListener("click", ()=>{
  
  if(title.value == "식당명을 입력하세요"){
    title.value = "";
    title.style.cursor = "text"; // 마우스 커서 pointer -> text
  }
});

// 식당명 포커스아웃 했을 때
title.addEventListener("focusout", ()=>{
  
  if(title.value == ""){
    title.value = "식당명을 입력하세요";
    title.style.cursor = "pointer"; // 마우스 커서 text -> pointer
  }
});


const mod = document.querySelector(".mod"); // 수정 버튼
const comp = document.querySelector(".comp"); // 종료 버튼
const hideDiv = document.querySelector(".hideDiv"); // 숨기는 버튼 그룹

const rdiv = document.querySelector(".rdiv"); // 메뉴판 전체 div
const add = document.querySelector(".add"); // 추가 버튼

const del = document.querySelector(".del"); // 삭제 버튼

/* 
  수정 클릭
  -> 체크박스 생성
  -> 메뉴명, 가격이 입력/수정 가능(input)
  -> 추가/삭제/종료 버튼 생성
*/
mod.addEventListener("click", ()=>{
  
  if(hideDiv.classList.contains("hidden")){
    hideDiv.classList.remove("hidden");
    mod.classList.add("hidden");
  }
  
  // 메뉴명 생성
  const divs = document.querySelectorAll(".rest-content div:nth-child(2)");
  for(let div of divs){
    const input = document.createElement("input");
    input.className = "name";
    input.value = div.innerText;
    
    if(div.innerText === "미입력"){
      input.value = "";
      input.placeholder = "메뉴명";
    }
    
    div.after(input);
    div.remove();
  }
  
  // 가격 생성
  const divs2 = document.querySelectorAll(".rest-content div:nth-child(3)");
  for(let div of divs2){
    const input = document.createElement("input");
    input.className = "price";
    input.value = div.innerText;
    
    if(div.innerText === "0원"){
      input.value = "";
      input.placeholder = "가격";
    }
    
    div.after(input);
    div.remove();
  }
  
  // 체크박스 생성
  const checkbox = document.querySelectorAll(".check");
  for(let chk of checkbox){
    const input = document.createElement("input");
    input.type = "checkbox";
    input.className = "check";
    
    chk.append(input);
  }

});


/* 
  종료 클릭
  -> 체크박스 제거
  -> 메뉴명, 가격 수정 불가
  -> 수정 버튼만 남기고 추가/삭제/종료 버튼 삭제
*/
comp.addEventListener("click", ()=>{
  
  if(!hideDiv.classList.contains("hidden")){
    hideDiv.classList.add("hidden");
    mod.classList.remove("hidden");
  }
  
  // 메뉴명 제거
  const inputs = document.querySelectorAll(".rest-content input:nth-child(2)");
  for(let input of inputs){
    const div = document.createElement("div");
    div.className = "name";
    div.innerText = input.value;
    
    if(input.value.trim() === ""){
      div.innerText = "미입력";
    }
    
    input.after(div);
    input.remove();
  }
  
  // 가격 제거
  const inputs2 = document.querySelectorAll(".rest-content input:nth-child(3)");
  for(let input of inputs2){
    const div = document.createElement("div");
    div.className = "price";
    div.innerText = input.value;
    
    if(input.value.trim() === ""){
      div.innerText = "0원";
    }
    
    input.after(div);
    input.remove();
  }
  
  // 체크박스 제거
  const chks = document.querySelectorAll(".check");
  for(let chk of chks){
    chk.remove();
  }
});

/* 메뉴 추가하기 */
add.addEventListener("click", ()=>{
  
  // 추가 개수 제한(15개)
  const rcon = document.querySelectorAll(".rest-content");
  
  const div = document.createElement("div"); // .rest-content
  div.className = "rest-content";
  
  const chk = document.createElement("input"); // 체크박스
  chk.className = "check";
  chk.type = "checkbox";

  const menu = document.createElement("input"); // 메뉴명
  menu.className = "name";
  menu.type = "text";
  menu.placeholder = "메뉴명";
  
  const price = document.createElement("input"); // 가격
  price.className = "price";
  price.type = "text";
  price.placeholder = "가격";
  
  // 최대 15개 제한 (count보다는 length)
  if(rcon.length >= 15){
    alert("더 이상 메뉴를 추가할 수 없습니다.");
    return;
  }
  
  // div 조립
  div.append(chk, menu, price);
  rdiv.append(div);
});


/* 체크된 메뉴 삭제하기 */
del.addEventListener("click", ()=>{
  const menus = document.querySelectorAll(".check:checked"); // 체크된 메뉴만 삭제
  
  for(let menu of menus){
    menu.parentElement.remove();
  }
});