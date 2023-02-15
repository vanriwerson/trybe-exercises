def factorial(n):
  return (
    1 if n == 0
    else n * factorial(n-1)
  )

print(f"O fatorial de 4 é {factorial(4)}")
print(f"O fatorial de 5 é {factorial(5)}")
print(f"O fatorial de 6 é {factorial(6)}")