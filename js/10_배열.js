// ctrl + / : 한 줄 주석
// ctrl + shift + / : 범위 주석

/** 배열 선언 및 기초 사용법 */
function check1(){
  
  // 초기화 : 변수에 처음 값을 대입하는 것
  
  // 배열 선언
  const arr1 = new Array(); // 0칸 배열
  const arr2 = new Array(3); // 3칸 배열(요소 모두 비어있음)
  const arr3 = []; // 0칸 배열
  const arr4 = ['사과', '딸기', '바나나']; // 3칸 배열 + 초기화
  
  // 배열 확인
  console.log(arr1, arr2, arr3, arr4);
  
  // 배열 길이 확인 : 배열.length
  console.log(arr1.length);
  console.log(arr2.length);
  console.log(arr3.length);
  console.log(arr4.length);
  
  // 배열의 각 요소 접근 방법 -> 배열명[index]
  console.log(`arr4[0] : ${arr4[0]}`);
  console.log(`arr4[1] : ${arr4[1]}`);
  console.log(`arr4[2] : ${arr4[2]}`);
  
  // 존재하지 않는 index번째 요소 접근 -> 오류 X
  console.log(`arr4[3] : ${arr4[3]}`); // undefined
  
  // 배열 요소에 값 대입 : 배열명[index] = 값;
  arr2[0] = 123;
  arr2[1] = "27일은 임시공휴일";
  arr2[2] = true;
  // (여러 자료형 저장 가능 확인)
  
  // * 존재하지 않는 index에 값 대입 -> 가능
  //    + 배열 길이가 자동으로 증가
  arr2[3] = "가능?"; // 3번 인덱스에 대입됨(확인 완료)
  arr2[6] = "건너뛰기도 가능?";
  // 6번 인덱스에 대입됨(확인 완료)
  // 건너뛴 4, 번 인덱스가 비어있음 상태가 되어있음
  
  console.log("arr2 : ", arr2);
  
}

/** 배열 X for문 확인 1 */
function check2(){
  const weeks = ['월', '화', '수', '목', '금', '토', '일'];
  
  // weeks.length === 7
  // weeks의 시작 인덱스 번호 : 0
  // weeks의 마지막 인덱스 번호 : 6 === weeks.length -1
  // index는 0 이상의 정수
  // index는 1씩 증가
  for(let i = 0; i < weeks.length; i++){
    console.log(weeks[i]); // i번째 인덱스 요소 값 출력
  }
  
  console.log("------------");
  
  // 일토금목수화월 거꾸로 출력하기
  for(let i = weeks.length-1; i >= 0; i--){
    console.log(weeks[i]);
  }
}

/** 배열 X for문 확인 2 */
function check3(){
  /* prompt로 입력 받은 값을 배열 요소에 순차적으로 초기화 */
  const arr = []; // 0칸짜리 배열 -> 값 대입 시 자동으로 증가
  
  for(let i = 0; i < 4; i++){ // 0, 1, 2, 3 (4바퀴)
    arr[i] = prompt(`${i}번째 요소에 저장할 값 입력`);
  }
  console.log(arr); // 입력 확인
}

/** 배열 X for문 확인 3 */
/* 
  prompt를 이용해 숫자 5개를 입력 받아 배열에 저장한 후
  1) 저장된 값 출력
  2) 합계 출력
  3) 평균 출력
  4) 짝수번째(0,2,4) index 요소의 합계 출력
  5) 홀수번째(1,3) index 요소의 합계 출력
*/
function check4(){
  const arr = new Array(5);
  let sum = 0; // 저장된 값 합계
  
  // 1) 저장된 값 출력
  for(let i=0; i < arr.length; i++){
    arr[i] = Number(prompt(`${i}번째 요소에 저장할 숫자 입력`));
  }
  console.log(arr); // 확인
  
  // 2) 합계 출력
  for(let i=0; i < arr.length; i++){
    sum += arr[i];
  }
  console.log("합계 : ", sum);
  
  // 3) 평균 출력 (arr.length === 5 === 입력된 값의 개수)
  console.log("평균 : ", sum / arr.length);
  
  // 4) 짝수번째(0,2,4) index 요소의 합계 출력
  // 5) 홀수번째(1,3) index 요소의 합계 출력
  let oddSum = 0; // 홀수 합계 저장할 변수
  let evenSum = 0; // 짝수 합계 저장할 변수
  
  for(let i=0; i < arr.length; i++){
    if(i % 2 === 0) { // 짝수번째 인덱스인 경우
      evenSum += arr[i];
    } else { // 홀수번째 인덱스인 경우
      oddSum += arr[i];
    }
  }
  console.log("짝수 합 : ", evenSum);
  console.log("홀수 합 : ", oddSum);
}