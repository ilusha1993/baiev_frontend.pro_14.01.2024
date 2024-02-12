const table = document.createElement("table");
table.setAttribute('id', 'newTable');
document.body.appendChild(table);

const tBody = document.createElement("tbody");
table.appendChild(tBody);

let count = 1;
for (let i = 0; i < 10; i++){
    let row = document.createElement("tr");

    for (let j = 0; j < 10; j++){
        let cell = document.createElement("td");
        cell.style.border = '1px solid black';
        cell.style.textAlign = 'center';
        cell.style.padding = '15px';
        cell.textContent = count;
        count++;
        row.appendChild(cell);
    }

    tBody.appendChild(row);
}
