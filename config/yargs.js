const options = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
    },

}

const argv = require('yargs')
    .command("crear", "Crea los TODO's", options)
    .command("actualizar", "actualiza los TODO's", options)
    .command("borrar", "borra una tarea", options)
    .command("filtrar", "filtra una tarea", options)
    .help()
    .argv;

module.exports = {
    argv
};