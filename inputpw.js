//SECOND SECTION OF APPLICATION: Input-based password generator




//DOM elements: references to elements in HTML to interact with using its ID using the assigned method
const pwbox2 = document.getElementById("pw2");
const lenElement = document.getElementById("length");
const upElement = document.getElementById("uppercase");
const lowElement = document.getElementById("lowercase");
const numElement = document.getElementById("numbers");
const symElement = document.getElementById("symbols");
const genElement = document.getElementById("make");

//putting each of these functions into the following object
//each key corresponds to the 4 methods/ functions as seen below
//returning a random character of each particular type
const randoFunc = {
    //keys
    upper: getrandUp,
    lower: getrandLow,
    number: getrandNum,
    symbol: getrandSym
    //must be exactly in the order that html is in, or switch up happens
}


//make password click event
/*when clicked, get value of dom elements and whether 
they're checked or not, event listener added to make button, so
when it is clicked, it takes the input value from the length, turns it into a number 
from a string, and takes the value from the other checkboxes as well*/

genElement.addEventListener('click', function(){
    const length =  parseInt(lenElement.value);
    //a string rn, turn it to number
    const upCheck = upElement.checked;
    const lowCheck = lowElement.checked;
    const numCheck = numElement.checked;
    const symCheck = symElement.checked;


//function to acc make password
    pwbox2.innerText = makeIbPw(
        upCheck,
        lowCheck,
        numCheck,
        symCheck,
        length
        //must be in exact order as seen on html
    );
});



// make password function
function makeIbPw(upper, lower, number, symbol, length){
    //1. initialize pw variable
    //2. filter out unchecked types - dont include
    //3. loop over length, call generator function for each type
    //4. add final pw to the pw variable and return it


    let ibPw = '';


    //count the number of checked items
    const countElType = upper + lower + number + symbol;
    //array of objects that have these booleans as their key
    const arrayElType = [{ upper }, { lower }, { number }, { symbol }].filter(
        item => Object.values(item)[0]
    );
   
    //filter out whatever is false; dont include
    //filter is a high order array method, we loop thru each item,
    //based on t or f, filters out f
    //console.log(arrayElType);


    //if none checked.. check countElType
    if(countElType === 0){
        return '';
    }


    for(let i = 0; i < length; i+=countElType){
        arrayElType.forEach(type => { //keys from randofunc
            const funcName = Object.keys(type)[0] //starts here, iterates till length
            //console.log('funcname', funcName);
            ibPw += randoFunc[funcName]();//previously empty
        });
        //even if u want the length to solely be 1, it will deploy a pw w 4
        //in the for loop we increment by wtv types count is, in which the length is 4
        //fix: slice the length

    }


    const finalpw = ibPw.slice(0, length);
    //slices by the length given

    /*console.log(finalpw);*/

    pwbox2.value=finalpw;

}

//slice: returning piece of array; not affecting original version 
//splice: original array is changed, and returns the values that were affected





function getrandUp(){ //getRandomUpper, makes a random uppercase letter
    const upperC = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']; //upperCase
    return upperC[Math.floor(Math.random()*upperC.length)]; //length and starting
}


function getrandLow(){ //getRandomLower, makes a random lowercase letter
    const lowerC = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; //lowerCase
    return lowerC[Math.floor(Math.random()*lowerC.length)]; //
}


function getrandNum(){ //getRandomUpper, makes a random uppercase letter
    const number = ['0','1','2','3','4','5','6','7','8','9']; //number
    return number[Math.floor(Math.random()*number.length)]; //
    /*we want a span of 10 as a pose to 26, 0-9 and we wanna start at 48*/
}


function getrandSym(){ //getRandomUpper, makes a random uppercase letter
    const spec_symbol = ['!','@','#','$','%','^','&','*','(',')','_','+','~','|','}','{','[',']','>','<','/','-','='];//symbol
    return spec_symbol[Math.floor(Math.random()*spec_symbol.length)];
    //multiply rounded value with length of symbol array
   
}


function copypw2(){
    pwbox2.select();
    document.execCommand("copy");
    alert("Password has been copied to clipboard!")
}







