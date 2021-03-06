import math
# write a function that returns "Hello World!" if no argument is given, or "Hello <argument>!" otherwise
# eg: hello() => "Hello World!"; hello("Mike") => "Hello Mike!"
def hello(string='World'):
    return f'Hello {string}!'


# write a function that will calculate the area of a circle, given the radius
def area_of_circle(radius):
    return math.pi *radius ** 2


# write a function to convert celcius to farenheit
def celcius_to_farenheit(celcius):
    return (celcius * 9/5) + 32


# write a function that will reverse a number (eg. 456733 become 337654)
def number_reverse(number):
    return float(str(number)[::-1])


# write a function to check if a word or phrase is a palindrome returning a boolean
# eg. palindrome_check('dad') => True, palindrome('nonsense') => False
def palindrome_check(string):
    no_spaces = string.replace(' ', '')
    if no_spaces == (no_spaces)[::-1]:
        return True
    else:
        return False


# write a function that returns the letters of a word or phrase in alphabetical order case insensitive
# eg. order_string_alphabetically('javascript is cool') => 'aacciijlooprsstv'
def order_string_alphabetically(string):
    lower_case = string.lower()
    no_spaces = lower_case.replace(' ', '')
    return ''.join(sorted(no_spaces))

# write a function that capitalizes the first letter of each word
# eg. title_case('the lord of the rings') => 'The Lord Of The Rings'
def title_case(string):
    return string.title()


# write a function that returns the number of vowels in a string case insensitive
# 'y' should not be considered a vowel
# eg: num_of_vowels('Yellow Submarine') => 6
def num_of_vowels(string):
    count = 0
    vowels = ['a', 'e', 'i', 'o', 'u']
    for char in string:
        if char in vowels:
            count += 1
    return count


# write a function that frames a string in asterisks (*)
#                             ***************
# eg: frame('Hello Kitty') => * Hello Kitty *
#                             ***************
def frame(string):
    length = len(string) + 4
    ast = '*' * length
    framed = f'{ast}\n* {string} *\n{ast}'
    return framed
    