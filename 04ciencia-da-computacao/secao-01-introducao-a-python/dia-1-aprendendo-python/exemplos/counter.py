import random
from collections import Counter

rand_nums = []

for n in range(20):
    rand_nums.append(random.randint(0, 20))

print("Lista randômica")
print(rand_nums)

counter = Counter(rand_nums) # Retorna um dict com o número de vezes que cada elemento apareceu na lista
print("Contagem das aparições de cada elemento")
print(counter)

nums_by_appearance = counter.most_common() # Retorna um array de tuplas ordenados por número de incidência
print("Lista ordenada das aparições (Ordem descrescente)")
print(nums_by_appearance)

most_common_num, times_appeared = nums_by_appearance[0]
print("Elemento que mais apareceu e número de aparições")
print(most_common_num, times_appeared)