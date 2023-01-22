def quadrado(n):
    '''Recebe um número n, retorna o quadrado de n''' # Literal de string
    return n**2
print(quadrado.__doc__) # Saída: Recebe um número n, retorna o quadrado de n

# docstrings da função print:
print(print.__doc__)

# Saída
# print(value, ..., sep=' ', end='\n', file=sys.stdout, flush=False)

# Imprime os valores em um fluxo, or em sys.stdout por padrão.
# Argumentos de palavras-chave opcionais:
# file: um objeto semelhante a um arquivo (fluxo); o padrão é o sys.stdout atual.
# sep: string inserida entre valores, o padrão é o espaço.
# end: string anexada após o último valor, o padrão é uma nova linha.
# flush: se deve forçar a descarga do fluxo.