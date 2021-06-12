import { bikerImageDay } from './objectModel.js';

let constructorDisplayImage= ()=>{
    const constructorSectionImg = document.getElementById('constructor-show-img');
    const fragmentImg = document.createDocumentFragment();

    bikerImageDay.forEach(positionimg =>{
        const imageShow = document.createElement('img');

        imageShow.classList = `container-scroll-img__section`;
        imageShow.src=`${positionimg.img}`;
        imageShow.alt =`Imagen de cobertura del día 1 del evento GS Trophy Qualifier GT 2021`;
        
        fragmentImg.appendChild(imageShow);       

    });

    constructorSectionImg.appendChild(fragmentImg);
}

constructorDisplayImage();