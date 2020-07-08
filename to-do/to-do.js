const fs = require('fs');
//const { require } = require('yargs');


let todoList = [];

const saveDB = () => {
    let data = JSON.stringify(todoList);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) { console.log(err); } else { console.log('Tarea registrada'); }
    });
};

const loadDB = () => {

    try {
        todoList = require('../db/data.json');
    } catch (error) {
        todoList = [];
    }
    //console.log(todoList);
};

const getTodoList = () => {
    loadDB();
    return todoList;
};

const createTodo = (descripcion) => {

    loadDB();

    let todo = {
        descripcion,
        completado: false
    };

    todoList.push(todo);

    saveDB();

    return todo;
};

const updateTodo = (descripcion, completado = true) => {
    loadDB();
    let index = todoList.findIndex(task => {
        return task.descripcion === descripcion;
    });

    if (index >= 0) {
        todoList[index].completado = completado;
        saveDB();
    }
};

const deleteTodo = (descripcion) => {
    loadDB();
    let todolistUpdated = todoList.filter(task => {
        return task.descripcion !== descripcion;
    });

    todoList = todolistUpdated;

    saveDB();
};

const filterTodo = (descripcion) => {
    loadDB();
    let todoListFiltred = todoList.filter(task => {
        return task.descripcion === descripcion;
    });

    return todoListFiltred;
};

module.exports = {
    createTodo,
    getTodoList,
    updateTodo,
    deleteTodo,
    filterTodo
};