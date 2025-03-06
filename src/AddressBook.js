class AddressBook {
    searchByCity(city) {
        return this.contacts.filter(contact => contact.city === city);
    }

    countByCity(city) {
        return this.searchByCity(city).length;
    }
}

// Example Usage
console.log("Contacts in Bhopal:", addressBook.searchByCity("Bhopal"));
console.log("Count of contacts in Bhopal:", addressBook.countByCity("Bhopal"));