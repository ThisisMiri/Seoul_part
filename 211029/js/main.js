
/*

//selector (선택자)

var header = document.getElementsByTagName("header");
var services = document.getElementById("services");
var container = document.getElementsByClassName("container");

//console.log(header);
//console.log(services);
//console.log(container);


var services = document.getElementById('services');
var serviceContainer = services.getElementsByClassName("contsiner");

console.log(serviceContainer);




var container = document.querySelectorAll(".container");
console.log(container);

for(var i = 0; i <container.length; i++) {
    console.log(container[1]);

    container[i].style.backgroundColor = "yellow";
}






var header = document.querySelectorAll('.masthead');

console.log(header.innerHTML);
console.log(header.outerHTML);

console.log(typeof header.innerHTML);
console.log(typeof header.outerHTML);

header.innerHTML = "<h1>Hello World</h1>";








//textcontent
var heading = document.querySelector('masthead-heading');

//console.log(heading.textContent);
//heading.textContent = "Nice!!!!!!!";

//heading.textContent = "<em>Hello</em> World";
heading.innerHTML = "<em>Hello</em> World";








//innerText
var heading = document.querySelector('.masthead-heading');

console.log(heading.innerText);
heading.innerText = "Nice~!!";
heading.innerText = "<em>Nice</em>~!!";

console.log(heading.innerText);
console.log(heading.textcontent);





//createElement()
var h3Test = document.createElement("h3");
h3Test.textContent = "Hello World!!!";

console.log(h3Test);



//appendChild()
//var masthead = document.querySelector('.masthead');
//masthead.appendChild(h3Test);

//var mastheadContainer = document.querySelector('.masthead .container');
//mastheadContainer.appendChild(h3Test);

var mastHeading = document.querySelector('.masthead-heading');
mastHeading.appendChild(h3Test);






var subHeading = document.querySelector('.masthead-subheading');
var heading = document.querySelector('.masthead-heading');
var btn = document.querySelector('.masthead .btn');

subHeading.appendChild(h3Test);
heading.appendChild(h3Test);
btn.appendChild(h3Test);





//insertAdjancentHTML();

var heading = document.querySelector('.masthead-heading');
var txt = "<h3>!!!!!!!!!!!!!!</h3>";

heading.insertAdjacentHTML('beforeend', txt);






var headContainer = document.querySelector('.masthead .container');

//first-child, last-child
console.log(headContainer.firstElementChild);
console.log(headContainer.lastElementChild);






var heading = document.querySelector('.masthead-heading');

heading.style.color = "red";
heading.style.backgroudColor = "pink";
heading.style.fontSize = "25px";


heading.style.cssText = "color: red; background-color: pink; font-sile: 25px";


heading.setAttribute("id", "test");
heading.setAttribute = ("style", "color: red; background-color: pink; font-si1e: 25px");

heading.setAttribute("id", "heading-test");
document.querySelector("#heading-test").style.backgroudColor = "pink";









//className, classList
var heading = document.querySelector(".masthead-heading");
var headingClass = heading.className;
var HeadingArr = headingClass.split(" ");

console.log(headingClass);

console.log(HeadingArr);
console.log(HeadingArr[0]);
console.log(HeadingArr[1]);

heading.className = "mashead-heading text-uppercase test";




var heading = document.querySelector(".masthead-heading");
//var headingClass = heading.classList;

//console.log(headingClass);
//console.log(headingClass[0]);
//console.log(headingClass[1]);

heading.classList.add("test1", "test2", "test3");
heading.classList.remove("text-uppercase");


heading.classList.toggle("test");
heading.classList.toggle("text-uppercase");


console.log(heading.classList.contains("text-uppercase");)

console.log(heading.classList.contains("aaa");)








function test() {
    console.log("클릭");
}

heading.addEventListener('click', test);
heading.removeEventListener('click', test);


heading.addEventListener('click', function test () {
    console.log("클릭");
})

heading.removeEventListener('click', function test () {
    console.log("클릭");
})



var obj1 = {name: "kim"};
var obj2 = obj1;

console.log(obj1 === obj2);


*/












































