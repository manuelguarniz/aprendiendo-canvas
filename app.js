

let canvas = document.getElementById('canvas');
let increment = document.getElementById('increment');
let decrement = document.getElementById('decrement');
let context = canvas.getContext('2d');

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
    context.fillStyle = `rgb(${255-42.5*i}, ${255-42.5*j}, ${42.5*i})`;
    context.fillRect(j * 25, i * 25, 25, 25);
  }
  
}
var mod = 0
// setInterval(() => {
// mod ++;
// // console.log(mod)
// }, 100);
context.fillRect(5, 5, mod, 10);
  
console.log(canvas.clientWidth)
console.log(canvas.clientHeight)

increment.addEventListener('click', (e) => {
  mod+=10
})
decrement.addEventListener('click', (e) => {
  mod-=10
})

window.addEventListener('resize', draw);