import { bikerRuleDisplay } from './rules.js';
import { winerDirection, winerDirectionBack } from './displayTopWiners.js';

const rule1 = document.getElementById('1').addEventListener('click', bikerRuleDisplay);
const rule2 = document.getElementById('2').addEventListener('click', bikerRuleDisplay);
const rule3 = document.getElementById('3').addEventListener('click', bikerRuleDisplay);
const rule4 = document.getElementById('4').addEventListener('click', bikerRuleDisplay);
const rule5 = document.getElementById('5').addEventListener('click', bikerRuleDisplay);
const rule6 = document.getElementById('6').addEventListener('click', bikerRuleDisplay);

const directionRight = document.getElementById('arrow-right').addEventListener('click', winerDirection);
const directionLeft = document.getElementById('arrow-left').addEventListener('click', winerDirectionBack);
