def hanoi_towers (amount_of_discs, a, b, c):
    if amount_of_discs == 1:
        print(f"Move disco {amount_of_discs} de {a} para {c}")
    else:
        hanoi_towers(amount_of_discs-1, a, c, b)
        print(f"Move disco {amount_of_discs} de {a} para {c}")
        hanoi_towers(amount_of_discs-1, b, a, c)

print (hanoi_towers(3, a='primeiro', b='meio', c='fim'))