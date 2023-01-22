def imc(peso, altura):
    return peso / altura ** 2

# As passagens de parâmetro podem ser:

# posicional:
imc(98, 1.75)

# nomeada:
imc(peso=98, altura=1.75)