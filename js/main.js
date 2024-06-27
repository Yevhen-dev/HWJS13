// Write a function that counts the number of uppercase letters in a string and returns the number    
// countUpperCase("abc"); ===> 0
// countUpperCase("abcABC123"); ===> 3
function countUpperCase ( str ) {
    let upperCasePatern = /[A-Z]/g;
    return str.match(upperCasePatern).length;
}

console.log( countUpperCase( "HeLlo12 M4y NamE IS DUnKaN" ) );


// Write a function that removes all text characters from the string, and converts the received digital values ​​to the number type and returns it 
// fclearString("hell5o wor6ld") ======> 56
function fclearString( str ) {
    let numPattern = /[0-9]/g;
    return +str.match( numPattern ).join("");
}

console.log( fclearString( "Sos8me1 al9 4sasd 22 s6 s45as51s00x5" ) );


// Create a username validation function, the name can include letters, numbers, dashes and underscores, the length of the name must be from 4 to 10 characters. 
// Example: validateUsr('a') => false,
// validateUsr('p1pp1') => true, validateUsr('asd43_34') => true
function validateUsr (str) {
    let validationPattern = /^[A-Za-z0-9-_]{4,10}$/g;
    return validationPattern.test( str );
}

console.log( validateUsr("A94_aW-dd") );


// Create a function that takes a message and a time in milliseconds as arguments and outputs this message to the console after the specified time.
function messageWithTimer ( message, ms ) {
    setTimeout( () => console.log(message), ms );
}

messageWithTimer( "hello", 3000 );



// additional task

let btnStart = document.querySelector( ".watch__settings__start" );
let btnReset = document.querySelector( ".watch__settings__reset" );
let timerSpanS = document.querySelector( ".watch__time__s" );
let timerSpanMS = document.querySelector( ".watch__time__ms" );
let initialTime = 12;
let interval = 0;

timerSpanS.innerHTML = initialTime > 9 ? initialTime : "0" + initialTime ;

function setInitialValueForTimer( decrement, ms ) {
    timerSpanMS.innerHTML = ms;
    timerSpanS.innerHTML = initialTime > 9 ? initialTime - decrement : "0" + ( initialTime - decrement  );
    document.documentElement.style.setProperty('--progress', 100);
}

btnStart.addEventListener( "click", function() {
    clearInterval( interval );
    setInitialValueForTimer( 1, 99 );
    interval = setInterval( startCountDown, 10 );
} );

btnReset.addEventListener( "click", function() {
    clearInterval( interval );
    setInitialValueForTimer( 0, "00" );
} );


function startCountDown () {
    let msValue = +timerSpanMS.innerHTML;
    let sValue = +timerSpanS.innerHTML;
    msValue--;
    
    if( msValue >= 10 ) {
        timerSpanMS.innerHTML = msValue; 
    } else {
        timerSpanMS.innerHTML = "0" + msValue;
        
    }
    if( msValue === 0 ) {
        if( sValue === 0 ) {
            clearInterval(interval);
            document.documentElement.style.setProperty('--progress', 0);
            return;
        }
        timerSpanMS.innerHTML = 99;
        sValue--;
        let stroke = getComputedStyle(document.documentElement).getPropertyValue( "--progress" );
        document.documentElement.style.setProperty('--progress', stroke - 100/initialTime);
        
        if( sValue >= 10 ) {
            timerSpanS.innerHTML = sValue;
        } else {
            timerSpanS.innerHTML = "0" + sValue;

        } 
    }
     

}


