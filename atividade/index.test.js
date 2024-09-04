import { numerosPar } from "./funcao.js";
import { ordemAlfabetica } from "./funcao.js";

test("Verifica número par", () => {
  const resultado = [2, 4, 6, 8, 10];
  expect(numerosPar([1, 2, 3,4,5,6,7,8,9,10])).toEqual(resultado);
});

test("Ordem Alfabética", ()=>{
    const listaEsperada = ["Maria", "Raquel", "Deyse"]
    expect(ordemAlfabetica(["Deyse", "Maria", "Raquel"])).toEqual(listaEsperada)
})
