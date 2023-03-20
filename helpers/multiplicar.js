const fs = require('fs');
const colors = require('colors');


const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {

        console.log('================'.green)
        console.log(`Tabla del ${base}`)
        console.log('================'.green)

        let salida, consola = '';

        for(let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;

        }

        fs.writeFileSync(`/salida/tabla-${base}.txt`, salida)

        if(listar) {
            console.log(consola);
        }
        
        return `Tabla del ${base}`;

    } catch (err) {
        throw err
    }
}

module.exports = {
    crearArchivo
}