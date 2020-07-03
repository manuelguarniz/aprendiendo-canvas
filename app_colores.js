

let Canvas = {
  _canvas: null,
  _with: 0,
  _height: 0,
  render() {

    let context = this._canvas.getContext('2d');
    
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
        context.fillStyle = `rgb(${255-42.5*i}, ${255-42.5*j}, ${42.5*i})`;
        context.fillRect(j * 25, i * 25, 25, 25);
      }
      
    }
    context.fillRect(5, 5, this._with, 10);
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
