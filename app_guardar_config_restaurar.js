

let Canvas = {
  _canvas: null,
  _with: window.innerWidth,
  _height: window.innerHeight,
  render() {

    let context = this._canvas.getContext('2d');

    this._canvas.width = this._with;
    this._canvas.height = this._height;
    
    context.fillRect(0, 0, 150, 150);
    
    context.save();

    context.fillStyle = 'red';
    context.fillRect(15, 15, 120, 120);
    
    context.save();
    
    context.fillStyle = 'blue';
    context.fillRect(30, 30, 90, 90);
    
    context.restore();

    context.fillRect(45, 45, 60,60);
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
