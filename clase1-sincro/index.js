// DESESTRUCTURACION

const user = {
    name: "Jaider",
    nickname: "Kike",
    lastname: "Vanegas"
}

// Podemos acceder a las keys de los objetos utilizando el nombre del objeto mas la key a la que se quiere acceder ejemplo:
console.log(user.name);

// Sin enbargo si la propieda name tuviera otro objeto (osea varios nombres) JavaScrip daria undefiend
// Aqui es donde aparece el modelo de desestructuracion que nos permite simplificar la sintaxis para poder acceder a estas keys ejemplo:
const { name } = user; // se usan las llaves {} de objeto, porque lo que se esta desestructurando es un objeto
// entonces lo que sea que saquemos de esas llaves de objeto va ser igual a user
console.log(name);
// si queremos extraer mas propiedades las colocamos cada una en las llaves separadas por coma (,)


// Ejemplo ahora con un arreglo
const data = ["Kike", "May", "Ivan", "Students"];
console.log(data[0]);

// Aqui con la desestructuracion podemos tomar cada indice o propiedad del array y convertilo en una variable
const [teacher, mentor, assistant, students] = data;
console.log(mentor);

// En este otro ejemplo podemos tomar el primer el indice del arreglo y guardar los demas en otro arreglo
const [teacher1, ...names] = data
console.log(names);
console.log(data);

// Este concepto es importante porque en React vamos a manejar mutabilidad e inmutabilidad del estado
// La mutabilidad del estado quiere decir que nosotros tomamos el valor original de un array u objeto y este va a cambiar
// La inmutabilidad del estado quiere decir que con la desestructuracion se preserva la inmutabilidad del estado, por ende se puede mantener los valores originales de un array u objeto

// React parte del paradigma de la programacion orientada a objetos