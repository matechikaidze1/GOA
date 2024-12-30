const addButton = document.getElementById('addButton');
const itemInput = document.getElementById('itemInput');
const list = document.getElementById('list');

addButton.addEventListener('click', () => {
    const newItemText = itemInput.value.trim();
    if (newItemText) {
        const newItem = document.createElement('li');
        newItem.textContent = newItemText;
        list.appendChild(newItem);
        itemInput.value = '';
    }
});
