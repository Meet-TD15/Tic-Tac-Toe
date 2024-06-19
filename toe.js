let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#New-btn");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");
let turno = true;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") {
            box.innerText = turno ? "o" : "x";
            turno = !turno;
            box.disabled = true;
            checkwinner();
        }
    });
});

const showWinner = (Winner) => {
    msg.innerText = `Congratulations, Winner is Player "${Winner}"`;
    msgContainer.classList.remove("hide");
};

const checkwinner = () => {
    for (let pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log(pos1val, "Is Winner ;)");
                showWinner(pos1val);
                disableAllBoxes();
                return;
            }
        }
    }
};

const disableAllBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

const resetGame = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    turno = true;
    msgContainer.classList.add("hide");
};

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);