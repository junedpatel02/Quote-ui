const quotes = [
    { 
        id: 1,
        content: "Sachin Tendulkar is a legendary Indian cricketer, widely regarded as one of the greatest batsmen of all time. He holds numerous records, including the most runs in both Tests and One-Day Internationals.",
        Image: "./download-removebg-preview (3).png"   
    },
    { 
        id: 2,
        content: "Hardik Pandya is an Indian all-rounder known for his explosive batting and fast bowling. He plays a key role in India's limited-overs teams and has been a match-winner in several high-pressure situations.",
        Image: "./download-removebg-preview.png"
    },
{
        id: 3, 
        content: "Mohammed Siraj is a skilled fast bowler from India, known for his pace and accuracy. He has become a key figure in India's bowling attack.",
        Image: "./images__11_-removebg-preview.png" 
},
    { 
        id: 4,
        content: "Mohammad Sami is an Indian cricketer, known for his fast bowling and ability to generate pace and bounce. He played for India in both Tests and One-Day Internationals.",
        Image: "./images__12_-removebg-preview.png" 
    },
    { 
        id: 5,
        content: "MS Dhoni is a former Indian cricketer and captain, famous for his cool-headed leadership and finishing abilities. He won multiple major titles, including the 2007 T20 World Cup, 2011 World Cup, and 2013 Champions Trophy.",
        Image: "./8399739-ZXRYPSGL-7-removebg-preview.png"  
    }
];

let button = document.querySelector("#dice button");
let p = document.querySelector("#quote-text");
let img = document.querySelector(".box-upper img");  

const randomquote = () => {
    const random = Math.floor(Math.random() * quotes.length); 
    p.innerText = quotes[random].content;  
    if (quotes[random].Image) {
        img.src = quotes[random].Image;  
    } else {
        img.src = './default-image.jpg';
    }
    console.log(`Quote ID: ${quotes[random].id}, Quote: ${quotes[random].content}, Image: ${quotes[random].Image}`);
}

button.addEventListener("click", randomquote);
