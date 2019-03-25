function findNestedObjectByID(theObject, key, value) {
    var result = null;
    if (theObject instanceof Array) {
        for (var i = 0; i < theObject.length; i++) {
            result = findNestedObjectByID(theObject[i], key, value);
            if (result) {
                break;
            }
        }
    } else {
        for (var prop in theObject) {
            if (prop === key) {
                if (theObject[prop] === +value) {
                    return theObject;
                }
            }
            if (
                theObject[prop] instanceof Object ||
                theObject[prop] instanceof Array
            ) {
                result = findNestedObjectByID(theObject[prop], key, value);
                if (result) {
                    break;
                }
            }
        }
    }
    return result;
}
export default findNestedObjectByID;
