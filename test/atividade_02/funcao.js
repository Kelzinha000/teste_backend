    export function numerosPrimos(numero) {
    if (numero > 100 || numero < 1) {
        throw new Error("Digite um número de 1 a 100");
    }
    if (numero < 2) return [];
    const primos = [];
    for (let num = 2; num < numero; num++) {
        let Primo = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            Primo = false;
            break;
        }
        }
        if (Primo) {
        primos.push(num);
        }
    }

    return primos;
    }



    export function Fibonacci(n) {
        if (n > 100 || n < 1) {
            throw new Error("Digite um numero entre 1 e 100")
        }
        if (n <= 0) return "Entrada inválida";
        if (n === 1) return 0;
        if (n === 2) return 1;
        let a = 0, b = 1, temp;
        for (let i = 3; i <= n; i++) {
            temp = a + b;
            a = b;
            b = temp;
        }
        return b;
    }


    export const pessoa = {
        nome: "Doutora Eudarda Campos",
        idade: 36,
        endereco: {
            cidade: "Recife",
            estado: "Pernambuco",
            pais:"Brasil",
        },
        medica: true
    }
    
    
    

