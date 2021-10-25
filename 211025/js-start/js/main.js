//comic 박스 생성 = 변수 선언
//var comic;

//코믹박스 안에 원피스 데이터 할당한 상태 -> 변수 초기화
//comic = "원피스";

//console.log(comic);



//변수선언과 동시에 초기화 진행
//var apple = "사과";


//변수동시선언
/*
var a;
var b;
var c;
*/

//var a,b,c;


//변수동시초기화

/*
var d = 10;
var e = 20;
var f = 30;
*/


//var d=10, e = 20, f = 30;




//모든 변수는 선언과 동시에 undefined 자동 할당.
//var computer;

//console.log(computer);



/*
var house;

house = "집";
console.log(house);


house = "아파트";
console.log(house);
*/



/*
var house;
console.log(house);

//undefined -> 집
house="집"
console.log(house);
*/




/*
변수명 작성요령

캐멀(Camel) 케이스 <- 주로 사용하는 케이스.
var mathScoreStudent = 10;

스네이크 케이스
var math_score_student = 10;
*/

/* 변수명 지을 때 주의점
1. var math-score-student = 100 ; (x)
2. [특수부호] var _math; var $math; _, $만 사용 가능
3. var apple10;
   var 10apple; 숫자가 먼저 나오는 것도 X
4. 변수명 최대한 자세히 작성.
*/




//데이터 타입 = 데이터의 종류

/* -> 원시타입 1 ~ 4까지
1. 문자열 (String) : 주로 검정 텍스트로 출력.
    var msg1 = "Hello World";
    var msg2 = 'Welcome';

    console.log(msg1);
    console.log(msg2);

    ex) she is girl / she's girl
    var msg4 = "she is girl";
    var msg5 = 'she\'s girl';

    console.log(msg4);
    console.log(msg5);
*/

/*2. 숫자 (Number) : 파랑 텍스트로 출력
    var num1 = 10;
    var num2 = -10;
    var num3 = 3.14;
    var num4 = -3.14;

    console.log(num1);
    console.log(num2);
    console.log(num3);
    console.log(num4);

    console.log(num1 + num2);
    console.log(num1 + num4)


    //연산자
    var a = 20;
    var b = 10;

    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);
    console.log(a % b);


    //문자열
    var str1 = "20";
    var str2 = "10";

    console.log(str1 + str2);
    console.log(str1 - str2);
    console.log(str1 * str2);
    console.log(str1 / str2);
    console.log(str1 % str2);

    var firstName = "Miri"
    var lastName = "Kim";

    console.log(firstName + "     " + lastName);

    var str11 = "현재 시간은 ";
    var time = 10;
    var str12 = "시 입니다.";

    console.log(str11 + time + str12);




 // ++, -- 연산자
    var num10 = 10;
    console.log(--num10);
    console.log(--num10);

    console.log(++num10);
    console.log(++num10);


 // +=. -=, *=, /=, %= 연산자
    var num20 = 20;

    //num20 = num20 + 10;
    num20 += 10;

    console.log(num20);


// 비교연산자 >, <, ==, ===, <=, >=, !=, !==
    var a = 10;
    var b = 20;
    var c = 30;

    console.log(a > b);
    console.log(a < b);
    console.log(a >= b);
    console.log(a <= b);

    console.log(a == b);
    console.log(a === b);

    console.log(a != b);
    console.log(a !== b);


    var num10 = 10;
    var num20 = 20;

    var str10 = "10"
    var str20 = "20"

    console.log(num10 === str10);
   
    console.log(num20 !== str20);
    
// 논리 연산자 : And (&&), Or(||)
    var num30 = 30;
    var num40 = 40;
    var num50 = 50;

    console.log(num30 === num40 && num30 === num50 && num40 !== num50);
    console.log(num30 === num40 || num30 === num50 || num40 > num50);
*/




/*3. 논리 (Boolean) : 

    console.log(true);
    console.log(false);
    console.log(1 === 2);
    console.log(10 < 20);
    console.log(10 === 10 || 20 === 30);

    var bool = true;
    bool = false;
*/






/*4. Undefined, Null 
    var n = null;
    //null : 변수 초기화로 명시적으로.. 빈 값을 변수 안에 할당한 상태 (비어있는 데이터.)

    var u;
    //undefined : 변수를 선언만 한 상태.

    console.log(n);
    console.log(u);

    null과 undefined 차이점
    console.log(typeof 10);
    console.log(typeof "Hello World");

    console.log(typeof null); ---> 태생적 버그
    console.log(typeof undefined);

    console.log(null == undefined);
    console.log(null === undefined);

    !
    console.log(!true);
    console.log(!false);

    console.log(!null);
    console.log(!!null);

    console.log(!undefined);
    console.log(!!undefined);

    console.log(10 + null);  null -> 0
    console.log(10 + undefined); NaN = Not A Number
*/






/* 참조타입 5 ~ 7까지
5. 함수 (Function)

    console.log(10 + 10);
    console.log(20 + 30);
    console.log(5 + 10);

임의 숫자 두개를 전달받아 덧셈 기능을 만들고 싶다. = 함수


함수 선언 = 기능을 만든것
function sum() {
    console.log("Hello");
    console.log(10 + 10)
}

함수 호출 = 함수 스위치 on
sum();
sum();
sum();
sum();
sum();
sum();
sum();



Parameter(매개변수) , Argument (인수)

    매개변수 = num1, num2
    function sum(num1, num2) {
        
        console.log(num1 + num2);

    }

    //인수 : 호출시 전달되는 값
    sum(10, 20);
    sum(100, 50)


    function fullName(firstName, lastName) {
        console.log(firstName + " " + lastName);
    }

    fullName("Miri", "Kim");

    function area(width, height) {
        var result = width * height;
        console.log(result);
    }

    area(10);



    function test(a) {
        console.log(a);
    }

    test(10);
    test("Hello");
    test(true);
    test(null);

    test(function a() {});
    test([10, 20, 30]);
    test({name: "Miri"});


    //Return
    function sum(num1, num2) {
        //console.log(num1 + num2);
        return num1 + num2;
    }

    var result = sum(10, 20); // 함수 호출 = 30, result = 30
    console.log(result);




    function area(hor, ver) {
        return hor * ver;
    }

    var volume = area(10, 20) * 100; //200
    console.log(volume);
*/




/*6. 배열 (Array)
 
var banana = "바나나";
var apple = "";
var melon = "";

var fruit = ["바나나", "사과", "멜론"];
console.log(fruit);

//index
console.log(fruit[0]);
console.log;(fruit[2]);

fruit[2] = "수박";
console.log(fruit);



var arr = [
    10, 
    "Hello", 
    true, 
    null, 
    undefined, 
    function a() {}, 
    [10, 20, 30]
    {name: "Miri"}
];

var num = [1-, 20, 30, 3.14];




//배열 안에있는 배열 데이터에 접근하는 방법

var score = [[10, 20, 30], [100, 200, 300]];

console.log(score);
console.log(score[1]);
console.log(score[1][2]);

*/







/*7. 객체 (Object)

이름, 나이, 스킬, 성별
key - value = property

var student = {
    name : "Miri",
    age : 25,
    skills: ["HMTL", "CSS"]
};

console.log(student);
console.log(student.name);
console.log(student['name']);
console.log(student.skills[1]);

student.age = 100;
console.log(student);



student.gender = "여자";

console.log(student);





var student = {
    name : "Miri",
    age : 25,
    skills: ["HMTL", "CSS"]

    test1: true,
    test2: null,
    test3: undefined,
    test4: {color: "red"},


    //매서드
    sum: function (num1, num2) {
        return num1 + num2;
    }
};


var result = student.sum(10, 20);
console.log(result);

student.sum(100, 200);
console.log("Hello World");

*/





/* 
#원시타입과 참조타입의 차이점

1. 원시타입
var str1 = "Hello World";
var str2 = str1;

str1 = "Nice";
str2="Nice";

console.log(str1);
console.log(str2);


2. 참조타입
var obj1 = {name: "Miri"};
var obj2 = obj1;

obj1.name = "Miri"
obj2.name = "Miri"

console.log("obj1");
console.log("obj2");
*/




/*

var color = [ 'yellow', 'green', 'pink', '#dc143c', 'rgba(123, 123, 123, 0.5'];

var bg = document.getElementById('color-bg');
var bg = document.getElementById('btn');


btn.addEventListener('click', function() {
    console.log("Hello");
})



btn.addEventListener()

콜백 함수 : 호출 기호 없이 특정 조건 하에 호출되는 함수
btn.addEventListener('click', function () {
    0 ~ 4
    var random = Math.floor(Math.random() * 5);
    console.log(random);
    console.log(colors[random]);
    
    bg.style.backgroundColor = colors[random];
})

*/





//var, typeof, function, null, undefined, false, true : 예약어

//var var;
//var function;



console.log("Main")

var mainVar = "Main Var";

function mainFunc() {
    console.log("main Func")
}






