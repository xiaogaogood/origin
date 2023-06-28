let arr = [10, 20, 30, 40, 50, 0, 50, 40, 50, 0, 52, 80]
let maxcount = 0
let count = 0
function max(arr) {
    length = arr.length
    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] > 0) {
            count++
            
            maxcount = Math.max(maxcount, count)
            
        } else {
            count = 0
        }
        
    }
    console.log(maxcount);
    console.log('123s');
    return maxcount
}

max(arr)