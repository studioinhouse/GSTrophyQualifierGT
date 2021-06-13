import { winersTable } from './orderPositionTable.js';


let positionWiner = 1;


let initialPositon = firstPlace=>{
    let winMoto = document.getElementById('win-moto');
    let winerPosition = document.getElementById('winer-place')
    let winerPerson = document.getElementById('winer-name');
    let winerPersonPoints = document.getElementById('winer-points');
    
    winMoto.src=`./statics/images/${winersTable[1].motorcycle}.png`;
    winMoto.alt = `Imagen de motocicleta de competir del ${winersTable[1].number} lugar`;
    winerPosition.src = `./statics/images/Icono_${winersTable[1].number}_lugar.png`;
    winerPosition.alt = `Imagen de emblema del ${winersTable[1].number} lugar`;
    winerPerson.innerText = `${winersTable[firstPlace].name}`;
    winerPersonPoints.innerText = `${winersTable[firstPlace].points}`;
}

let nextWinerPosition = positionTable=>{
    let winPositionMoto = document.getElementById('win-moto');
    let winerPositionPlace = document.getElementById('winer-place');
    let winerNamePerson = document.getElementById('winer-name');
    let winerPointsPerson = document.getElementById('winer-points');

    winPositionMoto.src=`./statics/images/${winersTable[positionTable].motorcycle}.png`;
    winPositionMoto.alt = `Imagen de motocicleta que representa al ganador del ${winersTable[positionTable].number} lugar`;
    winerPositionPlace.src = `./statics/images/Icono_${winersTable[positionTable].number}_lugar.png`;
    winerPositionPlace.alt = `Imagen de emblema del ${winersTable[positionTable].number} lugar`;
    winerNamePerson.innerText = `${winersTable[positionTable].name}`;
    winerPointsPerson.innerText = `${winersTable[positionTable].points}`;
}


let winerDirection = argument =>{

    let actualPositionWiner = winersTable.length -1;
    if (positionWiner >= actualPositionWiner){
        positionWiner = 1;
        initialPositon (positionWiner);
        
    }else{
        positionWiner++
        nextWinerPosition(positionWiner);
    }
};

let winerDirectionBack = argument =>{

    let actualPositionWiner = winersTable.length -1;
    if (positionWiner <= 1){
        positionWiner = actualPositionWiner;
        initialPositon (positionWiner);
        
    }else{
        positionWiner--
        nextWinerPosition(positionWiner);
    }
};





export { winerDirection, winerDirectionBack };
