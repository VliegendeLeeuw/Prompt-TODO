const todos = [];

// User commands are:

// New
// List
// Delete
// Quit

let input = prompt("What would you like to do?").toLowerCase();
while (input !== "quit") {
    if (input === "new") {
        let tmp = prompt("What would you like add to your todo's?");
        if (!tmp) {
            tmp = prompt("Please enter a valid todo.")
        } else {
            todos.push(tmp);
        }
    } else if (input === "list") {
        console.log("**********")
        let index = 0;
        for (let todo of todos) {
            console.log(index, todo);
            index++;
        }
        console.log("**********");
    } else if (input === "delete") {
        let index = prompt("What todo would you like to delete?");
        while (isNaN(parseInt(index)) || index.toLowerCase() === 'x' || index > todos.length - 1 || index < 0) {
            if (index.toLowerCase() === 'x') {
                console.log("Okay, cancel delete.");
                break;
            } else {
                index = prompt("Please enter a valid index, or type X to cancel delete.");
            }
        }
        if (index.toLowerCase() !== 'x') {
            todos.splice(index, 1);
            console.log("Todo succesfully deleted.");
        }
    } else {
        input = prompt("Please insert a valid command. (new, list, delete, quit)")
    }
    input = prompt("What would you like to do?");
}
console.log("You have quit the app.")