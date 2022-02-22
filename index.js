console.log("Welcome to Tic Tac Toe");

let music = new Audio("res/music.mp3");
let audioTurn = new Audio("res/ting.mp3");
let gameover = new Audio("res/gameover.mp3");

let isgameover = false;
let fordraw = 0;

let turn = "X";

const nextTurn = () => {
    return turn === "X" ? "0" : "X";
};

music.play();

music.volume = 0.2;

const checkWin = () => {
    let cases = document.getElementsByClassName("boxset");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    wins.forEach((element) => {
        if (
            cases[element[0]].innerText === cases[element[1]].innerText &&
            cases[element[0]].innerText === cases[element[2]].innerText &&
            cases[element[0]].innerText !== ""
        ) {
            isgameover = true;

            document
                .querySelector(".img1")
                .getElementsByClassName("imgpro")[0].style.width = "100%";

            if (turn === "X") {
                document.getElementsByClassName("info")[0].innerText = "Player 2 wins";
            } else {
                document.getElementsByClassName("info")[0].innerText = "Player 1 wins";
            }
        }
    });
};

let boxes = document.getElementsByClassName("box");

let draw = false;

const checkdraw = () =>{
    Array.from(boxes).forEach((element1) => {
        let boxtext1 = element1.querySelector(".boxset");
        if (boxtext1.innerText !== "" && !isgameover) {
            fordraw++;
        }
    });
    let drawnumber = 9;
    if(fordraw==drawnumber){
        draw = true;
    }
}


Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector(".boxset");
    element.addEventListener("click", () => {
        if (boxtext.innerText === "" && !isgameover) {
            boxtext.innerText = turn;
            turn = nextTurn();
            audioTurn.play();
            checkWin();
            checkdraw();
            if (draw) {
                document.getElementsByClassName("info")[0].innerText =
                    "It is a draw. Start again.";
            }
            else if (!isgameover) {
                fordraw = 0;
                document.getElementsByClassName("info")[0].innerText = turn + "s turn";
            }
        }
    });
});

reset.addEventListener("click", () => {
    Array.from(boxes).forEach((element) => {
        element.querySelector(".boxset").innerText = "";
        turn = "X";
        isgameover = false;
        fordraw = 0;
        draw = false;
        document.getElementsByClassName("info")[0].innerText = turn + "s turn";
        document
            .querySelector(".img1")
            .getElementsByClassName("imgpro")[0].style.width = "0px";
    });
});
