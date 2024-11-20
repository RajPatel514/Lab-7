
// Click button
document.getElementById('singleClick').addEventListener('click', function () {
    alert('Great job!');
});

// Double click button
document.getElementById('doubleClick').addEventListener('dblclick', function () {
    alert('Great job again!');
});

// Hovering event
var hoverMe = document.getElementById('hoverMe');
hoverMe.addEventListener('mouseenter', function () {
    this.style.backgroundColor = 'yellow';
});
hoverMe.addEventListener('mouseleave', function () {
    this.style.backgroundColor = 'transparent';
});

// Keypress Event

document.addEventListener('keypress', function (event) {
    console.log(`Character: ${event.charCode}`);
    console.log(`Character pressed: ${String.fromCharCode(event.charCode)}`);
});