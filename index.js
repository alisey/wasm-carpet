import {createCarpet1} from './create-carpet-1.js';
import {createCarpet2} from './create-carpet-2.js';
import {createCarpet3} from './create-carpet-3.js';

function drawPixelsIntoCanvas(canvas, pixels) {
    canvas.getContext('2d').putImageData(new ImageData(pixels, 512, 512), 0, 0);
}

console.time('createCarpet1');
const carpet1 = createCarpet1();
console.timeEnd('createCarpet1');

console.time('createCarpet2');
const carpet2 = createCarpet2();
console.timeEnd('createCarpet2');

console.time('createCarpet3');
const carpet3 = createCarpet3();
console.timeEnd('createCarpet3');

drawPixelsIntoCanvas(document.querySelector('#canvas1'), carpet1);
drawPixelsIntoCanvas(document.querySelector('#canvas2'), carpet2);
drawPixelsIntoCanvas(document.querySelector('#canvas3'), carpet3);
