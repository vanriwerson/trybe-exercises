import random


random_list = random.sample(range(0, 100000), random.randint(1, 11))
nums = [1, 2, 3, 4]

print(max(nums))
print(min(nums))
print(len(nums))

print(max(random_list))
print(min(random_list))
print(len(random_list))