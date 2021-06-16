import { bikerImageDay, bikerImageDay2 } from './objectModel.js';

let constructorDisplayImage= ()=>{
    const constructorSectionImg = document.getElementById('constructor-show-img');
    const constructorSectionImg2 = document.getElementById('constructor-show-img2');
    const fragmentImg = document.createDocumentFragment();
    const fragmentImg2 = document.createDocumentFragment();

    bikerImageDay.forEach(positionimg=>{
        const containerShareButton = document.createElement('div');
        const containerImgShare = document.createElement('img');
        const containerImgDisplay = document.createElement('img');

        containerShareButton.classList ="container-share-button";
        containerShareButton.insertAdjacentElement('afterbegin', containerImgShare);
        containerImgShare.classList = "share-button";
        containerImgShare.id = `${positionimg.name}`;
        containerImgShare.src = `./statics/images/compartir.svg`;
        containerImgShare.alt ="Botón de compartir imagen"

        containerShareButton.insertAdjacentElement('afterbegin', containerImgDisplay);
        containerImgDisplay.classList = "container-share--img"
        containerImgDisplay.src = `.${positionimg.img}`;
        containerImgDisplay.alt ="Imágen de evento GS Trophy Qualifier GT";

        fragmentImg.appendChild(containerShareButton);
    });

    constructorSectionImg.appendChild(fragmentImg);

    bikerImageDay2.forEach(positionimg=>{
        const containerShareButton = document.createElement('div');
        const containerImgShare = document.createElement('img');
        const containerImgDisplay = document.createElement('img');

        containerShareButton.classList ="container-share-button";
        containerShareButton.insertAdjacentElement('afterbegin', containerImgShare);
        containerImgShare.classList = "share-button";
        containerImgShare.id = `${positionimg.name}`;
        containerImgShare.src = `./statics/images/compartir.svg`;
        containerImgShare.alt ="Botón de compartir imagen"

        containerShareButton.insertAdjacentElement('afterbegin', containerImgDisplay);
        containerImgDisplay.classList = "container-share--img"
        containerImgDisplay.src = `.${positionimg.img}`;
        containerImgDisplay.alt ="Imágen de evento GS Trophy Qualifier GT";

        fragmentImg2.appendChild(containerShareButton);
    });

    constructorSectionImg2.appendChild(fragmentImg2);

/*     bikerImageDay2.forEach(positionimg2 =>{
        const imageShow2 = document.createElement('img');

        imageShow2.classList = `container-scroll-img__section`;
        imageShow2.src=`.${positionimg2.img}`;
        imageShow2.alt =`Imagen de cobertura del día 1 del evento GS Trophy Qualifier GT 2021`;
        
        fragmentImg2.appendChild(imageShow2);       

    });

    constructorSectionImg2.appendChild(fragmentImg2); */
}

constructorDisplayImage();