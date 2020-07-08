require('colors');

const argv = require('./config/yargs').argv;
const todo = require('./to-do/to-do');
//console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = todo.createTodo(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let todoList = todo.getTodoList();

        for (const task of todoList) {
            console.log('=========== TODO LIST =============='.green);
            console.log(task.descripcion);
            console.log('Estado: ', task.completado);
            console.log('===================================='.green);
        }
        break;
    case 'actualizar':
        todo.updateTodo(argv.descripcion, argv.completado);
        break;
    case 'borrar':
        todo.deleteTodo(argv.descripcion);
        break;
    case 'filtrar':
        let todoListFitred = todo.filterTodo(argv.descripcion);
        for (const task of todoListFitred) {
            console.log('=========== TODO LIST =============='.green);
            console.log(task.descripcion);
            console.log('Estado: ', task.completado);
            console.log('===================================='.green);
        }
        break;
    default:
        console.log('Comando no reconocido');
}