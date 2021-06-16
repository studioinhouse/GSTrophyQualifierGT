import { bikerRuleDisplay } from './rules.js';
import { winerDirection, winerDirectionBack } from './displayTopWiners.js';
import { ShareButtonAction, ShareButtonActionDay2, closeButtonAction, closeButtonActionDay2, fbButtonShare, ubicationShareDisplay, ubicationShareDisplay2,fbButtonShareDay2, twtButtonShare, twtButtonShareDay2, wtsButtonShare, wtsButtonShareDay2 } from './shareAction.js';

const rule1 = document.getElementById('1').addEventListener('click', bikerRuleDisplay);
const rule2 = document.getElementById('2').addEventListener('click', bikerRuleDisplay);
const rule3 = document.getElementById('3').addEventListener('click', bikerRuleDisplay);
const rule4 = document.getElementById('4').addEventListener('click', bikerRuleDisplay);
const rule5 = document.getElementById('5').addEventListener('click', bikerRuleDisplay);
const rule6 = document.getElementById('6').addEventListener('click', bikerRuleDisplay);

const directionRight = document.getElementById('arrow-right').addEventListener('click', winerDirection);
const directionLeft = document.getElementById('arrow-left').addEventListener('click', winerDirectionBack);

const container = document.querySelector('#constructor-show-img');
container.addEventListener('click', ubicationShareDisplay); 
const containerDisplay2 = document.querySelector('#constructor-show-img2');
containerDisplay2.addEventListener('click', ubicationShareDisplay2);


const closeShareButton = document.getElementById('pop-up-share-close').addEventListener('click',closeButtonAction);
const CloseShareButtonDay2 = document.getElementById('pop-up-share-close2').addEventListener('click', closeButtonActionDay2);
const fbButtonAction = document.getElementById('fb').addEventListener('click', fbButtonShare);
const fbButtonActionDay2 = document.getElementById('fb2').addEventListener('click', fbButtonShareDay2);
const twtButtonAction = document.getElementById('twt').addEventListener('click', twtButtonShare);
const twtButtonActionDay2 = document.getElementById('twt2').addEventListener('click', twtButtonShareDay2);
const wts = document.getElementById('wts').addEventListener('click', wtsButtonShare);
const wtsDay2 = document.getElementById('wts2').addEventListener('click', wtsButtonShareDay2);
