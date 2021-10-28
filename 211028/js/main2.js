var txtElement = document.getElementById('txt');
var words = ["엔드게임", "인피니티 워", "에이지 오브 울트론"];

function TypeWriter(txtElement, words) {
    this.txtElement = txtElement;
    this.words = words;

    this.txt = "";
    this.wordIndex = 0;
    this.isDeleting = false;

    this.type();
}

TypeWriter.prototype.type = function () {
    
    var current = this.wordIndex % this.words.length;
    var fulltxt = this.words[current];

    if(this.isDeleting) {

        this.txt = fulltxt.substring(0, this.txt.length - 1);


    } else {

        this.txt = fulltxt.substring(0, this.txt.length + 1);

    }


    this.txtElement.textContent = this.txt;

    if(!this.isDeleting && this.txt === fulltxt) {

        this.isDeleting = ture;

    } else if(this.isDeleting && this.txt === "") {

        this.isDeleting = false;
        this.wordIndex++;
    }




    var that = this;
    
    setTimeout(function() {

        that.type();

    }, 1000);


}

new TypeWriter(txtElement, words);








































/*
var arr = [10, 20, 30];
var index = 0;



function loop(){

    var current = index % arr.length;
    console.log(arr[current]);
    index++;

    setTimeout(function() {
        loop();

    }, 2000);


}


loop();


*/


























