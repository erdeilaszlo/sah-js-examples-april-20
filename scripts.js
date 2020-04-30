console.log('Script file is loaded.');

// Single line comment

/*
Multiple
lines
of comments
*/

// First part:

1+1
2
12-5
7
4*3
12
15/6
2.5
let age;
undefined
age -34;
NaN
age 34;
SyntaxError: unexpected token: numeric literal
debugger eval code:1:4
age = 34
34
age + 5
39
age = 55
55
age/5
11
let number_of_legs = 4;
undefined
number_of_legs * 2
8
let name = Laszlo
ReferenceError: Laszlo is not defined
debugger eval code:1:12
name = 'Laszlo'
"Laszlo"
name
"Laszlo"
number_of_legs
4
name = 'StayAtHome'
"StayAtHome"
name
"StayAtHome"
'Hello, ' + name
"Hello, StayAtHome"
'22 + '33'
SyntaxError: unexpected token: numeric literal
debugger eval code:1:7
'22' + '33'
"2233"
true && true
true
true & false
0
true && false
false
alma && korte
ReferenceError: alma is not defined
debugger eval code:1:1
false && false
false
false & true
0
false || false
false
let post = "This is mya first post"
undefined
let post2 = "This is my second post"
undefined
post
"This is mya first post"
post2
"This is my second post"
let color1 = "orange"
undefined
let color2 = "blue"
undefined
let colors = ["orange", "blue", "green"]
undefined
colors
Array(3) [ "orange", "blue", "green" ]

colors[0]
"orange"
colors[1]
"blue"
colors[2]
"green"
let pickedColor = 2
undefined
colors{pickedColor}
SyntaxError: unexpected token: '{'
debugger eval code:1:6
colors[pickedColor]
"green"
colors[1] = 'yellow'
"yellow"
colors
Array(3) [ "orange", "yellow", "green" ]

colors.length
3
name
"StayAtHome"
name.length
10
colors[3] = 'lime'
"lime"
colors
Array(4) [ "orange", "yellow", "green", "lime" ]

colors.length
4
colors.push('purple')
5
colors
Array(5) [ "orange", "yellow", "green", "lime", "purple" ]

colors[colors.length] = 'cyan'
"cyan"
colors
Array(6) [ "orange", "yellow", "green", "lime", "purple", "cyan" ]

colors.push(colors)
7
colors
Array(7) [ "orange", "yellow", "green", "lime", "purple", "cyan", (7) […] ]

let person = {
}
undefined
let person = {
  name: 'Laszlo',
  age: 44,
  favoireColors: colors,
  oldEnoughToDrive: true,
}
SyntaxError: redeclaration of let person
debugger eval code:1:1
let person = {
name: 'Laszlo',
age: 44,
favoritcolors: colors,
oldenoughtodrive: true
}
SyntaxError: redeclaration of let person
debugger eval code:1:1
let person = {
    name: 'Laszlo',
    age: 44,
    favoriteColors: colors,
    oldenoughttodrive: true
}
SyntaxError: redeclaration of let person
debugger eval code:1:1
let person = {'Laszlo'}
SyntaxError: missing : after property id
debugger eval code:1:22
let person ={"Laszlo"}
SyntaxError: missing : after property id
debugger eval code:1:21
let person = {"Lszlo"}
SyntaxError: missing : after property id
debugger eval code:1:21
let person = {
  name: 'Laszlo',
}
SyntaxError: redeclaration of let person
debugger eval code:1:1
let person = {
  name: 'Laszlo',
  age: 44
}
SyntaxError: redeclaration of let person
debugger eval code:1:1
let person = 'Laszlo'
SyntaxError: redeclaration of let person
debugger eval code:1:1
person
Object {  }

let person = [
  name: 'Laszlo',
  age: 44
]
SyntaxError: missing ] after element list
debugger eval code:2:6note: [ opened at line 1, column 13debugger eval code:1:13
