# Exercício 1: Crie um algoritmo não recursivo para contar quantos
# números pares existem em uma sequência numérica (1 a n).
def iterative(n):
    counter = 0

    for number in range(1, n+1):
        if number % 2 == 0:
            counter += 1
    
    return counter

print(iterative(10))


# Exercício 2: Transforme o algoritmo criado acima em recursivo.
# Obs.: A própria pilha de processamento armazena o contador
def recursive(n):
    if n == 1:
        return 0

    if n % 2 == 0:
        return 1 + recursive(n-1) # Retorna 1 e chama a função novamente

    return recursive(n-1)

print(recursive(15))