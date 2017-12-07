function styleTables() {
    var $tables = $('table');
    // itterate through tables
    for (var t = 0; t < $tables.length; t++) {
        var statusCol = -1;
        var $rows = $($tables[t]).find('tr');
        // itterate through rows
        for (var r = 0; r < $rows.length; r++) {
            var $cells = $($rows[r]).find('td');
            var status = "";
            // itterate through cells
            for (var c = 0; c < $cells.length; c++) {
                var cellVal = $($cells[c]).text();
                // if on first row
                if (statusCol < 0 && cellVal === "Status") {
                    statusCol = c;
                } else {
                    if (c === statusCol) {
                        status = cellVal;
                    }
                }
            }
    
            if (
                status === "Verified" || 
                status === "Create QAN" || 
                status === "Fixed" || 
                status === "Never Mind" || 
                status === "Closed as Duplicate" ||
                status === "Moved To DLG") {
                $($rows[r]).css("color", "#AAAAAA");
            }
        }
    }
}

styleTables();