# Boas práticas para legibilidade do código em python:
# Entre cada função temos um espaço de 2 linhas;
# As funções são declaradas com nomes em letras minúsculas (snake_case);
# A constante PI é definida em letras maiúsculas.


PI = 3.14


def square(side):
    '''Calcula a área de um quadrado''' # docstring: auxilia na documentação do código
    return side * side


def rectangle(length, width):
    '''Calcula a área de um retângulo'''
    return length * width


def circle(radius):
    '''Calcula a área de um círculo'''
    return PI * (radius ** 2)


if __name__ == "__main__": # executa apenas se esse arquivo estiver sendo executado como script
    print("Área do quadrado:", square(10))
    print("Área do retângulo:", rectangle(2, 2))
    print("Área do círculo:", circle(3))


# Para executar o módulo: python3 area.py