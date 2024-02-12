const table = document.createElement("table");
table.setAttribute('id', 'newTable');
document.body.appendChild(table);

const tBody = document.createElement("tbody");
table.appendChild(tBody);

tBody.style.display = 'flex';
tBody.style.flexDirection = 'column';
tBody.style.gap = '2px';

let count = 1;
for (let i = 0; i < 10; i++){
    let row = document.createElement("tr");
    row.style.display = 'flex';
    row.style.gap = '2px';
    for (let j = 0; j < 10; j++){
        let cell = document.createElement("td");
        cell.style.border = '1px solid black';
        cell.style.display = 'flex';
        cell.style.alignItems = 'center';
        cell.style.justifyContent = 'center';
        cell.style.width = '50px';
        cell.style.height = '50px';
        cell.textContent = count;
        count++;
        row.appendChild(cell);
    }

    tBody.appendChild(row);
}
