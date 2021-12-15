const button = document.querySelector('button');
const box = document.querySelector('.box')
const colors = ['red', 'orange', 'blue', 'yellow', 'pink', 'purple']
console.log(button);
let randomValues=[];
button.addEventListener('click', changeColor);


function changeColor(){
    if(randomValues.length === 0){
        for(let i=0; i< colors.length; i++){
            randomValues.push(i);
            console.log(`${i} add`);
        }
    }

    let randomIndex = Math.floor(Math.random() * randomValues.length);
    let indexFromMyarray = randomValues[randomIndex];
    randomValues.splice(randomIndex, 1);
    box.style.backgroundColor = colors[indexFromMyarray];

}