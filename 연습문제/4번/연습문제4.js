/* 
  가위 : scissors
  바위 : rock
  보 : paper
*/

const startBtn = document.querySelector("#startBtn");
let input;
let sum = 0;

startBtn.addEventListener("click", () => {
  if(input = prompt("진행할 판 수를 입력하세요.") !== null) {
    sum += Number(input);
  }else{
    alert("숫자 입력 후 확인을 눌러주세요.");
    return;
  }
  alert(sum);
  
});