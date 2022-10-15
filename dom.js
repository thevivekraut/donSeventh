 var itemList = document.querySelector('#items');

 console.log(itemList.parentNode);
 itemList.parentNode.style.backgroundColor = '  #F4F4F4';
 console.log(itemList.parentNode.parentNode);

 console.log(itemList.parentElement);
 itemList.parentElement.style.backgroundColor = '  #F4F4F4';
 console.log(itemList.parentElement.parentElement.parentElement);

console.log(itemList.childNodes);
 
console.log(itemList.children);
console.log(itemList.children[1]);

itemList.children[1].style.backgroundColor = 'yellow';

console.log(itemList.firstChild);
console.log(itemList.firstElementChild);
console.log(itemList.firstChild);
itemList.firstElementChild.textContent ='Hello 1';

console.log(itemList.lastChild);
console.log(itemList.lastElementChild);
console.log(itemList.lastChild);
itemList.lastElementChild.textContent ='Hello 4';

console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);

console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';

var newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'helloo';
newDiv.setAttribute('title', 'hello div');
var newDivText = document.createTextNode('Hello World By JS');
newDiv.appendChild(newDivText);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1'); 
console.log(newDiv);
newDiv.style.fontSize = '20px';
newDiv.style.color = 'yellow';
container.insertBefore(newDiv, h1);
