const Gameboard = (function(){
    const gameboard = [0,1,2,3,4,5,6,7,8];
    function getBoard(){
        return gameboard;
    };
    function setCell(index,user){
        gameboard[index]= user.sign
        const cell = document.getElementById(index);
        cell.textContent = user.sign;
    }
    return {getBoard, setCell}
})();

const Referee = (function(){
    const winningCombo = [
        [0,1,2],
        [0,4,8],
        [0,3,6],
        [6,7,8],
        [2,4,6],
        [2,5,8],
        [1,4,7],
        [3,4,5]
    ];

    function correctInput(userIndex){
        const gameboard = Gameboard.getBoard()
        userIndex = Number(userIndex)
        if (![0,1,2,3,4,5,6,7,8].includes(userIndex)){
            console.log(`${userIndex} is not a valid index`)
            return false
        }else if (!gameboard.includes(userIndex)){
            console.log(`${userIndex} already played`)
            return false
        }else{
            return true};
        }

    function hasWon(user){
        const sign = user.sign;
        const username = user.name;
        const gameboard = Gameboard.getBoard()
        const indexes = gameboard
        .map((v,i)=> v===sign ? i : null)
        .filter(v => v !== null)
        .sort((a,b)=>a-b)
        return winningCombo.some(combo => combo.every(index => indexes.includes(index)));
    };

    function drawGame(){
        const gameboard = Gameboard.getBoard();
        return gameboard.every(item => typeof item === 'string');
    }

    
    return {hasWon, correctInput, drawGame}
    }
)();

const Users = (function(){
    let nextPlayer = 'Player 2'

    function whoPlays(){
        return nextPlayer;
    }

    function changeLastPlayer(username){
        nextPlayer = username === 'Player 1' ? 'Player 2' : 'Player 1'
    }

    const user1 = {
        name : 'Player 1',
        sign : 'X'
    };
    const user2 = {
        name : 'Player 2',
        sign : 'O'
    };
    function getPlayer(username){
        if (username === user1.name){
            return user1
        } else if (username===user2.name){
            return user2
        } else{
            return null
        }
    } return {getPlayer, whoPlays, changeLastPlayer}
})();

const Organisator = (function(){
    function playMove(index){
        const username = Users.whoPlays();
        const user = Users.getPlayer(username);
        if (!Referee.correctInput(index)){
            return;
        } else{
            Gameboard.setCell(index,user)
        }
        if (Referee.hasWon(user)){
            console.log(`${user.name} wins!`);
            alert(`${user.name} wins`);
            window.location.reload();
        }
        if (Referee.drawGame()){
            console.log('draw game')
            window.location.reload();
        }
        Users.changeLastPlayer(username)
        grid.playerAboutToPlay();
    };

    function start(){
        const startBtn = document.querySelector(".start")
        startBtn.addEventListener('click',()=>{
            grid.displayGrid()
        })
    }

    function restart(){
        const restartBtn = document.querySelector(".restart")
        restartBtn.addEventListener('click', ()=> {
            console.log('inside restart button')
            window.location.reload()
        })
    }
    return{playMove, restart, start}
})();


// organisator.start()

// build grid layout

const grid = (function(){
    const container = document.querySelector('.container')
    function createGrid(){
        for (let i=0;i<9;i++){
            const div = document.createElement('div');
            div.classList.add(`cell`);
            div.setAttribute('id',i)
            div.addEventListener('click', () => {
                Organisator.playMove(i);  // calls Organisator
            });
            container.appendChild(div)
        }
    }

    function playerAboutToPlay(){
        const player = Users.whoPlays();
        console.log(player)
        const playerNameDiv = document.querySelector('.playername')
        playerNameDiv.textContent = player
    }
    function displayGrid(){
        return createGrid(), playerAboutToPlay()
    }
    return {displayGrid, playerAboutToPlay}
})();


Organisator.start()
Organisator.restart()
