

let Canvas = {
  _canvas: null,
  _with: 0,
  _height: 0,
  render() {

    let context = this._canvas.getContext('2d');
    
    context.beginPath();

    // circle
    context.arc(75, 75, 50, 0, 2 * Math.PI);

    // move cursor
    context.moveTo(75, 75);

    // new line
    context.lineTo(125, 75);

    // draw
    context.stroke();

    context.fillStyle = 'red';

    // pintar contenido
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
