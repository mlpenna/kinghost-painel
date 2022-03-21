export function bytesToMegabytes(b: number) {
    return (b / Math.pow(1024, 2)).toFixed(2);
}

export function computeOccupiedSpace(emailList) {
    let totalOccupied = 0;
    // console.log(emailList);
    emailList.map((item: any) => {
        totalOccupied += parseInt(item.quota);
        console.log(bytesToMegabytes(totalOccupied));
    })
    return totalOccupied;
}

// export default { bytesToMegabytes, computeOccupiedSpace };