//I tried.
function getter(array) {
    for(let i = 0; i < array.length; i++){
        var check = false;
        var result = 0;
        do {
            result = array[i];
            check = (array[0] != array[i]);
        } while (check = false);
        return result;
    }}