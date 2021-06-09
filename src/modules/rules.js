import { bikerRules } from './objectModel.js';

let bikerRuleDisplay = argument=>{
    let numOption = argument.path[0].id;
    let numOptionRule = parseFloat(numOption);
    const titleRule = document.getElementById('title-pop-up');
    const paragraphRule = document.getElementById('paragraph-pop-up');

    bikerRules.forEach(content =>{
        if(numOptionRule === content.position){
                titleRule.innerText = `${content.name}`;
                paragraphRule.innerText = `${content.rules}`;
        }
    });
    
}



export { bikerRuleDisplay };



