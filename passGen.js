//FIRST SECTION OF APPLICATION: random 8-character password generator



//VARIABLE DECLARATIONS
const pwbox = document.getElementById("pw") //HTML element for password to be displayed
const length = 8; 
const num = ['0','1','2','3','4','5','6','7','8','9']; //number
const lowC = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; //lowerCase
const upC = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']; //upperCase
const specSym = ['!','@','#','$','%','^','&','*','(',')','_','+','~','|','}','{','[',']','>','<','/','-','='];//symbol
const chars_all = num + lowC + upC + specSym; //all possible characters that could be used in a given password

//FUNCTION TO GENERATE A PASSWORD
function makePassword(){ 
    let pw = ""; //initializing an empty string
    /*adding 1 random character from each of the following types, 
    ensuring at least one character from each - thus setting the length as 4 characters*/
    pw += num[Math.floor(Math.random()*num.length)]; 
    pw += lowC[Math.floor(Math.random()*lowC.length)]; 
    pw += upC[Math.floor(Math.random()*upC.length)]; 
    pw += specSym[Math.floor(Math.random()*specSym.length)]; 
    //1. we create a random floating number between 0-1 (excludes 1)
    //2. we multiply this float with the length of each character type's array
    /*3. then we round the present number to the nearest whole number, which 
    means that we have created a random index number within each character type's 
    array, signified by []
    4. we append the value of the randomly selected index number to the pw string*/

    //could use for here instead
    while(pw.length < length){
        /*while loop that continues to add one random character from chars_all
        until pw reaches the length of 8 characters*/
        /*each iteration means one random character until reaching 8 characters*/
        pw += chars_all[Math.floor(Math.random()*chars_all.length)]; 
       
    }
    if (pwbox){
        /*once while loop gets password to reach the 8 character limit, it checks
        whether the password box is true to assign its value to the generated password*/
        pwbox.value = pw; //setting value of input field, for user to see on screen
    }
   
}

//COPYING FUNCTION
function copypw(){
    pwbox.select();//selecting text from pwbox; its value, which is pw
    document.execCommand("copy"); //used this method to copy text into clipboard
    alert("Password has been copied to clipboard!")
    //copying to clipboard; not using clipboard api
}
