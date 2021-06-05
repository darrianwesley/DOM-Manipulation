//elements by id
var header= document.getElementById('page-header');
var h1 = document.getElementById('main-heading');
var p1 = document.getElementById('para1');
var p2 = document.getElementById('para2');
var btn = document.getElementById('btn')
var p4 = document.getElementById('para4');
var divr = document.getElementById('red');
var divb = document.getElementById('blue');
var divy = document.getElementById('yellow');
var divg = document.getElementById('green');
var divbl = document.getElementById('black');

//change header text
var h1 = document.getElementById('main-heading');
h1.innerHTML =" New DOM Layout";
document.getElementById('main-heading').classList.add('bg-success');
h1.style.backgroundColor = "green";

//paragraph edits
var p1 = document.getElementById('para1');
p1.innerHTML ="The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.";

var p2 = document.getElementById('para2');
p2.innerHTML ="The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.";

//button stuff

document.getElementById('btn').addEventListener("click",function() {
    document.getElementById('para4').innerHTML="The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.";
})

//colorcards
var divr = document.getElementById('red');
//document.getElementById('red').style.backgroundColor = "";
//divr.style.backgroundColor = "red";
divr.classList.remove('bg-white');
divr.classList.add('bg-red');
divr.style.backgroundColor ="red";

var divb = document.getElementById('blue');
divb.classList.remove('bg-white');
divb.classList.add('bg-blue');
divb.style.backgroundColor ="blue";


var divy = document.getElementById('yellow');
divy.classList.remove('bg-white');
divy.classList.add('bg-yellow');
divy.style.backgroundColor ="yellow";

var divg = document.getElementById('green');
divg.classList.remove('bg-white');
divg.classList.add('bg-green');
divg.style.backgroundColor ="green";

var divbl = document.getElementById('black');
divbl.classList.remove('bg-white');
divbl.classList.add('bg-black');
divbl.style.backgroundColor ="black";
