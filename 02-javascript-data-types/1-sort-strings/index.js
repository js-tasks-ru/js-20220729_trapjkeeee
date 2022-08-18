/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
    const newArr = [...arr];
    const sort = newArr.sort((a,b) => a.localeCompare(b, "ru-en-u-kf-upper"));
    if (param === 'asc'){
        return sort
    } 
    if (param === 'desc') {
        return sort.reverse();
    }
}
