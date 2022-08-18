/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
    let myArr = []
    if(!arr){
        return myArr
    }
    arr.filter(item => {
      if (!myArr.includes(item)){
        myArr.push(item)
      }
    });
    return myArr;
}
