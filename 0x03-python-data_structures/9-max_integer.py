#!/usr/bin/python3
def max_integer(my_list=[]):
    if len(my_list) == 0:
        return "None"
    else:
        my_list.sort()
        for i in range(len(my_list)):
            max = my_list[len(my_list) - 1]
            return max
