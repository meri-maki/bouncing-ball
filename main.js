let ball = document.getElementById('float-circle');

// Write your code below
const up = () => ball.style.bottom = '5000px'
const down = ()=> ball.style.bottom = '50px'

document.addEventListener('keydown', up);
document.addEventListener('keyup', down);