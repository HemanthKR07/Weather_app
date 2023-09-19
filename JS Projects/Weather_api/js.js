const array = [
        {
        'id' : 0,
        'img' : 'rahul1.jpg',
        'h3name':'Rahul',
        'pre1':'Alpha brought consistency in my placement journey. Shradha maams teaching style is really good and can be easily understood.',
        'pstar':'🌟 🌟 🌟 🌟'
        },
        {
        'id' : 1,
        'img' : '2.jpeg',
        'h3name':'Raunak',
        'pre1':'It was only because of Apna College and Alpha batch that I was able to crack FAANG! (7Lakh/ Month)',
        'pstar':'🌟 🌟 🌟 🌟'
        },{
        'id' : 2,
        'img' : '3.jpeg',
        'h3name':'Shivam',
        'pre1':'For the role that Alpha played in my life, I would rate it 10/10. I wish I could have done it sooner. Every topic was taught so in-depth from basics to advanced.',
        'pstar':'🌟 🌟'
        },{
        'id' : 3,
        'img' : '4.jpg',
        'h3name':'Divyang',
        'pre1':'I didnt know java before Alpha & started my Java learning journey here. It helped me crack my internship.',
        'pstar':'🌟 🌟 🌟 🌟 🌟'
        }
]

// Fetching output

document.getElementById("btn1").addEventListener('click', function (){
        
        let city = document.getElementById('l1').value
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=06ecc1bd241425c0322b945defca30a8`


        fetch(url)
                .then((result) => result.json())
                .then((data) => {
                                let a = (data.main.temp) - 273.15;
                                let val = a.toFixed(2);
                                document.getElementById("out").classList.remove("rem");
                                let text = document.getElementById("pval");
                                text.textContent = `The current weather in ${city} is ${val}° C`;})
                .catch((error)=>("Error:",error));
});

// Review rendering

let img = document.querySelector(".imgrev")
let nam = document.querySelector(".h3name")
let rev = document.querySelector(".pre1")
let star = document.querySelector(".pstar")

current = 0;

window.addEventListener("DOMContentLoaded", function (){
        printer();
        // for (let j=0; j<=3; j++){
        //         
        //         setTimeout(right(),4000);
        //         j--;
        //}
})      

function printer(){
        let i = array[current]
        img.src = i.img;
        nam.textContent = i.h3name;
        rev.textContent = i.pre1;
        star.textContent = i.pstar;
}

function left(){
        current -= 1;
        if (current==-1){
                current = 3;
                printer();
        } else {
                printer();
        }
}
function right(){
        current += 1;
        if (current==4){
                current = 0;
                printer();
        } else {
                printer();
        }
}







