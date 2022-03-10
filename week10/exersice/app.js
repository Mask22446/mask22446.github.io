let startCity;
let startState;
let endCity;
let endState;

let gate1, gate2, gate3, gate4 = false;

let key = false;

function getKey(){
    if (gate1 == true && gate2 == true && gate3 == true && gate4 == true){
        key = true;
    }
}

