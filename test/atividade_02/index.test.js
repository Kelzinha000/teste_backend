// Façam os testes automatizados com Jest dos exercícios abaixo e disponibilizem nessa atividade o arquivo de funções e o arquivo de testes.

// 1 - Crie uma função que receba um número de 1 a 100 e retorne apenas os números primos anteriores. Após realize o teste automatizado para essa função.

// 2 - Crie uma função que receba um número n de 1 a 100 e retorne o enésimo  número dessa sequência. Após realize o teste automatizado para essa função.

// 3 - Crie uma função que receba um objeto e verifique se ela esse objeto possui todos os atributos necessários. Após, crie um teste que verifica o comportamento correto dessa função.
// (os atributos são: nome, idade, pais, endereço)

import { numerosPrimos, pessoa , Fibonacci} from "./funcao"


test("Verifica se os números são primos", ()=>{
    expect(numerosPrimos(10)).toEqual([2, 3, 5, 7])
    console.log("passou")
})

test("Fibonacci", ()=>{
    expect(Fibonacci(1)).toBe(0)
})

test("Verifique se a propriedade se existe no objeto pessoa ", ()=>{
    
        expect(pessoa).toHaveProperty("endereco")
})