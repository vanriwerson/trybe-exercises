def increment(x):
    x += 1
    return x

x = 10 # valor de x no escopo global

increment(x) # valor de x no escopo da função increment: 11