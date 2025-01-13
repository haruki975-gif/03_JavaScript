const btn1 = document.querySelector("#btn1"); // 적용하기 버튼
const result = document.querySelector("#result"); // 적용창

const inputWidth = document.querySelector("[name = input-width]"); // 너비
const inputHeight = document.querySelector("[name = input-height]"); // 높이
const inputFontSize = document.querySelector("#font-size"); // 글자크기
const textArea = document.querySelector("#text-area"); // 출력문자열

const fontColor = document.querySelector("#font-color"); // 글자색
const bgColor = document.querySelector("#background-color"); // 배경색

// 처음 HTML 로딩 시 체크된 요소가 없어서 NULL이 저장된 상태로 고정
// const fw = document.querySelector("[name = bold-btn]:checked"); // 굵기

// 너비
btn1.addEventListener("click", () => {
  if(inputWidth.value.trim().length > 0){
    result.style.width = inputWidth.value+"px"; // 너비
  }
  
  if(inputHeight.value.trim().length > 0){
    result.style.height = inputHeight.value+"px"; // 높이
  }
  
  if(inputFontSize.value.trim().length > 0){
    result.style.fontSize = inputFontSize.value+"px"; // 글자 크기
  }
  
  if(textArea.value.trim().length > 0){
    result.innerText = textArea.value; // 출력 문자열 
  }
  
  result.style.color = fontColor.value; // 글자색
  result.style.backgroundColor = bgColor.value; // 배경색
  
  /* 왜 이벤트 핸들러 안에 요소 선택 구문을 작성했을까?
    -> 클릭되는 시점에 체크된 요소를 얻어오기 위해서
  */
  const fw = document.querySelector("[name = bold-btn]:checked"); // 굵기
  if(fw != null){
    result.style.fontWeight = fw.value;
  }
  // name 속성이 bold-btn인 요소 중 체크가 되어있는 요소 1개만 선택
  // :checked -> 체크된 요소만 선택(상태 선택자)
  
  const row = document.querySelector("[name = 'row-btn']:checked"); // 가로정렬
  const col = document.querySelector("[name = 'col-btn']:checked"); // 세로정렬
  
  if(row != null){
    result.style.justifyContent = row.value;
  }
  
  if(col != null){
    result.style.alignItems = col.value;
  }
  
});
