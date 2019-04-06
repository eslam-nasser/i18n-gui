import { recursivelyRemoveIds } from './recursivelyHandleIds';

function exportToJSON(objectData, filename = 'export.json') {
    let contentType = 'application/json;charset=utf-8;';
    let cleanData = recursivelyRemoveIds(objectData);

    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        var blob = new Blob(
            [decodeURIComponent(encodeURI(JSON.stringify(cleanData, null, 2)))],
            { type: contentType }
        );
        navigator.msSaveOrOpenBlob(blob, filename);
    } else {
        var a = document.createElement('a');
        a.download = filename;
        a.href =
            'data:' +
            contentType +
            ',' +
            encodeURIComponent(JSON.stringify(cleanData, null, 2));
        a.target = '_blank';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}

export default exportToJSON;
