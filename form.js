
// Get access to the div that is holding the input text and submit button
let form1Div = document.getElementById("form1");

// Get our submit button so we can add an event listener

let submitButton = document.getElementById("submit-button");

submitButton.addEventListener('click', (event)=>{
    event.preventDefault(); //The default action when pressing a button is to refresh the page
        // in order to prevent that so that we can execute the logic in this method is to use 
        // the 'preventDefault()' function

        // retrieving the value from our text input
        if (document.getElementById("css").checked){
            let textInput = document.getElementById("css");
        
        let message = textInput.value;
        // console.log(message);

        // Create the new element to be added to the div
        let newItem = document.createElement('h3');
        newItem.innerHTML = message;
        
        // adding a new element to our DOM 
        form1Div.appendChild(newItem);
        textInput.value ="";
        }

        if (document.getElementById("html").checked){
            let textInput = document.getElementById("html");
        
        let message = textInput.value;
        // console.log(message);

        // Create the new element to be added to the div
        let newItem = document.createElement('h3');
        newItem.innerHTML = message;
        
        // adding a new element to our DOM 
        form1Div.appendChild(newItem);
        textInput.value ="";
        }

        if (document.getElementById("javascript").checked){
            let textInput = document.getElementById("javascript");
        
        let message = textInput.value;
        // console.log(message);

        // Create the new element to be added to the div
        let newItem = document.createElement('h3');
        newItem.innerHTML = message;
        
        // adding a new element to our DOM 
        form1Div.appendChild(newItem);
        textInput.value ="";
        }

        if (document.getElementById("java").checked){
            let textInput = document.getElementById("java");
        
        let message = textInput.value;
        // console.log(message);

        // Create the new element to be added to the div
        let newItem = document.createElement('h3');
        newItem.innerHTML = message;
        
        // adding a new element to our DOM 
        form1Div.appendChild(newItem);
        textInput.value ="";
        }

})








let form2Div = document.getElementById("form2");

// Get our submit button so we can add an event listener

let submitButton2 = document.getElementById("submit-button2");

submitButton2.addEventListener('click', (event)=>{
    event.preventDefault(); //The default action when pressing a button is to refresh the page
        // in order to prevent that so that we can execute the logic in this method is to use 
        // the 'preventDefault()' function

        // retrieving the value from our text input
        if (document.getElementById("dog").checked){
            let textInput2 = document.getElementById("dog");
        
            let message2 = textInput2.value;
            console.log(message2);

            // Create the new element to be added to the div
            let newItem2 = document.createElement('h3');
            newItem2.innerHTML = message2;
            
            // adding a new element to our DOM 
            form2Div.appendChild(newItem2);

        }

        if (document.getElementById("cat").checked){
            let textInput2 = document.getElementById("cat");
        
            let message2 = textInput2.value;
            console.log(message2);

            // Create the new element to be added to the div
            let newItem2 = document.createElement('h3');
            newItem2.innerHTML = message2;
            
            // adding a new element to our DOM 
            form2Div.appendChild(newItem2);

        }



})