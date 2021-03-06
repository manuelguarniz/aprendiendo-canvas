

let Canvas = {
  _canvas: null,
  _with: window.innerWidth,
  _height: window.innerHeight,
  _x: 200,
  _v: 5,
  _context: null,
  init() {

    this._context = this._canvas.getContext('2d');

    this._canvas.width = this._with;
    this._canvas.height = this._height;

    this.render();
  },
  render() {

    window.requestAnimationFrame(() => this.render());
    this._context.clearRect(0, 0, this._with, this._height)
    console.log('re-render');

    this._context.beginPath();
    this._context.arc(this._x, 200, 60, 0, 2 * Math.PI);
    this._context.strokeStyle = 'crimson';
    this._context.stroke();

    if (this._x > this._with || this._x < 0)
      this._v = -this._v;

    this._x+=this._v;
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
  canvasGraf.init();
  
})
window.addEventListener('resize', () => {
  if (canvasGraf) {
    canvasGraf._with = window.innerWidth;
    canvasGraf._height = window.innerHeight;
    canvasGraf.render();
  }
});
