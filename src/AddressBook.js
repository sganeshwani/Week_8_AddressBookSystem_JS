class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    displayContacts() {
        this.contacts.forEach(contact => console.log(contact.toString()));
    }
}

// Example Usage
const addressBook = new AddressBook();
try {
    const contact1 = new AddressBookContact("Sahil", "Ganeshwani", "123 Street", "Bhopal", "Madhya Pradesh", "402000", "9876543210", "sahil@example.com");
    addressBook.addContact(contact1);
    addressBook.displayContacts();
} catch (error) {
    console.error(error.message);
}