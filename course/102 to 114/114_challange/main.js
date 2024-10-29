let inputElement = document.querySelector(".input"); 
let submitElement = document.querySelector(".add"); 
let tasksDiv = document.querySelector(".tasks");

let createElementDiv;
let createDeletedButton;

// window.localStorage.clear();

// get the old values if there saved elements into the local Storage
let tasksArray = JSON.parse(window.localStorage.getItem("tasks")) || []; // Modified: load tasks from localStorage if available

// display stored tasks [after refresh]
tasksArray.forEach(function(task) { 
    /* 
        Descritpion: 
            - add the text into the div & append the div to the parent
    */    
    createElement(task.title);

    // 2. remove element when the deleted button pressed
    createDeletedButton.addEventListener('click', function(e){
        this.parentElement.remove();

        // Filter out the task from the array and update localStorage
        tasksArray = tasksArray.filter(function(t){
            return t.id  !== task.id;
        });
        // after deleting the element update the localStorage
        window.localStorage.setItem("tasks", JSON.stringify(tasksArray));
    });
});

function addTask(){
    // This means the user have entered value
    if(inputElement.value !== ""){

        /* 
            Descritpion: 
                - add the text into the div & append the div to the parent
        */
        createElement(inputElement.value);
        
        // 2. create an object contains the id (date) & title (data the user enterd)
        const task = {
            id: Date.now(),
            title: inputElement.value
        };
        tasksArray.push(task);

        // 3. add the taks object to localStorage
        window.localStorage.setItem("tasks", JSON.stringify(tasksArray));

        // 3. clear the inputElement data  for new element to be enetered
        inputElement.value = "";

        // 4. remove element when the deleted button pressed
        createDeletedButton.addEventListener('click', function(e){
            this.parentElement.remove();
            // Filter out the task from the array and update localStorage
            tasksArray = tasksArray.filter(function(t){
                return t.id  !== task.id;
            });
            // after deleting the element update the localStorage
            window.localStorage.setItem("tasks", JSON.stringify(tasksArray));
        });
        
    }
};

/* 
    Descritpion: 
        - add the text into the div & append the div to the parent
*/
function createElement(text){
    // 1. add the text into the div
    createElementDiv = document.createElement("div");
    createElementDiv.textContent = text;

    // 2. append the div to the parent
    tasksDiv.append(createElementDiv);
    createDeletedButton = document.createElement("button");
    createElementDiv.append(createDeletedButton);
    createDeletedButton.textContent = "Deleted";
}



submitElement.onclick = addTask;