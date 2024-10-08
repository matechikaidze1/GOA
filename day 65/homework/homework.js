function checkAge() {
    const age = prompt("enter your age:");
    
    if (age !== null) {
        const ageNumber = parseInt(age, 10);
        
        if (!isNaN(ageNumber)) {
            if (ageNumber >= 18) {
                alert("welcome to our website!");
            } else {
                alert("access denied, 18+ only allowed.");
            }
        } else {
            alert("please enter your age using numbers.");
        }
    }
}

checkAge();