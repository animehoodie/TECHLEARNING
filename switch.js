function showTable(tableNumber) {
    // Hide all tables
    const tables = document.querySelectorAll('.table ');
    tables.forEach(table => {
        table.style.display = 'none';
    });

    // Show the selected table
    const tableToShow = document.getElementById('table' + tableNumber);
    tableToShow.style.display = 'block';
    tableToShow.style.float = 'center';
}
