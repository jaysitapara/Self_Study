# sinle line comment
# ----------------------------------------------------------------------------------------------------------------------
'''
multi line
comment
'''
# ----------------------------------------------------------------------------------------------------------------------

# print simple message
# print("hello world")
# ----------------------------------------------------------------------------------------------------------------------

# print numbers
# print(9)
# ----------------------------------------------------------------------------------------------------------------------

# print directly arithmatic operatins
# print(5+4)
# ----------------------------------------------------------------------------------------------------------------------

# variable in python
# name = "jayu"
# age = 21
# price = 21.21
# print("my name is" ,name, "my age is" ,age, "my item price is" ,price)
# ----------------------------------------------------------------------------------------------------------------------

# add new Value into old variable
# name  = "jayu"
# name = "sitapara"
# print(name)
# ----------------------------------------------------------------------------------------------------------------------

# show data type
# name = "jayu"
# print(type(name))
# age = 21
# print(type(age))
# price = 21.21
# print(type(price))
# ----------------------------------------------------------------------------------------------------------------------

# data type in python
# a = 10
# print(type(a))
# b = "10"
# print(type(b))
# c = 10.10
# print(type(c))
# d = True
# print(type(d))
# e = None
# print(type(e))
# ----------------------------------------------------------------------------------------------------------------------

# print sum of two numbers
# num1 = 2
# num2 = 5
# ----------------------------------------------------------------------------------------------------------------------

# sum = num1 + num2
# print(sum)
# ----------------------------------------------------------------------------------------------------------------------

# operators on python

# operator in python
# 1. Arithmatic  operators
# a = 5
# b = 2
# print(a+b)
# print(a-b)
# print(a*b)
# print(a/b)
# print(a%b)
# print(a**b)

# 2. Relational / comparison operators
# a = 5
# b = 2
# print(a == b)
# print(a != b) 
# print(a < b) 
# print(a > b) 
# print(a <= b)
# print(a >= b) 

# 3. Assignment operators
# a = 5
# b = 2
# a += 10
# a -= 10
# a *= 10
# a /= 10
# a %= 10
# a **= 10
# print (a)

# 4. Logical operators
# a = 5
# b = 2
# val1 = True
# val2 = True
# print(not True)
# print(not False)
# print(not (a > b))
# print(val1 and val2)
# print(val1 or val2)
# ----------------------------------------------------------------------------------------------------------------------

# type conversion
# a,b = 1,2.0
# print(a+b)
# ----------------------------------------------------------------------------------------------------------------------

# type casting
# a, b = 1, '2'
# c = int(b)
# c = float(b)
# c = str(b)
# print(a + c)
# ----------------------------------------------------------------------------------------------------------------------

# # input from user
# a = input("Enter your name : ")
# print(a)
# ----------------------------------------------------------------------------------------------------------------------

# convert input in int
# a = int(input("Enter your age : "))
# print(a)
# ----------------------------------------------------------------------------------------------------------------------

# convert input in int
# a = float(input("Enter your age : "))
# print(a)
# ----------------------------------------------------------------------------------------------------------------------

# string in python
# str1 = 'Jay Sitapara'
# str2 = "Jay Sitapara"
# str3 = '''Jay Sitapara'''
# print(str1)
# print(str2)
# print(str3)
# ----------------------------------------------------------------------------------------------------------------------

# print one sentence go to into next line
# str1 = "this is a string. \n we are creating it in python"
# print(str1)
# ----------------------------------------------------------------------------------------------------------------------

# tab
# str1 = "this is a string. \t we are creating it in python"
# print(str1)
# ----------------------------------------------------------------------------------------------------------------------

# basic operation in python

# 1. concatenation
# str1 = "my name is "
# str2 = "jay"
# print(str1 + str2)

# 2. string length
# str = "my name is jay"
# print(len(str))

# slicing in python
# str = "jay sitapara"
# print(str[1:5])
# print(str[:5])
# print(str[1:])
# print(str[1:len(str)])
# ----------------------------------------------------------------------------------------------------------------------

# slicing in negative index (-1...-2...-3)
# str = "apple"
# print(str[-3:-1])
# ----------------------------------------------------------------------------------------------------------------------

# indexing in python
# str = "Jay Sitapara"
# print(str[1])
# ----------------------------------------------------------------------------------------------------------------------

# string functions
# str = "my name is jay sitapara"
# ----------------------------------------------------------------------------------------------------------------------

# finding end substring
# print(str.endswith("ra"))
# ----------------------------------------------------------------------------------------------------------------------
# ----------------------------------------------------------------------------------------------------------------------

# 1st letter capital
# print(str.capitalize()) # only on this function
# new = str.capitalize()
# print(new)  # permenent change
# ----------------------------------------------------------------------------------------------------------------------

# replace function
# print(str.replace("jay", "jayu"))
# ----------------------------------------------------------------------------------------------------------------------

# finding string
# print(str.find("is"))
# ----------------------------------------------------------------------------------------------------------------------

# count how many time use word
# print(str.count("j"))
# ----------------------------------------------------------------------------------------------------------------------

# conditional statements

# 1. if else statement
# age = 21
# if (age >= 18):
#     print("can vote and apply for licence")
# else:
#     ("can note votinf and don't apply for licence")
# ----------------------------------------------------------------------------------------------------------------------

# 2. elif statement
# light = "green"
# if (light == "red"):
#     print("stop")
# elif(light == "yello"):
#     print("Start")
# elif(light == "green"):
#     print("Go")
# else:
#     print("You are not ready for going")
# ----------------------------------------------------------------------------------------------------------------------

# nested if
# age = 21
# if(age >= 18):
#     if(age >= 80):
#         print("can not drive")
# else:
#     print("can not drive")
# ----------------------------------------------------------------------------------------------------------------------

# list in python
# marks = [90.90,89.10,78,85.85]
# print(marks)
# print(type(marks))
# ----------------------------------------------------------------------------------------------------------------------

# access list using index
# marks = [90.90,89.10,78,85.85]
# print(marks[1])
# ----------------------------------------------------------------------------------------------------------------------

# print length for list
# marks = [90.90,89.10,78,85.85]
# print(len(marks))
# ----------------------------------------------------------------------------------------------------------------------

# store diffrent data type in list
# student = ["Jay", 21, 98.79, 4043]
# print(student)
# ----------------------------------------------------------------------------------------------------------------------

# list slicing in python
# marks = [90, 99, 78, 74, 84]
# print(marks)
# print(marks[1:4])
# print(marks[:4])
# print(marks[1:])
# print(marks[1:len(marks)])
# print(marks[-3:-1:])
# ----------------------------------------------------------------------------------------------------------------------

# various methods in list
# list = [2, 1, 3, 2]
# 1.append method
# list.append(4)
# print(list)

# 2.sort method
# list.sort()
# print(list)

# 3.sort in desending order
# list.sort(reverse=True)
# print(list)

# 3.reverse list method
# list.reverse()
# print(list)

# 4.insert element at index
# list.insert(2, 55)
# print(list)

# 5.remove method
# list.remove(2)
# print(list)

# 6.pop method
# list.pop(2)
# print(list)
# ----------------------------------------------------------------------------------------------------------------------

# tuple in python
# tpl = (2, 4, 9)
# print(tpl)
# print(type(tpl))
# ----------------------------------------------------------------------------------------------------------------------

# access tuple using index
# marks = (90.90,89.10,78,85.85)
# print(marks[1])
# ----------------------------------------------------------------------------------------------------------------------

# find value using index
# tup = (2, 1, 3, 1)
# print(tup.index(2))
# ----------------------------------------------------------------------------------------------------------------------

# how many times use element
# tup = (2, 1, 3, 1)
# print(tup.count(1))
# ----------------------------------------------------------------------------------------------------------------------

# slicing in tuple
# marks = (90.90,89.10,78,85.85)
# print(marks[1:3])
# ----------------------------------------------------------------------------------------------------------------------

# dictionary in python
# info = {
#     "name" : "jayu",
#     "age" : 21,
#     "sgpa" : 9.9
# }
# print(info)
# ----------------------------------------------------------------------------------------------------------------------

# Store list in dictionary
# info = {
#     "name": "jayu",
#     "age": 21,
#     "subject": ["python", "android"]
# }
# print(info)
# ----------------------------------------------------------------------------------------------------------------------

# Store list in dictionary
# info = {
#     "name": "jayu",
#     "age": 21,
#     "subject": ("python", "android")
# }
# print(info)
# ----------------------------------------------------------------------------------------------------------------------

# access dictionary using key
# info = {
#     "name" : "jayu",
#     "age" : 21,
#     "sgpa" : 9.9
# }
# print(info["name"])
# ----------------------------------------------------------------------------------------------------------------------

# change value using key
# info = {
#     "name" : "jayu",
#     "age" : 21,
#     "sgpa" : 9.9
# }
# info["name"] = "Sitapara"
# print(info["name"])
# ----------------------------------------------------------------------------------------------------------------------

# add value in dictionary using key
# info = {
#     "name" : "jayu",
#     "age" : 21,
#     "sgpa" : 9.9
# }
# info["surname"] = "Sitapara"
# print(info)
# ----------------------------------------------------------------------------------------------------------------------

# create empty dictionary
# empt_dict = {}
# print(empt_dict)
# ----------------------------------------------------------------------------------------------------------------------

# nested dictionary
# info = {
#     "name" : "jayu",
#     "age" : 21,
#     "subject" : {
#         "sub_1" : "python",
#         "sub_2" : "android",
#         "sub_3" : "java"
#     }
# }
# print(info)
# ----------------------------------------------------------------------------------------------------------------------

#access nested dictionary
# info = {
#     "name" : "jayu",
#     "age" : 21,
#     "subject" : {
#         "sub_1" : "python",
#         "sub_2" : "android",
#         "sub_3" : "java"
#     }
# }
# print(info["subject"])
# ----------------------------------------------------------------------------------------------------------------------

# access multiple key
# info = {
#     "name" : "jayu",
#     "age" : 21,
#     "subject" : {
#         "sub_1" : "python",
#         "sub_2" : "android",
#         "sub_3" : "java"
#     }
# }
# print(info["subject"]["sub_1"])     
# ----------------------------------------------------------------------------------------------------------------------

# various methods in dictionary
# 1. retuen all keys
# info = {
#     "name" : "jayu",
#     "age" : 21,
#     "sgpa" : 9.9
# }
# print(info.keys())

# 2. dictionary length
# info = {
#     "name" : "jayu",
#     "age" : 21,
#     "sgpa" : 9.9
# }
# print(len(info))

# 3. return all values
# info = {
#     "name" : "jayu",
#     "age" : 21,
#     "sgpa" : 9.9
# }
# print(info.values())

# 4. return all key value pairs in tuple
# info = {
#     "name" : "jayu",
#     "age" : 21,
#     "sgpa" : 9.9
# }
# print(info.items())

# 5. return all key according to the value
# info = {
#     "name" : "jayu",
#     "age" : 21,
#     "sgpa" : 9.9
# }
# print(info["name"]) #error & not run next code
# print(info.get("name")) #none & run next code

# 6. insert the specified items to the dictionary 
# info = {
#     "name" : "jayu",
#     "age" : 21,
#     "sgpa" : 9.9
# }
# info.update({"university" : "Marwadi University"})
# print(info)
# ----------------------------------------------------------------------------------------------------------------------

# set in python
# num = {1,2,3,1,2,3,1,2,3}
# print(num)
# ----------------------------------------------------------------------------------------------------------------------

# know set type
# num = {1,2,3}
# print(type(num))
# ----------------------------------------------------------------------------------------------------------------------

# num = {1,2,3}
# print(len(num))
# ----------------------------------------------------------------------------------------------------------------------

# create empty set
# col = set()
# print(type(col))
# ----------------------------------------------------------------------------------------------------------------------

# set methods
# 1. adds an element
# set = {1,2,3,4,6}
# set.add(7)
# print(set)

# 2. remove an element
# set = {1,2,3,4,6}
# print(set.remove(1))
# print(set)

# 3. empties the set
# set = {1,2,3,4,6}
# print(set.clear())
# print(set)

# 5. remove a random value
# set = {1,2,3,4,6}
# print(set.pop())

# 6. combine both set value and retur new
# set1 = {1,2,3}
# set2 = {2,3,4}
# print(set2.union(set1))

# 7. combine common value and return new
# set1 = {1,2,3}
# set2 = {2,3,4}
# print(set1.intersection(set2))
# ----------------------------------------------------------------------------------------------------------------------

# while loop in python
# count = 1
# while count <= 5:
#     print("python")
#     count += 1
# ----------------------------------------------------------------------------------------------------------------------

# break keyword in while loop
# i = 1
# while i <= 5:
#     print(i)
#     if (i == 3):
#         break
#     i+=1
# ----------------------------------------------------------------------------------------------------------------------

# continue in python
# i = 1
# while i <= 5:
#     if (i == 3):
#         i+=1
#         continue
#     print(i)
#     i+=1
# ----------------------------------------------------------------------------------------------------------------------