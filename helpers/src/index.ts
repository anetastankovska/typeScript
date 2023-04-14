/**
 * Checks the equality of two objects by comparing their keys and values going deep into nested properties
 * and scecking them too using a recursion
 * @param obj1: object with any number of properties and any type of value
 * @param obj2: object with any number of properties and any type of value
 * @returns boolean
 */

const areObjectsEqual = (obj1: any, obj2: any): boolean => {
    let props1 = Object.getOwnPropertyNames(obj1);
    let props2 = Object.getOwnPropertyNames(obj2);
    if (props1.length != props2.length) {
        return false;
    };
    for (let i=0; i<props1.length; i++) {
        let val1 = obj1[props1[1]];
        let val2 = obj2[props2[1]];
        let areObjects = isObject(val1) && isObject(val2);
        if (areObjects && !areObjectsEqual(val1, val2) || !areObjects && val1 !== val2) {
            return false;
        }
    }
    return true;
}

/**
 * Checks the equality of two objects by comparing their keys and values going deep into nested properties
 * and scecking them too using a recursion
 * @param obj1: object with any number and type of property and any type of value
 * @returns boolean
 */
const isObject = (object: any): boolean => {
    return object != null && typeof object === 'object';
}



