const fs = require('fs');

fs.readFile('database.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    var cadena_split = data.split('\n');
    const top = cadena_split[0].split(',');
    console.log(top);

    for (let i = 1; i < cadena_split.length - 1; i++) {
        var query = cadena_split[i].split(",");

        if (top.length !== query.length || query.length === 0) {
            console.log("datos incorrectos o incompletos");
            continue;
        }
	const nick = query[0];
	const matricula =query[1];
	const facu = query[2];
	const carrera = query[3];
	const promedio =parseFloat( query[4]);
	const edad =parseInt( query[5]);
	const correo = query[6];

	const nickRegex = /^[A-Za-z]+$/;
        if (!nick.match(nickRegex)) {
        console.log(`Error en el renglón ${i}: El valor de "nick" debe contener solo letras. `);
       continue; 
        }
	

	const matriculaRegex = /^[0-9]+$/;
	if (!matricula.match(matriculaRegex)) {
   		 console.log(`Error en el renglón ${i}: La matrícula debe contener solo números enteros.`);
    	continue;

	}
	const  facuRegex =/^[A-Za-z]+$/;
        if (!facu.match(nickRegex)) {
        console.log(`Error en el renglón ${i}: El valor de "facu" debe contener solo letras.`);
        continue;
        }
	     const  carreraRegex =/^[A-Za-z]+$/;
        if (!carrera.match(nickRegex)) {
        console.log(`Error en el renglón ${i}: El valor de "carrera" debe contener solo letras.`);
        continue;
        }


	if (isNaN(promedio) || typeof promedio !== 'number') {
		console.log(`Error en el renglón ${i }: El promedio no es un número válido.`);
            continue;

	}
	if (isNaN(edad) || typeof edad !== 'number' || edad <0) {
                console.log(`Error en el renglón ${i }: La edad debe de ser un numero.`);
		   continue;
	}
	const correoRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        if (!correo.match(correoRegex)) {
            console.log(`Error en el renglón ${i + 1}: El correo electrónico no tiene un formato válido.`);
	  continue;
  }


        console.log("renglon " + i + " : " + cadena_split[i]);
        query.forEach(function (queryData, index) {
            console.log(top[index] + ": " + queryData);
        });
    }
});

