let closePopup;
let cambiarClase;
let dialogPopupOpen;

cambiarClase=()=>{
    let siteNav = document.getElementById('site-nav');
        siteNav.classList.toggle('site-nav-open');
    let menuClose = document.getElementById('menu-toggle-close');
        menuClose.classList.toggle('menu-toggle--open');
}

dialogPopupOpen=()=>{
    let sitePopupOpen = document.getElementById('open');
         sitePopupOpen.style.display="block"
    let sitePopupDialog = document.getElementById('dialog-pop-up');
        sitePopupDialog.style.display="block";     
}

closePopup=()=>{
    let sitePopup = document.getElementById('dialog-pop-up');
        sitePopup.style.display="none";
}

