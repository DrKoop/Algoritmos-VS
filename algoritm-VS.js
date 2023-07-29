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

 const reverseTheString =  (string) => {

    if( string === ""){
        return ""
    }else{
        return reverseTheString( string.substr(1) ) + string.charAt(0)
    }

}

const r_esult = reverseTheString('Brave')
console.log(r_esult) 


//reverseTheString('Brave')

//reverseTheString('Brav' + e) 1 call
//reverseTheString('Bra' + v) 2 call
//reverseTheString('Br' + a) 3 call
//reverseTheString('B' + r) 4 call
//reverseTheString('' + B) 5 call


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



function normalizeString( str ){
    return str.replace(/[^\w]/g, '').toLowerCase()
}


function getMaxChartwo (string){
    //creamos un objeto para Settear cada carcater del string y los conteos
    const charMap = {}
    //compara el conteo de la cadena
    let max = 0
    //donde acumularemos el resultado final
    let resultChar = ''

    //Primer loop para recorrer la cadena y rellenarla en nuestro objeto vacío
    for(let char of normalizeString(string)){

        //incrementamos +1 si un caracter se REPITE
        if( charMap[char] ){
            charMap[char]++
        }else{
            //si no se repite un caracater solo asignamos el value de "1"
            charMap[char] = 1
        }
    }

    //Recorremos nuestro objeto ya con los NUEVOS datos setteados
    for(let char in charMap){
        //identificamos el caracter de la cadena que sea mayor a 1 (es decir el caracter repetido)
        if( charMap[char] > max ){
            //Asignamos dicho caracter repetido, a nuestro actual objeto
            max = charMap[char]
            resultChar = char
        }

    }

    return (`The Max Character repited of Your String is ${resultChar}`)
}

console.log( getMaxChartwo('assalopaaa************aos') )



//Reverse a Number
const reverseAInt = (number) => {
    /* let convert = number.toString();
        convert.split(' ').reverse()
    Number(convert)
    return convert */

    return Number(number.toString().split('').reverse().join(''))

}

const testing = reverseAInt(1921)

console.log(  testing)




function FizzBuzz( arrayUser ) {

    let answer = []

    for( let i=1;  i<= arrayUser; i++ ){

        if (i % 3 == 0 && i % 5 == 0)
            answer.push("FizzBuzz")
        else if (i % 3 == 0)
            answer.push("Fizz")
        else if (i % 5 == 0)
            answer.push("Buzz")
        else
            answer.push(i.toString() )
    }

    return answer
}

const resultiz = FizzBuzz( 15 )
console.log( resultiz )