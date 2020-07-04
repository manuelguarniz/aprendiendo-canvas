

let Canvas = {
  _canvas: null,
  _with: window.innerWidth,
  _height: window.innerHeight,
  render() {

    let context = this._canvas.getContext('2d');

    this._canvas.width = this._with;
    this._canvas.height = this._height;
    
    context.translate(50, 50);
    context.fillRect(0, 0, 100, 150);
    context.fillRect(100, 100, 100, 150)

    context.setTransform(1, 0, 10, 1, 0, 0);
    context.fillRect(0, 0, 100, 150);
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
