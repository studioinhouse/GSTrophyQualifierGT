import { bikerImageDay, bikerImageDay2 } from './objectModel.js';

let ubicationDisplayImg = "img";
let ubicationUrlImage = "imgurl";

let ubicationShareImg = ()=>{
    let positionImageUrl = "url";
    bikerImageDay.forEach(positionImage=>{
        let positionImageName = positionImage.name;
        if(positionImageName == ubicationDisplayImg){
            positionImageUrl = positionImage.img;
        }else{
            bikerImageDay2.forEach(positionImage=>{
                let positionImageName = positionImage.name;
                if(positionImageName == ubicationDisplayImg){
                positionImageUrl = positionImage.img;
                };       
            });
        };
    });

    const urlShare = `http://www.bavaria.com.gt/GSTrophyQualifierGT${positionImageUrl}`;
    const ArticleUrl = encodeURIComponent(urlShare);
    ubicationUrlImage = ArticleUrl;

};

let ShareButtonAction = argument =>{ 
    let shareButton = document.getElementById('pop-up-share');
    shareButton.style.display = 'block';
    ubicationShareImg();
}

let ShareButtonActionDay2 = argument =>{
    let shareButtonDay2 = document.getElementById('pop-up-share2');
    shareButtonDay2.style.display = 'block';
    ubicationShareImg();
}

let closeButtonAction = action =>{
    let actionCloseShare = document.getElementById('pop-up-share');
    actionCloseShare.style.display = 'none';
}

let closeButtonActionDay2 = action =>{
    let actionCloseShareDay2 = document.getElementById('pop-up-share2')
    actionCloseShareDay2.style.display = 'none';
}

let fbButtonShare = fbshare =>{

    window.open(`https://www.facebook.com/sharer/sharer.php?u=${ubicationUrlImage}&amp;src=imagen que captura distintos momentos vividos durante el GS Trophy Qualifier GT, 'facebook_share`);
    
}

let fbButtonShareDay2 = fbshare =>{
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${ubicationUrlImage}&amp;src=imagen que captura distintos momentos vividos durante el GS Trophy Qualifier GT, 'facebook_share`);
    
}

let twtButtonShare = argumetn=>{
    window.open(`http://twitter.com/share?url=${ubicationUrlImage}, 'twitter_share`);
}

let twtButtonShareDay2 = argumetn=>{
    window.open(`http://twitter.com/share?url=${ubicationUrlImage}, 'twitter_share`);
}

let wtsButtonShare = argument=>{
    window.open(`https://api.whatsapp.com/send?text=` + encodeURIComponent("Descubre los momentos inolvidables del GS Trophy Qualifier GT 2021 en nuestro sitio web: http://www.bavaria.com.gt/GSTrophyQualifierGT"));
}

let wtsButtonShareDay2 = argument=>{
    window.open(`https://api.whatsapp.com/send?text=` + encodeURIComponent("Descubre los momentos inolvidables del GS Trophy Qualifier GT 2021 en nuestro sitio web: http://www.bavaria.com.gt/GSTrophyQualifierGT"));
}



let ubicationShareDisplay = shareOption =>{
    if(shareOption.target.classList.contains('share-button')){
        let ubicationShare = `${shareOption.target.id}`;
        ubicationDisplayImg = ubicationShare;
        ShareButtonAction(ubicationShare);
    }
};

let ubicationShareDisplay2 = shareOption =>{
    if(shareOption.target.classList.contains('share-button')){
        let ubicationShare = `${shareOption.target.id}`;
        ubicationDisplayImg = ubicationShare;
        ShareButtonActionDay2(ubicationShare);
    }
};



export { ShareButtonAction, ShareButtonActionDay2, closeButtonAction, closeButtonActionDay2, fbButtonShare, ubicationShareDisplay, ubicationShareDisplay2,fbButtonShareDay2, twtButtonShare, twtButtonShareDay2, wtsButtonShare, wtsButtonShareDay2 };