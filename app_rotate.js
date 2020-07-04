

let Canvas = {
  _canvas: null,
  _with: window.innerWidth,
  _height: window.innerHeight,
  render() {

    let context = this._canvas.getContext('2d');

    this._canvas.width = this._with;
    this._canvas.height = this._height;

    context.beginPath();
    context.arc(150, 150, 1, 0, 2 * Math.PI);
    context.stroke();
    
    context.translate(100, 0)
    context.rotate(30 * Math.PI / 100)
    context.fillRect(50, 50, 100, 50);
  }
}

let canvas = document.getElementById('canvas');
let increment = document.getElementById('increment');
let decrement = document.getElementById('decrement');
let mod = 0

let canvasGraf = {};


// increment.addEventListener('click', (e) => {
//   mod+=10
//   canvasGraf._with = mod;
//   canvasGraf.render();
// })
// decrement.addEventListener('click', (e) => {
//   mod-=10
//   canvasGraf._with = mod;
//   canvasGraf.render();
// })

window.addEventListener('DOMContentLoaded', () => {
  canvasGraf = Canvas;
  canvasGraf._canvas = canvas;
  // canvasGraf._with = mod;
  // canvasGraf._height = 10;
  canvasGraf.render();
  
})
window.addEventListener('resize', () => {
  if (canvasGraf) {
    canvasGraf._with = window.innerWidth;
    canvasGraf._height = window.innerHeight;
    canvasGraf.render();
  }
});
