function fibunaciAt(RowId) {
    if (RowId == 0) {
        return 0;
    } else if (RowId == 1) {
        return 1;
    } else {
        return fibunaciAt(RowId - 1) + fibunaciAt(RowId - 2)
    }
};


console.log(fibunaciAt(0))
console.log(fibunaciAt(1))
console.log(fibunaciAt(13))