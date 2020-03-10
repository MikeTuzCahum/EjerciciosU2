/*
Miguel G. Tuz Cahum
Ejercicios de Programacion Logica y Funcional
*/


// -------- Ejercicio 1 --------
// 1.	Determina el resultado de un número x elevado a una potencia n.

    function elevado(x,y) {
        return console.log("Ejercicio 1 => "+x+" ^ "+y+" = "+Math.pow(x,y));
    }
    
    elevado(8,5);

// -------- Ejercicio 2 --------
// 2.	Determina si un número n se encuentra en un rango determinado.

function rango(x) {
   if (x>=1 && x<=10){
        return true;
    }else{
        return false;
    }
    
}
console.log("Ejercicio 2 => "+rango(62));

// -------- Ejercicio 3 --------
// 3.	Dado un número entero en segundos, determinar la cantidad de horas, minutos y segundos que contiene.

    function reloj(segundos) {
        var horas = Math.floor(segundos / 3600);
        horas = (horas < 10)? '0' + horas : horas;
        var minutos = Math.floor((segundos / 60) % 60);
        minutos = (minutos < 10)? '0' + minutos : minutos;
        var segundos = segundos % 60;
        segundos = (segundos < 10)? '0' + segundos : segundos;
        return horas + ':' + minutos + ':' + segundos;
    }
    console.log("Ejercicio 3 => "+ reloj(4000));

// -------- Ejercicio 4 --------
// 4.	Determine el mayor de 4 enteros.

    function mayor(n1,n2,n3,n4) {
        return Math.max(n1,n2,n3,n4);
    }
    console.log("Ejercicio 4 => "+"Mayor es: "+mayor(4,23,65,21));

// -------- Ejercicio 5 --------
// 5.	Calcula la suma de una lista (arreglo) de elementos.
    function suma() {
        return [...arguments].reduce((a,b)=>a+b);
     }
    console.log("Ejercicio 5 =>"+" Suma Array: "+suma(1,2,3,4,5,56,32,1));

// -------- Ejercicio 6 --------
// 6.	Determina si un elemento dado está contenido en una lista. Devuelve verdadero o falso.

    function lista() {
        return arreglo=[1,2,3,4,5,6,7,8,9,10];
    }
    console.info("Ejercicio 6 => "+lista().includes(13));

// -------- Ejercicio 7 --------
// 7.	Determina si dada una lista, ésta se encuentra ordenada. Se debe devolver verdadero o falso. 

    function orden() {
        var ordenado=true;
        for (let i = 0; i < arguments.length; i++) {    
            if (i + 1 < arguments.length) {
                if (arguments[ i ] > arguments[i + 1]) {
                    ordenado = false;
                    break;
                }
            }      
        }
        return (ordenado)?true:false;
       // return (ordenado)?console.log("La lista ordenada"):console.log("La lista desordenada");
    }
    console.log("Ejercicio 7 => "+orden(1,2,3,75,6,7));

// -------- Ejercicio 8 --------
// 8.	Dadas dos listas, determine si son iguales. Devolver verdadeo o falso.

    function comparacion (array1,array2){
        var bandera=true;
        for(let i=0; i<array1.length;i++){
            if(array1[i]!=array2[i]){
                bandera=false;
            }
        }
        return bandera? true: false;
    }

    let array1 =[1,2,3,4,5]; 
    let array2 =[1,2,3,4,5]; 
    console.log("Ejercicio 8 => "+comparacion(array1,array2));

// -------- Ejercicio 9 --------
// 9.	Realizar una función recursiva que retorne como salida el resultado de la suma 1 + 3 + 5 + 7 + 9 + N.

    function sum(nums) {
        if (nums.length === 0) {
        return 0;
        } else {
            const [first, ...rest] = nums;
            return first + sum(rest);
        }
    }
    console.log("Ejercicio 9 => "+sum([1,3,5,7,9,11]));

// -------- Ejercicio 10 --------
// 10.  Realizar una función que reciba una lista y devuelva empleando recursividad otra lista de los elementos pares.

    const numpar = lista => {
        let result =[];
        if(lista.length ===0){
            return result;
        }if(lista[0]%2 ===0){
            result.push(lista[0]);
        }return result.concat(numpar(lista.slice(1)));
    }
    let num =[2,4,5,7,8,9];
    //console.log("Lista: "+num);
    console.log("Ejercicio 10 =>"+numpar("Pares:"+num));

// -------- Ejercicio 11 --------
// 11.	Realiza una función que permita cargar calcular la unión, intersección y diferencia de dos conjuntos dados. 

    function matematicas(conjunto1,conjunto2) {
        let union = new Set([...conjunto1, ...conjunto2]);
        let intersection = new Set([...conjunto1].filter(x => conjunto2.has(x)));
        let difference = new Set([...conjunto1].filter(x => !conjunto2.has(x)));
        console.log("Union:");
        console.log(union);
        console.log("Interseccion:");
        console.log(intersection);
        console.log("Diferencia:");
        console.log(difference);
    }
    console.log("Ejercicio 11 => :")
    let conjunto1 = new Set([1,2,3,4,5]);
    let conjunto2 = new Set([2,6,4,7]);
    matematicas(conjunto1,conjunto2);


// -------- Ejercicio 12 --------
// 12.	Realiza una función que permita definir un mapa de datos y permita encontrar un valor a partir de su clave. 

    function Mapeo() {

        let estudiantes =[
            {
                nombre:'Miguel',
                calificacion: 20
            },
            {
                nombre:'Juan',
                calificacion: 12
            },
            {
                nombre:'Maria',
                calificacion:9
            }
        ];
        let estudiantesNombres = estudiantes.map(estudiante => estudiante.nombre);
        let datos =estudiantesNombres.includes("Miguel");
        return datos; 
    }
    console.log("Ejercicio 12 =>"+Mapeo());







  
