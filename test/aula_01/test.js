import { areaQuadrado } from "./funcao.js"
import {listaDeFrutas} from './funcao.js'

test("Verifica área do quadrado", ()=>{
// toBe() verifica se o valor de dentro é o valor esperado
    expect(areaQuadrado(10)).toBe(100)        
})

test("Compara strings",()=>{
    expect("igor").toBe("igor")
    expect("igor").not.toBe("ygor")
    expect("igor").toEqual("igor")
})


test("Verifica se tem Genipapo", ()=>{
    expect(listaDeFrutas()).toContain("Genipapo")
})

