class AddressBookContact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }

    toString() {
        return `Name: ${this.firstName} ${this.lastName}, Address: ${this.address}, ${this.city}, ${this.state}, Zip: ${this.zip}, Phone: ${this.phone}, Email: ${this.email}`;
    }
}

// Example Usage
const contact = new AddressBookContact("Sahil", "Ganeshwani", "123 Street", "Bhopal", "Madhya Pradesh", "402000", "9876543210", "sahil@example.com");
console.log(contact.toString());