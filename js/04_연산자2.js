/** 비교 연산자 확인 */
function check1(){
    const num1 = 100; // number type
    const num2 = 100;
    const num3 = 999;

    const str1 = "100"; // string type
    const str2 = "100";
    const str3 = "999";


    console.log("동등, 동일 비교 확인");
    console.log("1. 동등 비교(==, !=)");
    console.log("num1 == num2 : ", num1 == num2); // true
    console.log("num1 == num3 : ", num1 == num3); // false
    console.log("num1 != num3 : ", num1 != num3); // true
    
    // number, string 동등 비교
    console.log("num1 == str1 : ", num1 == str1); // true

    // string끼리 비교
    console.log("str1 == str2 : ", str1 == str2); // true
    console.log("str1 == str3 : ", str1 == str3); // false
    
    console.log("-----------------------------");

    console.log("2. 동일 비교(===, !==)");

    // 숫자끼리 값 비교
    console.log("num1 === num2 : ", num1 === num2); // true
    console.log("num1 === num3 : ", num1 === num3); // false
    console.log("num1 !== num3 : ", num1 !== num3); // true

    // number, string 동일 비교
    console.log("num1 === str1 : ", num1 === str1); // false
    // -> 왜? 자료형이 다름

    // 초과/미만/이상/이하
    console.log("num1 > num2 :", num1 > num2); // false
    console.log("num1 >= num2 :", num1 >= num2); // true   
}


/** 홀짝 판별기 */
function oddEvenCheck(){
    const input1 = document.getElementById("input1");

    // #input1에 작성된 값 얻어와 number 타입으로 변환해 변수 저장
    const val = Number(input1.value);

    // 짝수 == 2의 배수 == 2로 나눴을 때 나머지가 0인 수
    // 홀수 == 2의 배수-1 == 2로 나눴을 때 나머지가 0인 수
    console.log("짝수 맞음? " + (val % 2 === 0) );
    console.log("홀수 맞음? " + (val % 2 === 1) );
    
}