# Exercício 3: Crie um algoritmo recursivo que encontre, em uma lista, o maior número inteiro.
def recursive_iterator(list, len):
    if len == 1:
        return list[0]
    else:
        higher_number = recursive_iterator(list, len-1) # Armazena o list[0] ao final das chamadas recursivas
        if higher_number > list[len-1]:
            return higher_number # Mantém o número atual
        else:
            return list[len-1] # Substitui pelo número checado


def find_higher_number(numbers):
    array_len = len(numbers)
    return recursive_iterator(numbers, array_len)

print(find_higher_number([1, 21, 300, 4, 57]))