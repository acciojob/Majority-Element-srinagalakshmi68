// arr = array of numbers
function major(arr) {
    //your code here
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        //storing all the elemrnts of 'nums' Array in the 'map' object.
        if (!map[arr[i]]) map[arr[i]] = 0;
        map[arr[i]]++;
    }
    for (let key in map) {
        //checking for value > nums.length/2
        if (map[key] > arr.length / 2)
            return key;
    }
}
module.exports = major;