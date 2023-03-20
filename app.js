const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs');

        
console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creada'))
    .catch(err => console.log(err));




 
// const [ , ,arg3 = 5] = process.argv;
// const[,base] = arg3.split('=');
// console.log(arg3);
// console.log(base);
