def sum_n_sequential_numbers(n):
    return(
      0 if n == 0
      else n + sum_n_sequential_numbers(n-1)
    )

n = 8
print(f"A soma dos números de 0 a {n} ocupa a posição é igual a {sum_n_sequential_numbers(n)}.")