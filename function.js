export function pop(array) {
    if (array.length === 0) {
        return undefined;
    }
    const long = array.length;
    const popped = array[long - 1];
    array.length = long - 1;
    return popped;
}

console.log(pop([1, 5, 8]));
