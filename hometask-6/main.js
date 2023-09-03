//----------------Task-1-------------------
/*
console.log(document.querySelector("#list").firstElementChild.textContent);
console.log(document.querySelector("#list").lastElementChild.textContent);
console.log(document.querySelector("#list").children[1].textContent);
console.log(document.querySelector("#list").children[3].textContent);
console.log(document.querySelector("#list").children[2].textContent);
*/

//----------------Task-2-------------------
/*
let headerH1 = document.querySelector('h1');
headerH1.style.backgroundColor = 'lightgreen';
console.log(headerH1);

let firstPar = document.querySelector('#myDiv').firstElementChild;
firstPar.style.fontWeight = 'bold';
console.log(firstPar);

let secondPar= document.querySelector('#myDiv').children[1];
secondPar.style.color = 'red';
console.log(secondPar);

let thirdPar = document.querySelector('#myDiv').children[2];
thirdPar.style.textDecoration = 'underline';
console.log(thirdPar);

let fourthPar = document.querySelector('#myDiv').lastElementChild;
fourthPar.style.fontStyle = 'italic';
console.log(fourthPar);

let listOne = document.querySelector('#myList').firstElementChild.textContent;
let listSecond = document.querySelector('#myList').children[1].textContent;
let listThird = document.querySelector('#myList').lastElementChild.textContent;
console.log(`\t\t${listOne}${listSecond}${listThird}`);


let invisibleText = document.querySelector('span').textContent;
invisibleText.style.display = 'none';
console.log(invisibleText);
*/

//----------------Task-3-------------------
/*
let body = document.querySelector('body');
body.innerHTML = `
    <main class="mainClass check item">         
        <div id="myDiv">
            <p>First paragraph</p>           
        </div>
    </main> z
`;

console.log(body.outerHTML);
*/

//----------------Task-4-------------------
/*
const btn = document.querySelector('.btn');
let fioInp = document.getElementsByName('fio');
let phoneInp = document.getElementsByName('phone');
let birthInp = document.getElementsByName('birthday');
let emailInp = document.getElementsByName('email');
let out = document.querySelector('.out');

btn.onclick = () => {
  const user = [];
  user.push(fioInp[0].value);
  user.push(phoneInp[0].value);
  user.push(birthInp[0].value);
  user.push(emailInp[0].value);
  
  console.log(out.textContent = user.join(' , '));
}
*/

//----------------Task-5-------------------
/*

const circleEl = document.querySelectorAll('.circle');

for (let el of circleEl) {
    const dataAnim = el.getAttribute('data-anim');
    el.classList.add(dataAnim);

    const computedStyle = window.getComputedStyle(el);
    
    const animationName = computedStyle.animationName;

    if (animationName !== 'none') {
        console.log(`Анімація застосована для елемента з data-anim: ${dataAnim}`);
    } else {
        console.log(`Анімація не застосована для елемента з data-anim: ${dataAnim}`);
    }
}
*/