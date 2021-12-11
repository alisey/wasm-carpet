export function createCarpet2() {
    const pixels = new Uint8ClampedArray(512 * 512 * 4);
    for (let i = 0; i < pixels.length; i += 4) {
        pixels[i + 3] = (i * i * 0.0625002384185791) & 255;
    }
    return pixels;
}
