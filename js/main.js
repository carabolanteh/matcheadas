const grid = document.getElementById("grid");

let items = [
    "<img src='https://image.flaticon.com/icons/png/128/2778/2778273.png' alt='green' width='30px'>",
    "<img src='https://www.flaticon.com/svg/vstatic/svg/539/539043.svg?token=exp=1615462091~hmac=1d394b4f5e52b8f6eb13930947430b15' alt='red' width='30px'>",
    "<img src='https://www.flaticon.com/svg/vstatic/svg/785/785126.svg?token=exp=1615462091~hmac=ce5445b58b28df3f0c68d676f3001572' alt='blue' width='30px'>",
    "<img src='https://www.flaticon.com/svg/vstatic/svg/3530/3530908.svg?token=exp=1615462091~hmac=7abb6240d863bb29725d5e62ff132e4d' alt='orange' width='30px'>",
    "<img src='https://www.flaticon.com/svg/vstatic/svg/1853/1853587.svg?token=exp=1615462091~hmac=b928cb3354f8d0954f0f5b79a0e73993' alt='violet' width='30px'>"
];

let size = 9;

const getGrid = () =>{

    grid.innerHTML = '';

    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
            const newp = document.createElement('p');
            newp.style.width = '10.5%';
            newp.style.padding = '.5%';
            newp.setAttribute('id', `${i}-${j}`)
            newp.setAttribute('draggable', true)
            newp.innerHTML = items[getRandomInt(0, 5)];
            
            grid.appendChild(newp);
        }
    }
    getElement();
}


const getElement = () =>{
    const elem = document.getElementsByTagName('p');

    for (let j = 0; j < elem.length; j++) {
       elem[j].addEventListener("click", ()=>{
           console.log(elem);
       })
        
    }  
}



const changeSize = ()=> {
    size += 1;
    grid.style.width = `${50 * size}px`;
    getGrid();
}

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min; 
}


getGrid();








// TIMER


let count = 0;
let sec = 30;
let time = 0;
let count2 = 0;

const timer = () => {
    count2++;
    if (count2 <= 30) {
        var root = document.getElementById('root');
        root.innerHTML = `00:${sec}`;
        count++
        time = sec - count;
        root.innerHTML = `00:${time}`;
        
    }else{
        swal("Juego terminado!");
        myStopTimer();
    }
}
var startTimer = setInterval(timer, 1000);

const myStopTimer = () => {
    clearInterval(startTimer);
};





