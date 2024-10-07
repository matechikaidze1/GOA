const container = document.createElement('div');

const heading = document.createElement('h1');
heading.innerText = 'registration Form';
container.appendChild(heading);

function createInput(labelText, type, id) {
    const label = document.createElement('label');
    label.innerText = labelText;
    
    const input = document.createElement('input');
    input.type = type;
    input.id = id;
    input.required = true;

    container.appendChild(label);
    container.appendChild(input);
}

createInput('first name:');
createInput('last name:');
createInput('Email:');
createInput('password:');
createInput('phone number:');

const termsCheckbox = document.createElement('input');
termsCheckbox.type = 'checkbox';
termsCheckbox.id = 'terms';
termsCheckbox.required = true;

const termsLabel = document.createElement('label');
termsLabel.innerText = 'i accept the terms and conditions';
termsLabel.htmlFor = 'terms';

container.appendChild(termsCheckbox);
container.appendChild(termsLabel);

const registerButton = document.createElement('button');
registerButton.innerText = 'register';

registerButton.onclick = function() {
    if (!termsCheckbox.checked) {
        alert("accepting the terms and conditions is required");
        return;
    }

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;

    alert(`success!\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${number}`);
};

container.appendChild(registerButton);

document.body.appendChild(container);
