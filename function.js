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

export function shift(array) {
    if (array.length === 0) {
        return undefined;
    }
    array.forEach(element => {
        array.indexOf(element) = array.indexOf(element- 1);
    });

    const result = array[0];

    return result;
}
