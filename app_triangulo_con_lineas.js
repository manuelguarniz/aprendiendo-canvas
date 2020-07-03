

let Canvas = {
  _canvas: null,
  _with: 0,
  _height: 0,
  render() {

    let context = this._canvas.getContext('2d');
    
    context.beginPath();
    context.moveTo(75, 50);
    context.lineTo(100, 75);
    context.lineTo(100, 25);
    context.lineTo(75, 50);

    context.moveTo(100, 50);
    
    context.lineTo(125, 25);
    context.lineTo(125, 75);
    context.lineTo(100, 50);

    context.closePath();

    context.stroke();
    context.fill();

  }
}

let canvas = document.getElementById('canvas');
let increment = document.getElementById('increment');
let decrement = document.getElementById('decrement');
let mod = 0

let canvasGraf = {};


increment.addEventListener('click', (e) => {
  mod+=10
  canvasGraf._with = mod;
  canvasGraf.render();
})
decrement.addEventListener('click', (e) => {
  mod-=10
  canvasGraf._with = mod;
  canvasGraf.render();
})

window.addEventListener('DOMContentLoaded', () => {
  canvasGraf = Canvas;
  canvasGraf._canvas = canvas;
  canvasGraf._with = mod;
  canvasGraf._height = 10;
  canvasGraf.render();
  
})
// window.addEventListener('resize', draw);
