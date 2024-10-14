function User(username, contact) {
    this.username = username;
    this.contact = contact;

    this.getContactInfo = function() {
        console.log("Username: " + this.username);
        console.log("Email: " + this.contact.email);
        console.log("Phone: " + this.contact.phone);
    };
}

const user = new User('dwayneJohnson', { email: 'therock@gmail.com', phone: '1354857277' });
user.getContactInfo();
