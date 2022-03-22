export function bytesToMegabytes(b: number) {
    return (b / Math.pow(1024, 2)).toFixed(2);
}

export function computeOccupiedSpace(emailList: any) {
    let totalOccupied = 0;

    if (emailList === undefined) { return 0; }
    emailList.map((item: any) => {
        totalOccupied += parseInt(item.quota);
    })
    return bytesToMegabytes(totalOccupied);
}

// export default { bytesToMegabytes, computeOccupiedSpace };