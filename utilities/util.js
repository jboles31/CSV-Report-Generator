let util = module.exports



util.returnData = (str) => {
    let newStr = util.trim(str)
    let rowArr = util.createRows(util.parse(newStr));
    let csvFile = util.createCSV(rowArr);
    return csvFile;
}

util.trim = (str) => {
    return str.slice(10, -3)
}

util.parse = (str) => {
    let obj = JSON.parse(str);
    return obj;
}

util.createRows = (obj) => {
    let rows = [];
    let row = [];
    let newRow = [];
    for (let keys in obj) {
        if(keys !== 'children') {
            row.push(keys);
        }
    }
    rows.push(row);
    let recurse = (obj) => {
        newRow = [];
        for (let key in obj) {
            if(key === 'children') {
                rows.push(newRow)
                for (let i = 0; i < obj.children.length; i++) {
                    recurse(obj.children[i])
                }
            } else {
                newRow.push(obj[key]);
            }
        }
    }
    recurse(obj);
    return rows
}

util.createCSV = (rows) => {
    csv = '';
    rows.forEach(row => {
        row = row.join(",");
        csv += row + "\r\n";
    })
    return csv
};