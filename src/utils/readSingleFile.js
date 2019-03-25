function readSingleFile(file, cb) {
    const reader = new FileReader();
    reader.onload = function(e) {
        const contents = e.target.result;
        const data = JSON.parse(contents);
        cb(data);
    };
    reader.readAsText(file);
}

export default readSingleFile;
