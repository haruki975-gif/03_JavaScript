/* 과일 */
const btn = document.querySelector("#btn"); // count 버튼
const result = document.querySelector("#result"); // 결과창

btn.addEventListener("click", () => {
  // checkbox가 체크된 값만
  const fruits = document.querySelectorAll(".fruit:checked");
  
  let content = ""; // 결과창
  let sum = 0; // 총합
  
  for(let fruit of fruits){
    // nextElementSibling -> checkbox 다음 요소
    const fruitName = fruit.nextElementSibling.innerText; // 과일 이름
    const fruitPrice = fruit.nextElementSibling.nextElementSibling.innerText; // 가격
    const fruitCount = fruit.nextElementSibling.nextElementSibling.nextElementSibling.value; // 개수(input->value로)
    
    sum += fruitPrice * fruitCount; // 합계 = 가격 * 개수
    content += `${fruitName} ${fruitCount}개 `
  };
  
  content += `총합 ${sum}원`
  result.innerText = content;
});