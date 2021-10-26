//if 조건문
var a = 20;
var b = 40;
var c = 60;


/*
if(a > b) {
    console.log("a는 b보다 작다.");
}

if (a > b) {
    console.log("a는 b보다 크다.");
} else {
    console.log("a는 b보다 작다.");
}


if (a > b) {
    console.log("a는 b보다 크다.");
} else if(b > c) {
    console.log("b는 c보다 크다.");
} else if(a < c) {
    console.log("a는 c보다 작다.");
} else if(b < c) {
    console.log("b는 c보다 작다.");
} else {
    console.log("모든 조건을 만족하지 않는다.");
}




if(a !== b) {
    if(a > b) {
        console.log("a는 b보다 크다.");
    } else {
        console.log("a는 b보다 작다.");
    }
} else {
    console.log("a와 b는 같다.");
}





거짓이 되는 상황
false, "", 0, null, undefined

if(undefined) {
    console.log("참!!!!!!");
} else {
    console.log("거짓!!!!!");
}






삼항 연산자
var age = 15;

if(age >= 18) {
    console.log("성인");
} else {
    console.log("미성년자");
}

var result = (age >= 18) ? "성인" : "어린이";
console.log(result);







var userId = prompt("아이디를 입력해 주세요.");
var userPw = prompt("비밀번호를 입력해 주세요.");

console.log(userId);
console.log(typeof userPw);

if(userId === "Miri" && parseInt(userPw) === 12345 {
    alert ("로그인되었습니다.");
} else {
    alert("아이디 또는 비밀번호가 틀렸습니다.");
}




전역변수, 지역변수

var globalV = "전역변수";

function func() {
    var localV = "지역변수";

    console.log(globalV);
    console.log(localV);
}


func () ;

console.log(globalV);
console.log(localV);


var a = 10;
a = 100;



var gv = "전역변수";

function func() {
    gv = "지역변수";
    console.log(gv);
}


func();

console.log(gv);




var gv = "전역변수"

if(true) {
    var lv = "지역변수????";

    console.log(gv);
    console.log(lv);
}

console.log(gv);
console.log(lv);






var gv = "전역변수";
var aaa = "aaa";

function a() {
    console.log("a");
}





전역 스코프
var gv = "전역변수"

function func () {
    console.log(gv);
}

func ();

console.log(gv);





지역 스코프
function func () {
    var lv = "지역변수";
    console.log(lv);
}

func();

console.log(lv);




!!!!!!!!!!!!!!!!!!!!!!!함수는 서로의 스코프에 접근 불가!!!!!!!!!!!!!!!!!!!!!!!


function a () {
    var apple = "사과";
}


function b() {
    a(); //var apple = "사과";
    console.log(apple);
}

b():







var a = 10;

function func1() {
    
    var b = 20;

    function func2() {
        var c = 30;

        console.log(a + b + c);
    }

    func2();
    console.log(c);
}
func1();





렉시컬 스코핑

var a = 100;
a = 3.14;

var name = "Miri";

function func1 () {
    console.log(name);
}

function func2() {
    var name = "MR";

    func1 ();
}

func2 ();








함수 호이스팅

function func1() {
    console.log("Func1 함수다.");
}


func1();

function func1() {
    console.log("Func1 함수다.");
}

func1();


var func2 = undefined

var func2 = function () {
    console.log("Func2 함수다");
}

func2();








Math
console.log(Math);

var num1 = Math.abs(-3);
console.log(num1);

var num2 = Math.ceil(-0.3);
console.log(num2);

var num1 = Math.floor(10.9);
console.log(num3);

var num1 = Math.random();
console.log(num4);








parseInt(), parseFloat()
var str1 = "20.6";
var str2 = "3.14";

var num1 = parseInt(str1);
var num2 = parseInt(str2);

console.log(num1);
console.log(num2);









반복문
    고정값 : console.log(2 * );
    일정한 규칙을 갖고 있는 가변값  :1, 2, 3, 4, 5, 6, 7, 8, 9

    console.log(2 * 1);
    console.log(2 * 2);
    console.log(2 * 3);
    console.log(2 * 4);
    console.log(2 * 5);
    console.log(2 * 6);
    console.log(2 * 7);
    console.log(2 * 8);
    console.log(2 * 9);





while

var num = 1; //2, 3 ....10

while (num < 10) {
    2 * 1 = 2
    2 * 2 = 4
    2 * 3 = 6
    2 * 9 = 18
    console.log(2 * num);
}

console.log("반복문 종료");




do ~ while

var i = 12;

do {
    console.log(1);
    i++
} while ( i < 10 );





고정값
일정한 규칙을 갖고 있는 가변값
for

var i;
for (i = 1; i < 10; i++) {
    console.log( 2 * i );
}




중첩 반복문
중첩 for

2~9단
for (var i = 2; i < 10; i++) {

    for(var j = 1; j < 10; j++) {

        console.log(i * j);
    }
}







break, continue
for (var i = 1; i < 10; i++) {
    if( i === 5 ) {
        continue;
    }

    console.log(2 * i);
}







var arr = ['바나나', '사과', '수박'];
console.log(arr);
console.log(arr.lenth);

고정값 : console.log(arr[]);
가변값 : 0, 1, 2
console.log(arr[]);
console.log(arr[1]);
console.log(arr[2]);

for (var i = 0; i <arr.lenth; i++) {
    console.lon(arr[1]);
}




for ~ in
for (var i in arr) {
    console.log(i);
    console.log(arr[1]);
}



익명함수, 콜백함수
.addEventListener('click', function() {

})

arr.forEach(function(element, index) {

    console.log(element);
    console.log(index);

})




arr.map(function(element, index) {

    console.log(element);
    console.log();
})



var reslut = arr.map(function(element, index) {
   
    return element + " " + "10";

});

console.log(result);



var student = {
    name: "Kim",
    age: 20,
    skills: ["HTML", "CSS"],

    sum: function(num1, num2) {
        console.log(num1 + num2);
    }
}


for ~ in
student.name
student['name'];
for (var prop in student) {

    console.log(prop);
    console.log(student[prop]);

}











배열 : forEach(), map(), lenth


문자열 string 
Lenth
var txtLenth = "       HEllo World       "

    console.log(txtLenth.length);
    console.log(txtLenth);
    console.log(txtLenth.trim().length);

var result = prompt("이름을 임력해 주세요");
console.log(result);
console.log(txtLenth.trim().length);







var str = "nice to meet you to to";

    console.log(str.length);
    console.log(str.charAt(str,length - 1));
    console.log(str.slice(2));

    console.log(str.split('/'));

    console.log(str.replace('Nice', "Hello"));

    console.log(str.indexOf('to'));

    console.log(str.toUpperCase());
    console.log(str.toLowerCase());






var search = prompt ("검색어를 입력해 주세요");

if(search.toLocaleLowerCase() ===  "apple") {
    console.log("사과 데이터를 출력한다.");
} else {
    console.lof ("false");
}






var arr = ["사과", "배", "수박"];

    console.log(arr.length);

    arr.push("포도", "토마토");
    console.log(arr);

    arr.unshift("포도");
    arr.unshift("토마토");
    console.log(arr);

    arr.pop();
    arr.pop();

    console.log(arr);

arr.shift();
console.log(arr);
*/




var arr1 = ["사과", "배", "바나나"];
var arr2 = ["노트북", "마이크", "키보드"];

    //var str1 = arr1.joim(' / ');
    //console.log(str1);

var merge = arr1.concat(arr2);

console.log(merge);








































































































































