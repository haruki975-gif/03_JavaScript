/* 과일 */
const btn = document.querySelector("#btn"); // count 버튼
const result = document.querySelector("#result"); // 결과창

btn.addEventListener("click", () => {
  // 방법 1)
  // for(fruit of fruits){
  //  if(fruit.checked){ // 체크되었는지 확인
  //  }
  // }
    
    
  // 방법 2)
  // checkbox가 체크된 값만
  const fruits = document.querySelectorAll(".fruit:checked");
  
  let content = ""; // 결과창
  let sum = 0; // 총합
  
  for(let fruit of fruits){
    // 체크된 체크박스의 부모 요소를 찾은 후
    // 부모 요소의 모든 자식 요소 중 2번(span), 3번(input) 인덱스 요소 접근
    // const parent = fruit.parentElement;
    // const fruitName = parent.children[1].innerText; // 과일 이름
    // const price = parent[2].children.innerText; // 작성된 가격
    // const cnt = parent[3].children.value; // 입력된 개수
    // let str = "";
    
    
    // nextElementSibling -> checkbox 다음 요소
    const fruitName = fruit.nextElementSibling.innerText; // 과일 이름
    const fruitPrice = fruit.nextElementSibling.nextElementSibling.innerText; // 가격
    const fruitCount = fruit.nextElementSibling.nextElementSibling.nextElementSibling.value; // 개수(input->value로)
    
    sum += Number(fruitPrice) * Number(fruitCount); // 합계 = 가격 * 개수
    content += `${fruitName} ${fruitCount}개 `
  };
  
  content += `총합 ${sum}원`
  result.innerText = content;
});