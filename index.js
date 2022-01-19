console.log("Welcome to Tic Tac Toe")

let music = new Audio("res/music.mp3")
let audioTurn = new Audio("res/ting.mp3")
let gameover = new Audio("res/gameover.mp3")

let isgameover = false;

let turn ="X";

const nextTurn = ()=>{
    return turn === "X"?"0" : "X"
}

music.play();

music.volume = 0.2;

const checkWin = () =>{
    let cases = document.getElementsByClassName("boxset")
    let wins = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ]
    wins.forEach(element =>{
        if((cases[element[0]].innerText === cases[element[1]].innerText)
        && (cases[element[0]].innerText === cases[element[2]].innerText) 
        && (cases[element[0]].innerText !== "")){
            
            isgameover = true;
            
            document.querySelector(".img1").getElementsByClassName("imgpro")[0].style.width = "100%";
            
            if(turn==='X'){
                document.getElementsByClassName("info")[0].innerText = "Player 2 wins";
            }
            else{
                document.getElementsByClassName("info")[0].innerText = "Player 1 wins";
            }
            
        } 
    })
}

let boxes = document.getElementsByClassName("box");


Array.from(boxes).forEach( element =>{
    let boxtext = element.querySelector(".boxset");
        element.addEventListener('click', ()=>{
            if(boxtext.innerText === '' && !isgameover){
                boxtext.innerText = turn;
                turn = nextTurn();
                audioTurn.play();
                checkWin();
                if(!isgameover){
                    document.getElementsByClassName("info")[0].innerText = turn + 's turn';
                }
            }
    })
})

reset.addEventListener('click',() =>{
    Array.from(boxes).forEach( element =>{
        element.querySelector(".boxset").innerText = '';
        turn = 'X';
        isgameover = false;
        document.getElementsByClassName("info")[0].innerText = turn + 's turn';
        document.querySelector(".img1").getElementsByClassName("imgpro")[0].style.width = "0px";
    })
})



