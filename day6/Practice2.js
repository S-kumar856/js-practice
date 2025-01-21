// Global scope
let courseName = "JavaScript";

function practiceScope() {
    // Function scope
    let topic = "Variables";
    console.log(courseName + " - " + topic); // output: javascript - variables
    
    if (true) {
        // Block scope
        let detail = "Exploring scopes";
        console.log(detail); 
    }

    //console.log(detail); // output: ReferenceError: detail is not defined
}

practiceScope();