# Exercício 4: Escreva um algoritmo recursivo para encontrar o máximo divisor comum (mdc) de dois inteiros.
# Algoritmo de Euclides: MDC(a,b) = MDC(b, a % b)
def mdc(a, b):
    if b == 0:
        return a
    return mdc(b, a % b)

print(mdc(6, 3))
print(mdc(2, 10))