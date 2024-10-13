let GameSeq = [];
let UserSeq = [];
let start = false;
let level = 0;

h2 = document.querySelector('h2');

btns = ['red','green','yellow','purple']

document.addEventListener('keypress',function(){
    if(start == false){
        console.log('Game started')
        start = true;

        LevelUp()
    }
});


function btnFlash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash')
    },250)

}

function userFlash(btn){
    btn.classList.add('userflash');
    setTimeout(function(){
        btn.classList.remove('userflash')
    },250)

}

function LevelUp(){
    UserSeq = [];
    level++;
    h2.innerText  = `Level: ${level}`
    randIdx = Math.floor(Math.random()*3);
    randColor =  btns[randIdx];
    GameSeq.push(randColor);
    console.log(GameSeq);
    randBtn = document.querySelector(`.${randColor}`);


    btnFlash(randBtn)
}
function CheckAns(){
    for (let i = 0; i < GameSeq.length; i++){
        if (UserSeq[i] != GameSeq[i]){
            h2.innerHTML = `Game over your score was <b>${level}</b>,<br> Press any key to continue.....`
            document.querySelector('body').style.color = 'red';
            setTimeout(function(){
                document.querySelector('body').style.color = 'white';
            },150);
            reset()
        }

    }
    if(UserSeq.length ==  GameSeq.length){
        LevelUp()

    }
}

function BtnPress(){
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute('id');
    UserSeq.push(userColor);
    CheckAns();
}

let allbtns = document.querySelectorAll('.btn');
for (btn of allbtns){
    btn.addEventListener('click',BtnPress)
}

function reset(){
    start = false;
    UserSeq = [];
    GameSeq = [];
    level = 1;
    h2.innerText = `Level: ${level}`
}