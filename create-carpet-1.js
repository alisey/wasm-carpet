export function createCarpet1() {
    const bitmap = new Bitmap(512, 512);

    for (const x of range(512)) {
        for (const y of range(512)) {
            const alpha = (x ** 2 + (y + x / 512) ** 2) % 256;
            const color = {red: 0, green: 0, blue: 0, alpha};
            bitmap.setPixel(x, y, color);
        }
    }

    return bitmap.data;
}

class Bitmap {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.data = new Uint8ClampedArray(width * height * 4);
    }

    setPixel(x, y, value) {
        const offset = this.getPixelOffset(x, y);
        this.data[offset + 0] = value.red;
        this.data[offset + 1] = value.green;
        this.data[offset + 2] = value.blue;
        this.data[offset + 3] = value.alpha;
    }

    getPixelOffset(x, y) {
        this.validatePixelCoords(x, y);
        return (y * this.width + x) * 4;
    }

    validatePixelCoords(x, y) {
        if (!Number.isInteger(x) || x < 0 || x > this.width) {
            throw new RangeError('Invalid value of X');
        }
        if (!Number.isInteger(y) || y < 0 || y > this.width) {
            throw new RangeError('Invalid value of Y');
        }
    }
}

function* range(start, end, step) {
    if (end === undefined) {
        end = start;
        start = 0;
    }

    if (step === undefined) {
        step = 1;
    }

    for (let i = 0; i < Math.abs(end - start); i++) {
        yield start + i * step;
    }
}
