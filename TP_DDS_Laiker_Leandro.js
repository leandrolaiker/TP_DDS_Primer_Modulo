/*1. Convertir una cadena de texto a formato de título:

Crear una función que reciba una frase (string) y devuelva la misma frase con el formato de
título, donde la primera letra de cada palabra está en mayúscula y el resto en minúscula.

● Ejemplo: Si la entrada es “mi amigo me invitó a comer”, la salida debería ser “Mi
Amigo Me Invitó A Comer”.
● Ayuda: Los strings entienden una función “toLowerCase()” que convierte la primera
letra del texto en mayúscula. Además, se espera que se resuelva con algún ciclo (exacto
o inexacto) y utilizando la función anteriormente mencionada.*/

var oracion = "mi amigo me invitó a comer";

function capitalizar(oracion){
    let palabras = oracion.split(" ");
    let fraseFinal = "";
    for(let i = 0; i < palabras.length; i++){
        const primeraLetra = palabras[i].charAt(0).toUpperCase();
        const restoDeLaPalabra = palabras[i].slice(1).toLowerCase();
        fraseFinal += primeraLetra + restoDeLaPalabra + " ";
    }
    console.log(fraseFinal);
}

capitalizar(oracion);



/*2. Concatenar elementos de un array con un separador personalizado:

Crear una función que reciba un array de strings y un separador, y devuelva una sola cadena de
texto que contenga todos los elementos del array concatenados con el separador especificado.

● Ejemplo: Si la entrada es ["Hola", "Mundo", "JavaScript"] y el separador “-”, la
salida debería ser "Hola-Mundo-JavaScript"*/


let entrada = ["Hola", "Mundo", "Javascript"];
let separador = "-";

function concatenar(entrada, separador){
    return entrada.join(separador)
}

console.log(concatenar(entrada, separador));



/*3. Revertir las palabras de una frase:

Crear una función que reciba una cadena de texto y devuelva la misma cadena con las palabras
en orden inverso.

● Ejemplo: Si la entrada es "JavaScript es divertido", la salida debería ser “divertido es
JavaScript”
● Ayuda: Se sugiere recorrer la frase con algún ciclo de repetición. Cada vez que se
encuentre un espacio en blanco se habrá encontrado una palabra. Cada palabra podría
ser insertada en un array (¿para qué?)*/

let frase = "Javascript es divertido";

function invertir(entrada){
    const array = entrada.split(" ").reverse();
    return array.join(" ");
}

console.log(invertir(frase));



/*4. Contar la cantidad de veces que aparece una palabra en una cadena:

Crear una función que reciba una cadena de texto y una palabra, y devuelva la cantidad de
veces que aparece esa palabra en la cadena.

● Ejemplo: Si la entrada es "El sol brilla y el cielo está despejado.", y la palabra que se
quiere buscar es “el”, la salida debería ser el número 2.
● Ayuda: Se sugiere recorrer la frase con algún ciclo de repetición. Cada vez que se
encuentre un espacio en blanco se habrá encontrado una palabra. Cuando se tenga una
palabra, se la podrá comparar con la palabra buscada y si coincide … (siga usted!)*/

let cadena = "El sol brilla y el cielo está despejado";
let palabra = "el";

function buscarPalabra(entrada, palabra){
    let array = entrada.split(" ");
    let contadorDePalabras = 0;
    for(let i = 0; i < array.length; i++){
        let palabraActual = array[i];
        if(palabraActual == palabra || palabraActual == capitalizarPalabra(palabra)){
            contadorDePalabras++;
        }
    }
    return contadorDePalabras
}

function capitalizarPalabra(palabra){
    return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
}

console.log(buscarPalabra(cadena, palabra));



/*5. Comprobar si una cadena de texto termina con un determinado sufijo:

Crear una función que reciba una cadena de texto y un sufijo, y devuelva true si la cadena
termina con ese sufijo, false en caso contrario.

● Ejemplo: Si la entrada es "JavaScript es un lenguaje de programación" y se pretende
saber si termina con “ción”, debería devolver true.
● Ayuda: Se espera que el ejercicio se resuelva con ciclos inexactos.*/


let input = "Javascript es un lenguaje de programacion";
let sufijo = "cion";

function buscarSufijo(entrada, sufijo){
    let array = entrada.split(" ");
    let ultimaPalabra = array[array.length - 1].split("");
    let sufijoArray = sufijo.split("");
    while(ultimaPalabra.length >= sufijoArray.length){
        if(ultimaPalabra.join("") == sufijoArray.join("")){
            return true
        }else{
            ultimaPalabra.shift();
        }
    }

    return false
}

console.log(buscarSufijo(input, sufijo));



/*6. Eliminar los espacios en blanco al inicio y final de una cadena:

Crear una función que reciba una cadena de texto y elimine los espacios en blanco al inicio y
final de la misma.

● Ejemplo: Si la entrada es " JavaScript es divertido “, la salida debería ser "JavaScript
es divertido".
● Ayuda: Se sugiere utilizar un ciclo exacto para recorrer toda la frase y que cada vez que
se encuentre un caracter no “vacío” (espacio) se lo considere para la nueva palabra “sin
espacios”. Si se le busca la vuelta, se puede reutilizar la función del punto 2.*/


let ejemplo = "      JavaScript es divertido      ";

function borrarEspacio(ejemplo){
    let array = ejemplo.split("");

    while(array[0] == " "){
        array.shift();
    }

    while((array[array.length - 1]) == " "){
        array.pop();
    }

;   return array.join("")
}

console.log(borrarEspacio(ejemplo));



/*7. Extraer el dominio de una dirección de correo electrónico:

Crear una función que reciba una dirección de correo electrónico y devuelva únicamente el
dominio de la misma.

● Ejemplo: Si la entrada es “jhondoe@ahk.com.ar”, la salida debería ser “ahk.com.ar”*/

let correo = "jhondoe@ahk.com.ar";

function dominio(correo){
    let array = correo.split("");

    while(array[0] != "@"){
        array.shift();
    }
    
    return array.join("")
}

console.log(dominio(correo));



/*8. Combinar dos arrays alternando sus elementos:

Crear una función que reciba dos arrays y devuelva un nuevo array con los elementos de ambos
arrays combinados alternativamente.

● Ejemplo: Si la entrada fueran los arrays [1, 2, 3] y ['a', 'b', 'c', ‘d’], la salida debería ser [1,
‘a’, 2, ‘b’, 3, ‘c’, ‘d’]*/


let array1 = [1, 2, 3];
let array2 = ["a", "b", "c", "d"];

function combinarArrays(array1, array2){
    let arrayCombinado = [];

    let arrayMenor = ordenarArrays(array1, array2)[1];
    let arrayMayor = ordenarArrays(array1, array2)[0];

    while(arrayMenor.length > 0){
        arrayCombinado += array1[0] + array2[0];
        arrayMenor.shift();
        arrayMayor.shift();
    }

    return arrayCombinado + arrayMayor.join("")

}

function ordenarArrays(array1, array2){
    let array = [array1, array2];
    return array.sort((a, b) => array1.length - array2.length)
}
console.log(combinarArrays(array1, array2));



/*9. Calcular impuestos:

Desarrollar una función que permita conocer los impuestos que debe abonar una persona dada
su edad y sus ingresos mensuales. Los impuestos a abonar por una persona entre 18 y 20 años
es un 10% de los ingresos; las personas entre 21 y 30 deben abonar 15% de los ingresos; y
todo el resto un 40%. Los menores de edad no abonan impuestos.

● Ejemplo: Si la entrada fuera la edad 18 e ingreso 1000, la salida esperada debería ser
100.*/


let edad = 18;
let ingresos = 1000;

function calcularImpuestos(edad, ingresos){
    
    const tasa = calcularTasa(edad);

    return (tasa*ingresos)/100
}

function calcularTasa(edad){
    if(edad < 18){
        return 0
    }

    if(edad >= 18 && edad < 21){
        return 10
    }

    if(edad >= 21 && edad < 30){
        return 15
    }

    return 40
}

console.log(calcularImpuestos(edad, ingresos));



/*10. Resumen de cantidad de likes:

Desarrollar una función que, dada una cantidad numérica de likes, devuelva un texto informativo
de la cantidad de likes en formato de “K” para miles y “M” para millones.

● Ejemplo: Si la entrada fuera 1400, la salida debería ser “1.4K”; o si la entrada fuera “34
567” la salida debería ser “34.5K”.*/

let likes = 34567;

function formatoAlfanumerico(likes){

    const rango = determinarRango(likes);

    switch(rango){
        case 0:
            return likes
        
        case 1:
            return (likes/1000).toFixed(1) + "k"

        case 2:
            return (likes/1000000).toFixed(1) + "M"
    }
}

function determinarRango(likes){

    if (likes >= 1000 && likes < 1000000){
        return 1
    }
    if (likes >= 1000000){
        return 2
    }

    return 0
    
}

console.log(formatoAlfanumerico(likes));