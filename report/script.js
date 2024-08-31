document.getElementById('addRowBtn').addEventListener('click', function() {
    // Get the table body
    const tableBody = document.querySelector('#invoiceTable tbody');

    // Create a new row
    const newRow = document.createElement('tr');

    // Create cells for the new row
    const qtyCell = document.createElement('td');
    const unitCell = document.createElement('td');
    const descriptionCell = document.createElement('td');
    const unitPriceCell = document.createElement('td');
    const totalPriceCell = document.createElement('td');

    // Add input elements to each cell
    qtyCell.innerHTML = '<input type="text" name="qty">';
    unitCell.innerHTML = '<input type="text" name="unit">';
    descriptionCell.innerHTML = '<input type="text" name="description">';
    unitPriceCell.innerHTML = '<input type="text" name="unit-price">';
    totalPriceCell.innerHTML = '<input type="text" name="total-price">';

    // Append cells to the new row
    newRow.appendChild(qtyCell);
    newRow.appendChild(unitCell);
    newRow.appendChild(descriptionCell);
    newRow.appendChild(unitPriceCell);
    newRow.appendChild(totalPriceCell);

    // Append the new row to the table body
    tableBody.appendChild(newRow);
});
