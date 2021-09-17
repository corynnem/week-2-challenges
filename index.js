let inputs = document.querySelectorAll('input')

const solved = (e, i) => {
    console.log( 'hfkdjafkldsjal;')
    console.log(e.target.className, e.target.value)
    if(e.target.value === e.target.className) {
        inputs[i].style = 'background-color: #caffbf;'
    } else {
        if(e.target.className === 'curly'){
            e.target.value === '}' ? inputs[i].style = 'background-color: #caffbf;' : e.target.value === '{' ? inputs[i].style = 'background-color: #caffbf;' : inputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'paren') {
            e.target.value === ')' ? inputs[i].style = 'background-color: #caffbf;' : e.target.value === '(' ? inputs[i].style = 'background-color: #caffbf;' : inputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'questionmark') { 
            e.target.value === '?' ? inputs[i].style = 'background-color: #caffbf;' :  inputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'colon') {
            e.target.value === ':' ? inputs[i].style = 'background-color: #caffbf;' :  inputs[i].style = 'background-color: #ffadad;'
        } else {
            inputs[i].style = 'background-color: #ffadad;'
        }
    }
}


console.log(inputs)

 for(let i=0; i < inputs.length; i++) {
    inputs[i].addEventListener('change', (e) => solved(e, i))
 }
inputs[0]