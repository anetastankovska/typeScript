import { t1, t2 } from "./dummyData";
/**
 * Checks the equality of two objects by comparing their keys and values going deep into nested properties
 * and scecking them too using a recursion. DOES NOT WORK IF THE VALUE IS AN ARRAY.
 * @param obj1: object with any number of properties and any type of value
 * @param obj2: object with any number of properties and any type of value
 * @returns boolean
 */

export const areObjectsEqual1 = (obj1: any, obj2: any): boolean => {
    let props1 = Object.getOwnPropertyNames(obj1);
    let props2 = Object.getOwnPropertyNames(obj2);
    if (props1.length != props2.length) {
        console.log(props1, "vs", props2);
        return false;
    };
    for (let i=0; i<props1.length; i++) {
        let val1 = obj1[props1[1]];
        let val2 = obj2[props2[1]];
        console.log(`${level}::${val1} (${typeof val1}) vs ${val2} (${typeof val2})`)
        let areObjects = isObject(val1) && isObject(val2);
        if (areObjects) {
            if(Array.isArray(obj1) && Array.isArray(obj2)) {
                for (let j=0; j<obj1.length; j++) {
                    if (!areObjectsEqual1(val1[j], val2[j])) {
                        return false;
                    }
                    // if(val1[j] !== val2[j]) {
                    //     console.log(level, val1[j], val2[j])
                    //     return false
                    // }
                }
            }
            if (!areObjectsEqual1(val1, val2)) {
                return false;
            }
        } else {
            if(val1 !== val2) {
                // console.log(val1, val2)
                return false
            }
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


let level = [];
// Use this function
export const areObjectsEqual = (o1, o2) => {
    // level++;
    const prop1 = Object.getOwnPropertyNames(o1);
    const prop2 = Object.getOwnPropertyNames(o2);
    if (prop1.length !== prop2.length) {
        // console.log ("Length difference:", prop1.length, "vs", prop2.length);
        // level--;
        return false;
    }
    for (const key of prop1) {
        const v1 = o1[key];
        const v2 = o2[key];
        level.push(key);
        if (!isObject(v1) && !isObject(v2)) {
            if (v1 !== v2) {
                // console.log(`${level.join('.')}:`, `'${v1}'`, `(${typeof v1})`,"->", `'${v2}'`, `(${typeof v2})`);
                level.pop();
                return false
            }
            level.pop();
        }
        else {
            if (Array.isArray(v1) || Array.isArray(v2)) {
                if(v1.length !== v2.length) {
                    return false;
                }
                for(let i in v1) {
                    level.push(`[${i}]`);
                    if(!areObjectsEqual(v1[i], v2[i])) {
                        level.pop()
                        return false;
                    }
                    level.pop();
                }
                // level.pop();
            }
            if (!areObjectsEqual(v1,v2)) {
                // level.pop();
                return false;
            }
            level.pop();
        }
    }
    return true;
}
// console.log(objectEqual(t1,t2))
