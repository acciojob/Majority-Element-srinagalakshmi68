// arr = array of numbers
function major(arr) {
    //your code here
    let seen = {}

    for (let i = 0; i < arr.length; i++) {
        seen[arr[i]] = (seen[arr[i]] || 0) + 1
        if (seen[arr[i]] >= arr.length / 2) return arr[i]
    }
}
module.exports = major;