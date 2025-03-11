const todos = [];

function addTodo(text) {
    const id = todos.length + 1; 
    const newTodo = {
        id: id,
        text: text,
        erledigt: false 
    };
    todos.push(newTodo);
}

function zeigeTodos() {
    if (todos.length === 0) {
        console.log("Nichts zu tun !");
        return;
    }

    console.log("To-Do-Liste:");
    todos.forEach(todo => {
        console.log(`ID: ${todo.id}, Aufgabe: ${todo.text}, Erledigt: ${todo.erledigt}`);
    });
}

function erledigteTodo(id) {
    const todo = todos.find(todo => todo.id === id);
    
    if (todo) {
        todo.erledigt = true; 
        console.log(`To-Do mit ID ${id} wurde als erledigt markiert.`);
    } else {
        console.log(`To-Do mit ID ${id} nicht gefunden.`);
    }
}

function neuesTodoEingeben(callback) {
    readline.question('Gib eine Aufgabe ein: ', (text) => {
        addTodo(text);
        console.log(`Neues To-Do hinzugefügt: "${text}"`);
        if (callback) callback();
    });
}

function erledigtesTodoEingeben(callback) {
    readline.question('Welche Aufgabe hast du schon erledigt ? (ID) ', (id) => {
        erledigteTodo(parseInt(id));
        if (callback) callback(); 
    });
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function haupt() {
    const loop = () => {
        console.log("Geben sie eine Aufgabe in die Todo-Liste ein.");
        zeigeTodos();

        neuesTodoEingeben(() => {
            zeigeTodos();
            erledigtesTodoEingeben(() => {
                loop(); 
            });
        });
    };

    loop();
}


haupt();
