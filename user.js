class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  compareAge(otherUser) {
    const messages = [
      this.firstName + " " + this.lastName + " è più vecchio di " + otherUser.firstName + " " + otherUser.lastName + ".",
      this.firstName + " " + this.lastName + " è più giovane di " + otherUser.firstName + " " + otherUser.lastName + ".",
    ];
    const ageComparison = this.age - otherUser.age;
    for (let i = 0; i < messages.length; i++) {
      if (ageComparison > 0 && i === 0) {
        return messages[i];
      } else if (ageComparison < 0 && i === 1) {
        return messages[i];
      }
    }
  }
}
const user1 = new User("Gianfranco", "Fumagalli", 30, "Roma");
const user2 = new User("Giulia", "Neri", 35, "Torino");
const user3 = new User("Marco", "Galli", 28, "Firenze");

console.log(user1.compareAge(user2));
console.log(user2.compareAge(user1));
console.log(user1.compareAge(user3));

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  condividonoProprietario(otherPet) {
    return this.ownerName === otherPet.ownerName;
  }
}

const pet1 = new Pet("Fido", "Gianfranco", "Cane", "Labrador");
const pet2 = new Pet("Micio", "Giulia", "Gatto", "Persiano");
const pet3 = new Pet("Pippo", "Gianfranco", "Cane", "Beagle");

console.log(pet1.condividonoProprietario(pet2));
