nomes_1 = ["Bruno", "Riwerson", "Silva"]
nomes_2 = ["Bruno", "Cecília", ""]
nums_1 = [1, 2, 3, 4]
nums_2 = [0, 5, 6, 7]

all(nomes_1) # True
all(nomes_2) # False
all(nums_1) # True
all(nums_2) # False

any(nomes_1) # True
any(nomes_2) # True
any(nums_1) # True
any(nums_2) # True

# O enumerate é análogo ao Object.entries() do javascript
for elem in enumerate(nomes_1):
    print(elem[1])

for i, num in enumerate(nums_2):
    print("i:", i, "num:", num)