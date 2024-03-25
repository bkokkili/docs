//creating employee object
let emp ={
    id : "53433",
    empName : "Balaji",
    mobile : "9999999999",
    email : "balaji@gmail.com"
}
console.log(emp);

//accessing emp object
console.log(emp.id+ ' '+emp['id'])

//get all the keys of emp
console.log(Object.keys(emp))

//get all the values of emp
console.log(Object.values(emp))

//conevrt obj into Json String, this concept is called Serialization
let jsonString = JSON.stringify(emp)
console.log(jsonString)

//convert jsonString into Object, this concept is called DeSerialization
let obj = JSON.parse(jsonString);
console.log(obj)

function letvsConstvsVar(){
    var a = 10;
    a = 30;
    console.log(a);

    let c = 50;
    c = 70
    console.log(c)
}
var a = 20;
console.log(a)


var b = letvsConstvsVar();

/*
 *IIFE(Immediate Invoke Function Expressions)
 *This function will execute without invoking(Instead of calling seperatley)
*/
(function immediateInvoke(){
   console.log("Immediate Invoke Function Expression")
})()

/*
* Selection methods in JavaScript
* byId, byClassName, byTagName, QuerySelector , QueryAll
*/

//this will return the entire element which is having id as firstParagraph
let firstParagrapgh = document.getElementById('firstParagraph')

/*both will return the text of the element but the difference is 
 * innertext first will check with CSS then it comes to HTML
 * textContent first will check with HTML then it comes to CSS
*/
document.getElementById('firstParagraph').innerText
document.getElementById('firstParagraph').textContent

//this will change the text of an element called DOM manipulation
document.getElementById('firstParagraph').textContent='Text Updated'

//this will change the content of a <div> or <p> element. 
document.getElementById('secondParagraph').innerHTML='<b></b>'

//this will return HTML Array collection since that div might contains sub div's
let mainDiv = document.getElementsByClassName("mainDivClass")

//to access particular div
let particularDiv = document.getElementsByClassName("mainDivClass")[0]

//this also returns HTML Array collections since it might have one or more tags with same name
let bytagName = document.getElementsByTagName('p')

//this is CSS way,  will return an element which is having id as p1
document.querySelector('#p1');

//This will return only first element of an div which is having class name as mainDivClass
document.querySelector('.mainDivClass')

//this will return HTML Array collection since that div might have sub div's
document.querySelectorAll(".mainDivClass")

//to access paricular element
document.querySelectorAll('.mainDivClass')[0];

//create HTML element and add it in existing element called DOM Manipulation
let divElement = document.createElement('div');
let anchorTag = document.createElement('a')
anchorTag.textContent='Google'
//anchorTag.href = "https://www.google.com"
anchorTag.setAttribute('href','https://www.google.com')
anchorTag.classList.add('textColor');
divElement.appendChild(anchorTag);
firstParagrapgh.append(divElement);

//event listeners
let button = document.querySelector('button')
button.addEventListener('click', changeBackground)
document.querySelector('#timeOut').addEventListener('click', timeOut)

function changeBackground(){
    let randomColorCode = '#'+Math.floor(Math.random() * 10000000).toString(16)
    console.log(randomColorCode)
    document.body.style.backgroundColor = randomColorCode
}
//time out will execute the function after sepecified time at one time
function timeOut(){
    setTimeout(function(){
       console.log('timeout')
    },5000)
}
//interval will exeute the function again and again after specifed time
function interval(){
    setInterval(function(){
        document.getElementById('intervalTime').textContent = new Date().toLocaleTimeString()
    },5000)
}

interval();




