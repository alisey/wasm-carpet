#include <stdint.h>
#include <stdio.h>
#include <time.h>

uint32_t pixels[512 * 512];

void create_carpet() {
    for (uint32_t i = 0; i < 512 * 512; i++) {
        pixels[i] = i * i * 16777280 & 0xff000000;
    }
}

int main() {
    clock_t start = clock();
    create_carpet();
    clock_t end = clock();

    double time_spent = (double)(end - start) / CLOCKS_PER_SEC * 1000;
    printf("%f\n", time_spent);

    return 0;
}
