package main

import "fmt"

// Importando Pacotes

// AC - Exercício 1 (Calculando se um valor é primo ou nao)

// AC - Exercício 2 (Calculando o valor de fibonacci)
func fibo(n int) int {
	if n <= 2 {
		return 1
	}
	fibonacci := fibo(n-1) + fibo(n-2)
	return fibonacci
}

// AC - Exercício 3
func diaDaSemana(n int) string {
	switch n {
	case 1:
		return "Domingo"
	case 2:
		return "Segunda-feira"
	case 3:
		return "Terça-feira"
	case 4:
		return "Quarta-feira"
	case 5:
		return "Quinta-feira"
	case 6:
		return "Sexta-feira"
	case 7:
		return "Sábado"
	default:
		return "Valor inválido"
	}
}

// AC - Exercício 4
func e_bissexto(ano int) bool {
	if ano%4 == 0 {
		if ano%100 == 0 {
			if ano%400 == 0 {
				return true
			}
			return false
		}
		return true
	}
	return false
}

// Teste para rodar
func main() {
	// Teste dos valores do Exercício 2
	fmt.Println(fibo(1))  // 1
	fmt.Println(fibo(2))  // 1
	fmt.Println(fibo(3))  // 2
	fmt.Println(fibo(4))  // 3
	fmt.Println(fibo(5))  // 5
	fmt.Println(fibo(10)) // 55

	fmt.Println("-----------------")
	// Teste dos valores do Exercício 3
	fmt.Println(diaDaSemana(1)) // Domingo
	fmt.Println(diaDaSemana(4)) // Quarta-feira
	fmt.Println(diaDaSemana(7)) // Sábado
	fmt.Println(diaDaSemana(8)) // Valor inválido
	fmt.Println("-----------------")
	// Teste dos valores do Exercício 4
	fmt.Println(e_bissexto(1995)) // false
	fmt.Println(e_bissexto(2012)) // true
	fmt.Println(e_bissexto(1900)) // false
	fmt.Println(e_bissexto(2000)) // true

}
