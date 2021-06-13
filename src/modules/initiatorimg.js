import { bikerImageDay, bikerImageDay2 } from './objectModel.js';

let constructorDisplayImage= ()=>{
    const constructorSectionImg = document.getElementById('constructor-show-img');
    const constructorSectionImg2 = document.getElementById('constructor-show-img2');
    const fragmentImg = document.createDocumentFragment();
    const fragmentImg2 = document.createDocumentFragment();

    bikerImageDay.forEach(positionimg =>{
        const imageShow = document.createElement('img');

        imageShow.classList = `container-scroll-img__section`;
        imageShow.src=`${positionimg.img}`;
        imageShow.alt =`Imagen de cobertura del día 1 del evento GS Trophy Qualifier GT 2021`;
        
        fragmentImg.appendChild(imageShow);       

    });

    constructorSectionImg.appendChild(fragmentImg);

    bikerImageDay2.forEach(positionimg2 =>{
        const imageShow2 = document.createElement('img');

        imageShow2.classList = `container-scroll-img__section`;
        imageShow2.src=`${positionimg2.img}`;
        imageShow2.alt =`Imagen de cobertura del día 1 del evento GS Trophy Qualifier GT 2021`;
        
        fragmentImg2.appendChild(imageShow2);       

    });

    constructorSectionImg2.appendChild(fragmentImg2);
}

constructorDisplayImage();