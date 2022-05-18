export function pop(array) {
    if (array.length === 0) {
        return undefined;
    } else if (typeof array === 'string') {
        throw new Error("Can't use a string");
    }

    const long = array.length;
    const popped = array[long - 1];
    array.length = long - 1;
    return popped;
}
// const array = [1, 5, 8];
// pop(array);

// console.log(array);
