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


