document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const fbLink = document.getElementById('fbLink').value;

    const table = document.getElementById('userTable').querySelector('tbody');
    const newRow = table.insertRow();

    const nameCell = newRow.insertCell(0);
    const emailCell = newRow.insertCell(1);
    const fbLinkCell = newRow.insertCell(2);

    nameCell.textContent = name;
    emailCell.textContent = email;
    fbLinkCell.innerHTML = `<a href="${fbLink}" target="_blank">${fbLink}</a>`;

    document.getElementById('userForm').reset();
});
