let button = document.querySelector('#mybutton')
button.addEventListener('click', function(e){
    alert("button clicked");
})

let button2 = document.querySelector('#mybutton2')
function toggleColor(e){
    let body = document.querySelector('body')
    body.classList.toggle('red-background')
    ;
}
button2.addEventListener('click', toggleColor)
