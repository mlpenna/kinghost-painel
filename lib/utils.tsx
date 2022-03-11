function bytesToMegabytes(b: number) {
    return (b / Math.pow(1024, 2)).toFixed(2);
}

export default bytesToMegabytes;