def invert_list_order(list):
    if len(list) < 2:
        return list
    else:
        return [list[-1]] + invert_list_order(list[:-1])

list = [1, 2, 3, 4, 5]
print(invert_list_order(list))

def test_invert_list_order():
    assert invert_list_order([0, 1, 2, 3, 4, 5]) == [5, 4, 3, 2, 1, 0]
    assert invert_list_order([7, 1, 8, 4, 8]) == [8, 4, 8, 1, 7]
    assert invert_list_order([970]) == [970]
    assert invert_list_order([]) == []


test_invert_list_order()