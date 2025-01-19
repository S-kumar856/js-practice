// Scopes

// global scope
let globalVar = 'global variable';

//  fucntion scope-----------------------------------------------------

function testFunction (){
    let functionVar = 'function variable';
    console.log(globalVar); // output: global variable -- (it is global scope can be access anywhere)
    console.log(functionVar); // output: function variable -- (it is a funciton scope access with in the function)
}
testFunction();
console.log(globalVar) // output : global variable -- (can be access anywhere in the code)
console.log(functionVar) // output: ReferenceError: functionVar is not defined -- (it defined in funciton so, we cannot access outside of the function scope)


// block scope -----------------------------------------------------------------------------

function testFunction (){
    let functionVar = 'function variable';
    console.log(globalVar); // output: global variable -- (it is global scope can be access anywhere)
    console.log(functionVar); // output: function variable (it is a funciton scope access with in the function)

    // block scope
    if(true){
        let blockVar = 'block variable';
        const ConstVar =  'Im in block scope'

        console.log(blockVar); // output: block variable -- (it is a block scope access with in the this  block)
        console.log(ConstVar); // Im in block scope
    }

    console.log(blockVar) // output : ReferenceError: blockVar is not defined -- (error because it is block scope it work with in the block)
    console.log(ConstVar) // output : ReferenceError: ConstVar is not defined 
}
testFunction();
