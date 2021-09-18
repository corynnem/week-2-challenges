let inputs = document.querySelectorAll('input')

const solved = (e, i) => {
    console.log(e.target.className, e.target.value)
    if(e.target.value === e.target.className) {
        inputs[i].style = 'background-color: #caffbf;'
    } else {
        if(e.target.className === 'opencurly'){
            e.target.value === '{' ? inputs[i].style = 'background-color: #caffbf;' :  inputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'closecurly') {
            e.target.value === '}' ? inputs[i].style = 'background-color: #caffbf;' :  inputs[i].style = 'background-color: #ffadad;'  
        } else if(e.target.className === 'openparen') {
            e.target.value === '(' ? inputs[i].style = 'background-color: #caffbf;' :  inputs[i].style = 'background-color: #ffadad;' 
        } else if(e.target.className === 'closeparen') {
            e.target.value === ')' ? inputs[i].style = 'background-color: #caffbf;' : inputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'questionmark') { 
            e.target.value === '?' ? inputs[i].style = 'background-color: #caffbf;' :  inputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'colon') {
            e.target.value === ':' ? inputs[i].style = 'background-color: #caffbf;' :  inputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'semicolon') {
            e.target.value === ';' ? inputs[i].style = 'background-color: #caffbf;' :  inputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'strictE') {
            e.target.value === '===' ? inputs[i].style = 'background-color: #caffbf;' :  inputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'equal') {
            e.target.value === '==' ? inputs[i].style = 'background-color: #caffbf;' :  inputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'notEqual') {
            e.target.value === '!==' ? inputs[i].style = 'background-color: #caffbf;' :  inputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'greatOrE') {
            e.target.value === '>=' ? inputs[i].style = 'background-color: #caffbf;' :  inputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'lessOrE') {
            e.target.value === '<=' ? inputs[i].style = 'background-color: #caffbf;' :  inputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'and') {
            e.target.value === '&&' ? inputs[i].style = 'background-color: #caffbf;' :  inputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'or') {
            e.target.value === '||' ? inputs[i].style = 'background-color: #caffbf;' :  inputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'zero') {
            e.target.value === '0' ? inputs[i].style = 'background-color: #caffbf;' :  inputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'length') {
            e.target.value === '.length' ? inputs[i].style = 'background-color: #caffbf;' :  inputs[i].style = 'background-color: #ffadad;'
        }  else if(e.target.className === 'iplusplus') {
            e.target.value === 'i++' ? inputs[i].style = 'background-color: #caffbf;' :  inputs[i].style = 'background-color: #ffadad;'
        }  else if(e.target.className === 'arrow') {
            e.target.value === '=>' ? inputs[i].style = 'background-color: #caffbf;' :  inputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'bonus1'){
            e.target.value === 'num is less than 10' ? inputs[i].style = 'background-color: #caffbf;' :  inputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'bonus2') {
            e.target.value === 'true' ? inputs[i].style = 'background-color: #caffbf;' :  inputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'bonus3') {
            e.target.value === 'B' ? inputs[i].style = 'background-color: #caffbf;' :  inputs[i].style = 'background-color: #ffadad;'
        } else {
            inputs[i].style = 'background-color: #ffadad;'
        }
    }
}



 for(let i=0; i < inputs.length; i++) {
    inputs[i].addEventListener('change', (e) => solved(e, i))
 }


