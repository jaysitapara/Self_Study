# write a proram to input 2 numbera & print their sum
# num1 = float(input("Enter number 1 : "))
# num2 = float(input("Enter number 2 : "))
# print("sum : ", num1 + num2)
# ----------------------------------------------------------------------------------------------------
# wap to input side of square & print its area
# side = float(input("Enter square side size : "))
# print("Side of square area is : ", side * side)
# ----------------------------------------------------------------------------------------------------
# wap to input 2 floating point numbers & print their average
# num1 = float(input("Enter number 1 : "))
# num2 = float(input("Enter number 2 : "))
# print("Average : ", (num1 + num2) / 2)
# ----------------------------------------------------------------------------------------------------
# wap to input 2 int number a and b, print true if a us greater than or equal to b. if not print false
# a = int(input("Enter number 1 : "))
# b = int(input("Enter number 2 : "))
# print(a>=b)
# ----------------------------------------------------------------------------------------------------
# wap to input users first name & print its name
# name = input("Enter your name :")
# print(len(name))
# ----------------------------------------------------------------------------------------------------
# wap to find the occurence of '$' in a string.
# val = "today $ price is 82.00"
# print(val.find("$"))
# ----------------------------------------------------------------------------------------------------
# wap to print students grade based on marks
# marks = float(input("Enter your marks : "))
# if (marks >= 90):
#     print("Grade A")
# elif (marks >= 80 and marks < 90):
#     print("Grade B")
# elif (marks >= 70 and marks < 80):
#     print("Grade C")
# else:
#     print("Grade D")
# ----------------------------------------------------------------------------------------------------
# wap to check if a number entered by the user is odd or even
# num = int(input("Enter number to check number id odd or even : "))
# if(num % 2 == 0):
#     print("Even")
# else:
#     print("Odd")
# ----------------------------------------------------------------------------------------------------
# wap to find the greatest of 3 numbers enterd by the user
# a = int(input("Enter number a : "))
# b = int(input("Enter number b : "))
# c = int(input("Enter number c : "))
# if(a>=b and a>=c):
#     print("Your greater number is A : ",a)
# elif(b>=a and b>=c):
#     print("Your greater number is B : ",b)
# else:
#     print("Your greater number is C : ",c)
# ----------------------------------------------------------------------------------------------------
# wap to check if a number is a multiple of 7 or not
# number = int(input("Enter number to check multiple is 7 or not : "))
# if(number % 7 == 0):
#     print("Yes, number id multiple of 7")
# else:
#     print("No, Not multiple by 7")
# ----------------------------------------------------------------------------------------------------
# wap to ask the user to enter names of their three favourite movies and store them in a list
# movies = []
# movies.append(input("Enter your 1st movie : "))
# movies.append(input("Enter your 2nd movie : "))
# movies.append(input("Enter your 3rd movie : "))
# print(movies)
# ----------------------------------------------------------------------------------------------------
# wap to check if a list contains a palidrome of elements 
# number = [1,2,1]
# cp = number.copy()
# cp.reverse()
# if cp == number:
#     print("Pelindrome")
# else:
#     print("Not pelindrome")
# ----------------------------------------------------------------------------------------------------
# wap to count the number of students with 'A' grade in the following tuple
# grade = ("A", "B", "A", "C", "D", "A")
# print(grade.count("A"))
# ----------------------------------------------------------------------------------------------------
# wap to store the value in the list and store them from A to D
# val = ["A", "B", "A", "C", "D", "A"]
# val.sort()
# print(val)
# ----------------------------------------------------------------------------------------------------
# store following word meaning in python dictionary
# 1. table : "a piece of  furniture", "list of fact & figure"
# 2. cat : "a small animal"
# ans : 
# dict = {
#     "table" : ["a piece of  furniture", "list of fact & figure"],
#     "cat" : "a small animal"
# }
# print(dict)
# ----------------------------------------------------------------------------------------------------
# you are given list of subjects for students. assume onee classroom is required for 1 subject. how many classroom are needed by all student.
# "python", "java", "c++", "python", "javascript","java", "python", "java", "c++", "c"
# set = {"python", "java", "c++", "python", "javascript","java", "python", "java", "c++", "c"}
# print(len(set))
# ----------------------------------------------------------------------------------------------------
# wap to enter marks of 3 subject from the user and store them in a dictionary . start with an empty dictionary & add one by one .  use subject name as a key & marks as a value
# marks = {}
# sub = int(input("enter subject 1 : "))
# marks.update({"maths": sub})
# sub = int(input("enter subject 2 : "))
# marks.update({"physics": sub})
# sub = int(input("enter subject 3 : "))
# marks.update({"english": sub})
# print(marks)
# ----------------------------------------------------------------------------------------------------
# figure out way to store 9 & 9.0 as separate value in the set.
# value = ("int", 9),("float", 9.0)
# print(value)
# ----------------------------------------------------------------------------------------------------
# print numbers from 1 to 100
# i = 1
# while i <= 100:
#     print(i)
#     i+=1
# ----------------------------------------------------------------------------------------------------
# print numbers from 100 to 1
# i = 100
# while i >= 1:
#     print(i)
#     i-=1
# ----------------------------------------------------------------------------------------------------
# print the multiplication table of a number n
# i = 1
# n = int(input("Enter number to multiplication : "))
# while i <= 10:
#     print(n*i)
#     i+=1
# ----------------------------------------------------------------------------------------------------
# print the elements of the following list using loop : [1,4,9,16,25,36,49,64,81,100]
# list = [1,4,9,16,25,36,49,64,81,100]
# i = 0
# while (i<len(list)):
#     print(list[i])
#     i+=1
# ----------------------------------------------------------------------------------------------------
# search for a number x in this tuple using loop : (1,4,9,16,25,36,49,64,81,100)
# tpl = (1,4,9,16,25,36,49,64,81,100)
# i = 0
# x = 36
# while i <len(tpl):
#     if(tpl[i] == x):
#         print("found at index : ", i)
#     i+=1
# ----------------------------------------------------------------------------------------------------