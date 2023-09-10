//------------------Task-1-------------------------

window.open("", "newWindow", "width=300, height=300");
setTimeout(() => {
    window.resizeTo(500, 500); 
}, 2000);
setTimeout(() => {
    window.moveTo(200, 200); 
}, 2000);


//------------------Task-2-------------------------

const text = document.querySelector('#text');
const btn = document.querySelector('.btn');

btn.addEventListener("click", function changeSCC() {
    text.style.color = "orange";
    text.style.fontSize = "20px";
    text.style.fontFamily = "Comic Sans MS";
});


//------------------Task-3--------------------------

const btnblue = document.querySelector('.btnblue');
const btnpink = document.querySelector('.btnpink');
const btnbrown = document.querySelector('.btnbrown');
const link = document.querySelector('.link');
const page = document.querySelector('body');

btnblue.onclick = () => {
    page.style.background = "blue";
}

btnpink.ondblclick = () => {
    page.style.background = "pink";
}

btnbrown.onmousedown = () => {
    page.style.background = "brown";
}

link.onmouseover = () => {
    page.style.background = "yellow";
}

link.onmouseleave = () => {
    page.style.background = "";
}


//------------------Task-4--------------------------

const btn = document.querySelector('.btn');
btn.addEventListener("click", function () {
    const select = document.getElementById('вибір');
    select.remove(select.selectedIndex);
});


//------------------Task-5--------------------------

const btn = document.querySelector('.btn');
btn.onclick= () => {
    console.log("I was pressed!");
}

btn.onmouseover = () => {
    console.log("Mouse on me!");
}

btn.onmouseout = () => {
    console.log("Mouse is not on me!");
}


//------------------Task-6--------------------------

const wind = window.open("", "newWindow", "width=300, height=300");

function updateWindowSize() {
    const windWidth = wind.innerWidth;
    const windHeight = wind.innerHeight;

    const p = wind.document.getElementById("windowSize") || wind.document.createElement("p");
    p.id = "windowSize";
    p.textContent = "Width: " + windWidth + "px, Height: " + windHeight + "px";
    wind.document.body.appendChild(p);
}

wind.onload = function () {
    updateWindowSize();
    setInterval(updateWindowSize, 1000);
};

window.addEventListener("resize", updateWindowSize);


//------------------Task-7--------------------------
const countrySelect = document.querySelector('#countrySelect');
const citySelect = document.querySelector('#citySelect');
        
const citiesByCountry = {
    usa: ['New York', 'Los Angeles', 'Chicago', 'Boston'],
    ukr: ['Kyiv', 'Lviv', 'Odessa', 'Lutsk'],
    ger: ['Berlin', 'Humburg', 'Dresden', 'Dortmund'],
};
        
countrySelect.addEventListener('change', function () {
    const selectedCountry = countrySelect.value;
    citySelect.innerHTML = '';
        
    citiesByCountry[selectedCountry].forEach(function (cityName) {
        const option = document.createElement('option');
        option.value = cityName.toLowerCase();
        option.textContent = cityName;
        citySelect.appendChild(option);
    });
});

