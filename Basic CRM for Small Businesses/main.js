function addCustomer() {
    let name = document.getElementById("customerName").value;
    let email = document.getElementById("customerEmail").value;
    let order = document.getElementById("customerOrder").value;
    if (name.trim() !== "" && email.trim() !== "" && order.trim() !== "") {
        let table = document.getElementById("customerTable");
        let row = table.insertRow();
        row.innerHTML = `<td>${name}</td><td>${email}</td><td>${order}</td>
        <td><button class='remove-btn' onclick="removeCustomer(this)">Remove</button>
        </td>`;
        document.getElementById("customerName").value = "";
        document.getElementById("customerEmail").value = "";
        document.getElementById("customerOrder").value = "";
    }
}
function removeCustomer(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}