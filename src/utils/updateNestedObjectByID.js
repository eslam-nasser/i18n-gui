function updateNestedObjectByID(sourceObject, key, value, newObject) {
    var result = null;
    if (sourceObject instanceof Array) {
        for (var i = 0; i < sourceObject.length; i++) {
            result = updateNestedObjectByID(sourceObject[i], key, value);
            if (result) {
                break;
            }
        }
    } else {
        for (var prop in sourceObject) {
            if (prop === key) {
                if (sourceObject[prop] === +value) {
                    // console.log();
                    sourceObject[prop] = { ...newObject };
                    // debugger;
                    return sourceObject;
                }
            }
            if (
                sourceObject[prop] instanceof Object ||
                sourceObject[prop] instanceof Array
            ) {
                result = updateNestedObjectByID(sourceObject[prop], key, value);
                if (result) {
                    break;
                }
            }
        }
    }
    return result;
}
export default updateNestedObjectByID;

// const mutateObjectProperty = (prop, value, obj) =>
//     obj.constructor === Object &&
//     Object.keys(obj).forEach(key => {
//         if (key === prop) obj[key] = value;
//         mutateObjectProperty(prop, value, obj[key]);
//     });
// export default mutateObjectProperty;
