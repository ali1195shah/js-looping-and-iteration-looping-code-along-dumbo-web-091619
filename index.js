// Code your solutions in this file


function writeCards(strName, eventName) {
    let num_arr = []
    for (let i = 0; i < strName.length; i++) {
        num_arr.push(`Thank you, ${strName[i]}, for the wonderful ${eventName} gift!`);
    }
    return num_arr
}


function countDown(num) {
   let i = num
    while (i >= 0) {
        console.log(i);
        i -= 1
    }
}