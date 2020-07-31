// Soal 1

console.log("\n----SOAL 1----")

const newFunction = function literal(firstName, lastName) {
    return {
        firstName, lastName, fullName() {
            console.log(firstName + " " + lastName)
            return
        }
    }
}


//Driver Code 
newFunction("William", "Imoh").fullName()

// Soal 2 

console.log("\n----SOAL 2----")

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}

const { firstName, lastName, destination, occupation, spell } = newObject

console.log(newObject)

console.log(firstName, lastName, destination, occupation)

// soal 3

console.log("\n----SOAL 3----")

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]


const combined = [...west, ...east]

console.log(combined)