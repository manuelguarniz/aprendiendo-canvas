

let Canvas = {
  _canvas: null,
  _with: 0,
  _height: 0,
  render() {

    let context = this._canvas.getContext('2d');
    
    context.beginPath();
    context.font = '40px serif';
    // context.strokeText('Hello World', 40, 80)
    context.fillStyle = 'red';
    context.fillText('Hello World', 40, 80);
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
