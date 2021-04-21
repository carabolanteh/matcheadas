// Generador de grilla

const grid = document.getElementById("grid");

let items = [
    "<img src='./img/green.png' alt='green' width='30px'>",
    "<img src='./img/red.png' alt='red' width='30px'>",
    "<img src='./img/blue.png' alt='blue' width='30px'>",
    "<img src='./img/orange.png' alt='orange' width='30px'>",
    "<img src='./img/violet.png' alt='violet' width='30px'>"
];

let size = 9;
const divs = [];

const getGrid = () =>{
    grid.innerHTML = '';

    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
            const newDiv = document.createElement('div');
            grid.style.width = `${(45) * size}px`;
            grid.style.height = 'auto';
            newDiv.style.padding = '.5%';
            newDiv.innerHTML = items[getRandomInt(0, 5)];

            
            newDiv.setAttribute('id', `${i}-${j}`)
            newDiv.setAttribute('draggable', true)
            grid.appendChild(newDiv);
            divs.push(newDiv);
        }
    }
    getElement();
}
 /////////////////////

 let itemDragged;

 divs.forEach(newDiv => newDiv.addEventListener('dragstart', dragStart));
 divs.forEach(newDiv => newDiv.addEventListener('dragend', dragEnd));
 divs.forEach(newDiv => newDiv.addEventListener('dragover', dragOver));
 divs.forEach(newDiv => newDiv.addEventListener('dragenter', dragEnter));
 divs.forEach(newDiv => newDiv.addEventListener('dragleave', dragLeave));
 divs.forEach(newDiv => newDiv.addEventListener('dragdrop', dragDrop));
 
 function dragStart (){
     console.log(this.id, 'dragstart')
 }
 function dragEnd (){
     console.log(this.id, 'dragend')
 
 }
 function dragOver(){
    e.preventDefault();
     console.log(this.id, 'dragover')
 
 }
 function dragEnter(e){
     e.preventDefault(),
     console.log(this.id, 'dragenter')
 
 }
function dragLeave(){
     console.log(this.id, 'dragleave')
 
 }
 function dragDrop(){
     console.log(this.id, 'dragdrop')
     replace = this
 
 }

 /////////////////////

const getElement = () =>{
    const elem = document.getElementsByTagName('div');

    for (let j = 0; j < elem.length; j++) {
       elem[j].addEventListener("click", ()=>{
           console.log(elem);
       })
        
    }  
}



const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min; 
}


getGrid();

// MODALES

const welcome = () =>{
    swal({
        title: "¡Bienvenida!",
        text: "En MAtcheADAs tu objetivo es juntar tres o más ítems del mismo tipo, ya sea en fila o columna. Para eso, selecciona un ítem y a continuación un ítem adyacente para itercambiarlos de lugar \n \n Si se forma un grupo, esos ítems se eliminarán y ganarás puntos.¡Sigue armando grupos de 3 o más antes de que se acabe el tiempo! \n \n Controles \n Click izquierdo: selección \n Enter o Espacio: selección \n Flechas o WASD: movimiento e intercambio",
        button: "A jugar!",
    }).then (level = () => {
        
        swal("Nuevo juego", "Selecciona una dificultad",
        {
            buttons: {
                easy: {
                    text: "Fácil",
                    value: "easy"
                },
                normal: {
                    text: "Normal",
                    value: "normal"
                },
                difficult: {
                    text: "Difícil",
                    value: "difficult"
                },
            },
        }).then((value) => {
            switch (value) {
                case "easy":
                    size = 9; // medida de la matriz del proyecto
                    getGrid(size);
                    startTimer();
                    break;
                case "normal":
                    size = 8;
                    getGrid(size);
                    startTimer();
                    break;
            
                case "difficult":
                    size = 7;
                    getGrid(size);
                    startTimer();
                    break;
                default:
            }
        });
    });
}
welcome();
const gameOver = () =>{
    swal({
        title: "Juego terminado",
        buttons: {
            newGame: {
                text: "Nuevo juego",
                value: "newGame"
            },
            retry: {
                text: "Reintentar",
                value: "retry"
            }
        }
    }).then((value) => {
        switch (value) {
            case "retry":
                getGrid(size);
                break;
            case "newGame":
                level();
                break;
                default:
        }
    })
}


// BUTTONS

const info = document.getElementById('info');
const reset = document.getElementById('reset');

info.addEventListener('click', ()=>{
    swal({
        title: "Información",
        text: "En MAtcheADAs tu objetivo es juntar tres o más ítems del mismo tipo, ya sea en fila o columna. Para eso, selecciona un ítem y a continuación un ítem adyacente para itercambiarlos de lugar \n \n Si se forma un grupo, esos ítems se eliminarán y ganarás puntos.¡Sigue armando grupos de 3 o más antes de que se acabe el tiempo! \n \n Controles \n Click izquierdo: selección \n Enter o Espacio: selección \n Flechas o WASD: movimiento e intercambio",
        button: "Genial!",
    })
})


reset.addEventListener('click', ()=>{
    swal({
        title: "Reiniciar",
        buttons: {
            cancel: "Cancelar",
            newGame: {
                text: "Nuevo juego",
                value: "newGame"
            },
        }
    }).then((value) => {
        switch (value) {
            case "newGame":
                level();
                break;
                default:
        }
    })
})


// TIMER


let count = 0;
let sec = 30;
let time = 0;
let count2 = 0;

const startTimer = () => {

    const timer = () => {
    count2++;
    if (count2 <= 30) {
        var root = document.getElementById('root');
        root.innerHTML = `00:${sec}`;
        count++
        time = sec - count;
        root.innerHTML = `00:${time}`;
        
    }else{
        
        myStopTimer();
        gameOver();
    }
}
var startTimer = setInterval(timer, 1000);

const myStopTimer = () => {
    clearInterval(startTimer);
};

}



