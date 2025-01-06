/* 
    for( [1]초기식 ; [2]조건식 ; [4]증감식 ){

            // [3] 조건식이 true일 경우 수행할 코드;
        }

        * 처음 for문 수행될 때만 [1]초기식 수행
        -> 두 번째 반복부터는 [2], [3], [4]만 반복

*/

/** 콘솔에 12345 출력하기 */
function check1(){
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
    
    console.log("---------------------");

    /* for문 버전 */

    // num 값이 1부터 5까지 1씩 증가하는 동안 반복
    for( let num = 1 ; num <= 5 ; num++ ){
        console.log(num);
        

        // [초기식] let num = 1;
        // -> 1이 저장된 변수 num을 선언

        // [조건식] num <= 5
        // -> num 변수에 저장된 값이 5 이하면 true 
        // -> 반복 O == for문 {} 내부 코드를 수행하라
        
        // -> num 변수에 저장된 값이 5 이하가 아니면 false
        // -> 반복 X == for문 {} 내부 코드를 수행하지 마라

        // [증감식] num++
        // -> num 변수에 저장된 값을 반복 때마다 1증가

    
    }
}


/** 콘솔에 1부터 10까지 1씩 증가하며 출력하기 */
function check2(){
    for (let num = 1; num <= 10 ; num++){
        console.log(num);
    }
}

/** 콘솔에 5부터 13까지 1씩 증가하며 출력하기 */
function check3(){
    for (let num = 5; num < 14 ; num++){
        console.log(num);
    }
}

/** 1부터 7까지 1씩 증가한 문자열을 한 줄로 출력하기 */
function check4(){
    let result = ""; // 결과를 저장할 변수에 ""(빈칸) 대입

    for (let num = 1 ; num < 8 ; num++){
        result += num; // result = result + num;
                        // '' = '' + 1
                        // '1' = '1' + 2
                        // '12' = '12' + 3
    }

    console.log(result); // '1234567'
}

/** 4부터 11까지 1씩 증가한 문자열을 한 줄로 출력하기 */
function check5(){
    let result = "";
    // result에 ""(빈칸)을 대입하는 이유
    // -> 변수 선언 시 아무런 값도 대입하지 않으면 undefined
    // -> undefined는 산술 연산의 대상이 될 수 없음
    // -> 산술 연산을 수행하면 NaN(Not a Number) 결과가 반환됨

    for (let num = 5 ; num < 12 ; num++){
        result += num; // result = result + num;
    }

    console.log(result); // '4567891011'
}

/** 1부터 10까지 1씩 증가한 숫자의 합 구하기 */
// check4, check5번과 유사하지만 저장 타입에 따라서 결과가 달라짐 (string / number)
function check6(){
    let sum = 0; // 합계를 저장할 변수 선언, 0 대입
                // 더하거나 뺐을 때 영향이 없는 숫자 0 대입

    for (let num = 1; num < 11; num++) {
        sum += num;
    }

    console.log(sum);
}

/** 입력 받은 값 사이 정수 값들의 합 구하기 */
function check7(){
    // 모든 값 입력되어있고
    // 입력 1이 입력 2보다 작다고 가정

    const a = Number(document.getElementById("input7a").value);
    const b = Number(document.getElementById("input7b").value);

    let sum = 0;

    for (let num = a; num <= b; num++) {
        sum += num;
    }

    alert(`${a}부터 ${b}사이 정수 합 : ${sum}`);
}

/** 1부터 10까지 2씩 증가한 숫자 출력+합계 구하기 */
function check8(){
    let sum = 0; // 합계
                         // num = num + 2
    for(num = 1; num < 11 ; num += 2){
        console.log(num);
        sum += num;
    }
    console.log("합계 : ", sum);
}

/** 3부터 30까지 3의 배수만 출력하기 */
function check9(){
    // 1) 증감식 변경
    let result = "";

    for(num = 3; num < 31 ; num += 3){
        result += num + " ";
    }
    console.log(result);
    
    
    // 2) for문 + if문
    let result2 = "";
    
    for(let num = 3; num < 31; num++){ // num 1씩 증가
        if(num % 3 === 0){ // 3으로 나눴을 때 나머지가 0 === 3의 배수
            result2 += num + " ";
        }
    }
    console.log(result2);
}

/** 입력 받은 범위 내 지정된 수의 배수 출력+합계 구하기 */
function check10(){
    const a = Number(document.getElementById("start10").value);
    const b = Number(document.getElementById("end10").value);
    const c = Number(document.getElementById("multiple10").value);

    let sum = 0;
    let result = "";

    for(num = a; num <= b; num ++){
        if (num % c === 0) {
            sum += num;
            result += num + " ";
            
        }
    }
    console.log(result);
    console.log("합계 : ", sum);
}