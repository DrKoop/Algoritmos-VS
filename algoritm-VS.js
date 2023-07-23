//Multiplicar dos numeros, sin utizar el signo de multiplicacion [*]
const  multiply = (a, b) => {
    let resultado = 0
    //Verificando si el numero es positivo 
    const positivo = Math.abs(b) == b

    let i = 0

    for(i = 0; i < Math.abs(b); i++){
        resultado = positivo ? resultado + a : resultado - a
    }

    return resultado
 }

 //Obtener el numero mayor en 1 arreglo, SOLO iterando 1 vez .
 const numPositivo = (arr)  => 
                        arr.reduce( (accumulator, element)  =>
                            accumulator > element ? accumulator : element )

const res = numPositivo( [80,-12,900,-10] )


//Si lo identifica, lo borra del array
const cleanArray = (arr) => arr.reduce( ( acc, el) => {
    //Verifica que elemento, exista, no sea null,undefined,0
    if( el ){
        acc.push(el)
    }
    return acc
    
}, [])

const result = cleanArray([ 10,12,31,0,undefined, false,null])


//Aplane los array en 1 nivel
const arrExample = [ [1,2], [[3,4]], [1,[]] ]



const aplanar = arr => arr.reduce( (acc,el) => acc.concat(el),[])

const b = aplanar( arrExample )

const incorporate = arrExample.flat()
console.log(incorporate)


//Escribir una funcion que cuente la cantidad de veces se repite una palabra

const repeatedWord = word => {
    //
    const lower = word.toLowerCase()
    const splitted = lower.split(' ')

    const reduced = splitted.reduce( (acc,el) => {
        if( acc[el]){
            acc[el] ++
        }else{
            acc[el] = 1
        }
        return acc
    },{})
    //Convertido el objeto a un array
    return Object.entries(reduced).reduce( (acc,el) => acc[1] > el[1] ? acc : el)
}

const res_3 = repeatedWord('this is a repeatde word test is a a a,')

console.log(res_3)


//Escribir una funcion que compruebe si una palabra es un Palindromo


const isPalindrome = str => {
    //1 Eliminar espacios
    str = str.replace(/ /g, "")
    //2 Transformar todos los caracteres a lowercase
    const lower = str.toLowerCase()
    //3 Volver a juntar la cadena string
    const splitted = lower.split('')
    //4 Invertir la cadena
    const reversed = splitted.reverse()

    // 5 Volvemos  aunir la cadena invertida
    const joined = reversed.join('')

    return lower === joined
}

const c = isPalindrome('hanah')

console.log(c)


function esPalindromo(cadena){
    let array = cadena.split('')
    let reverseArray = array.reverse()

    return cadena == reverseArray.join('') ? 'es un palindromo' : 'no es un palindromo'
}

const e = esPalindromo('hanah')

console.log(e)

for(i= 1; i<= 100; i ++){
    let result = ''

    if( i%3 === 0){
        result = result + 'Fizz'
    }
    if( i%5 === 0){
        result = result + 'Buzz'
    }

    console.log(result || i)
}

//Obtener 6 numeros random, que no sean repetidos, y siempre que el array se llene con "6"  elementos cortar la funcion

const randomInterval = (min, max) => {
    return Math.floor( Math.random() * ( max - min + 1) + min )
}

function filterNumbers(){
    const result = []

    while( result.length < 6 ){
        const number = randomInterval(0, 6)
        //Evitar Numeros Repetidos
        if(result.includes(number)) continue
        result.push(number)
    }
    return result
}

const res2 = filterNumbers()
console.log(res2)

//Busqueda Binaria, Busca un elemento dentro de un Array, en el segundo argumento se Sette el entero que se esta buscando 

const busquedaBinaria= function( arreglo,elementos){
    let inicio = 0
    let fin = arreglo.length - 1

    while( inicio <= fin ){
        let puntoMedio = Math.floor(( inicio + fin ) / 2)

        if( arreglo[puntoMedio] === elementos ){
            return puntoMedio
        }else if( arreglo[puntoMedio] < elementos){
            inicio = puntoMedio + 1
        }else{
            fin = puntoMedio -1
        }
    }

    return - 1
}


const test = busquedaBinaria( [1,2,3,11,2,0,1], 3)

console.log(test)

//Invertir un String

const reverseString = (str) => {
    //1 string a Array 
    const arr =  str.split('')
    // 2 voltear el array
    arr.reverse()
    //convertirlo a string
    str = arr.join('')
    return str
}

const res3 = reverseString('hola')

console.log(res3)

//Encontrar el caracter que se repite mas veces en un String y cuantas veces se repite



const maxCharRepeat = (str) => {
    //Creamos un objeto
    let obj = {}
    //si el carcater existe en el objeto Setteamos (1) , si ese valor esta duplicado => incrementamos el valor +1,si no peramenece con el mismo valor inicial (1)
    for( let char of str){
        (!obj[char]) ? obj[char] = 1 : obj[char]++;
        console.log(obj)
    }

    //Recorrer el objeto para verificar cuantas veces se esta repitiendo el elemento
    let maxNum = 0
    let maximumChar = ''
    for( let char in obj ){

        if(obj[char] >= maxNum ){
            maxNum = obj[char]
            maximumChar = char
        }
    }


    console.log(`El elemento: ${maximumChar} aparece ${maxNum} veces`)
}


maxCharRepeat('TesTsETtttiiInnGggggG')