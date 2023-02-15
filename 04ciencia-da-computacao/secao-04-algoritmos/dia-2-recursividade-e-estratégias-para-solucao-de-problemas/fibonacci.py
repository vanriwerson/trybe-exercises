def fibonacci(index):
	  return(
        index if index <= 1
        else fibonacci(index-2) + fibonacci(index-1)
    )


index = 5
print(f"O número {fibonacci(index)} ocupa a posição {index +1} na sequência de Fibonacci.")