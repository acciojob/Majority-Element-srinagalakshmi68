// arr = array of numbers
function major(arr) {
    //your code here
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            let count = map.get(arr[i]) + 1;
            if (count > floor(arr.length / 2)) {
                document.write("Majority found :- " + arr[i]);
                return;
            } else
                map.set(arr[i], count);

        } else
            map.set(arr[i], 1);
    }
    document.write(" No Majority element");
}
module.exports = major;