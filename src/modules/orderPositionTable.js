import { bikerPositionTable } from './objectModel.js';

let constructorTablePosition= ()=>{
    const constructSection = document.getElementById('constructor-table');
    const fragment = document.createDocumentFragment();
    

    bikerPositionTable.forEach(position=>{
        const containerList = document.createElement('div');
        const paragraphList = document.createElement('p');
        const imageList = document.createElement('img');
        const numberList = document.createElement('p');
        const pointsList = document.createElement('p');

        numberList.classList =`container-position-table--number`;
        numberList.innerText = `${position.number}`;

        pointsList.classList = `container-position-table--pts`;
        pointsList.innerText = `${position.points}`;

        containerList.classList = `container-position-table__person`;
        containerList.insertAdjacentElement(`afterbegin`, imageList);
        imageList.classList = `container-position-table__person--img`;
        imageList.src = `./statics/images/Icono_bandera_${position.nationality}.png`;
        imageList.alt = `Imagen de la bandera de ${position.nationality}`;

        containerList.insertAdjacentElement(`afterbegin`, paragraphList);
        paragraphList.classList = `container-position-table__person--name`;
        paragraphList.innerText = `${position.name}`;

        fragment.appendChild(numberList);
        fragment.appendChild(containerList);
        fragment.appendChild(pointsList);
        
    })

    constructSection.appendChild(fragment);

}

constructorTablePosition();

let winersTable=[{}]

let podiumWiners=()=>{
    bikerPositionTable.forEach(winers =>{
        const numberWiner = winers.number;
        const winerColection = winers;

        if (numberWiner <= 3){
            winersTable.push(winers);
        }
    })
}

podiumWiners();


let initiatorPodium = () =>{
    const winerPlace = document.getElementById('winer-place');
    const winerPlaceMotorcycle = document.getElementById('win-moto');
    const winerPoints = document.getElementById('winer-points'); 
    const winerName = document.getElementById('winer-name');

    winerPlace.src = `./statics/images/Icono_${winersTable[1].number}_lugar.png`;
    winerPlace.alt = `Imagen de emblema del ${winersTable[1].number} lugar`;
    winerPlaceMotorcycle.src= `./statics/images/${winersTable[1].motorcycle}.png`;
    winerPlaceMotorcycle.alt = `Imagen de motocicleta de competir del ${winersTable[1].number} lugar`;

    winerPoints.innerText = `${winersTable[1].points}`;
    winerName.innerText = `${winersTable[1].name}`;


}

initiatorPodium();

export { winersTable };