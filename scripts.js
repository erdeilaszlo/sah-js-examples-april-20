// Third part:
console.log('Script file is loaded.');

$('h1').html('This is done by <em>JavaScript</em>!');

$('h2').toggleClass('blue');
$('h2').toggleClass('blue');
$('h2').toggleClass('blue');

let name = 'Laszlo';
let age = 44;

function myLittleFunction() {
$('main').append('<p>A p is appended in the main.</p>');
$('p').css('border', '1px solid red');
$('p').css('padding', '10px');
}

myLittleFunction();
myLittleFunction();

$('#add').click(myLittleFunction);
$('#remove').click(function () {
    $('p:last-child').remove();
});

// az ismétlés törli az előzó parancsot, újrabeírva megjeleníti




// Single line comment

/*
Multiple
lines
of comments
*/

// First part:

// 1+1
// 2
