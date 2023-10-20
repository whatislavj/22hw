// task1
const car = {
    make: 'Toyota',
    model: 'Corolla GR', // 300 cai pe un motor de 1.6 in 3 cilindri))
    year: 2023,
    color: 'black',
};

Object.defineProperties(car, {
  isNew: {
    value: true,
    writable: false, // ulterior la schimbul valorii, nu se va schimba
    enumerable: true,
    configurable: true
  },
  fuelType: {
    value: 'petrol',
    writable: true,
    enumerable: false, // nu va aparea in consola
    configurable: true
  },
  transmission: {
    value: 'manual',
    writable: false,
    enumerable: true,
    configurable: false
  },
  engineCapacity: {
    value: 1600,
    writable: false,
    enumerable: true,
    configurable: true
  },
});


car.isNew = false; // aceasta nu va modifica valoarea.

// Object.defineProperty(car, 'transmission', {
//     writable: true
// }) // o sa arate in consola "Cannot redefine property"

console.log(Object.values(car))

// task8
for (const prop in car) {
    console.log(prop + ": " + car[prop]);
}




// task2
const person = {
    name: "Alex",
    age: 30
  };
  

  Object.preventExtensions(person);
  

  person.job = "Programator";
  
  console.log(person);
  

// task3
const person2 = {
    name: "Cristi",
    age: 30
  };
  
  Object.seal(person2);
  
  person2.job = "Programator";
  
  person2.name = "Radu";
  
  console.log(person2);
  

// task4
Object.freeze(person2)

person2.job = "Programator";
  
person2.name = "Radu";

// Object.defineProperty(person2, 'age', {
//     value: "69",
//     enumerable: false,
// });

console.log(person2);

// task5
const numbers = [4, 1, 8, 3, 6, 9, 2, 7, 5];
console.log("numere:", numbers);

const sortAscending = numbers.sort((a, b) => a - b);
console.log("Sortate de la mic la mare:", sortAscending);

const sortDescending = numbers.sort((a, b) => b - a);
console.log("Sortate de la mare la mic:", sortDescending);

// task6
const names = ["Xenia", "Vova", "Victor", "Alin", "Vladislav", "Frank", "Iulian"];

const nameSortAZ = [...names].sort();
console.log("Nume sortate de la A la Z:", nameSortAZ);

const nameSortZA = [...names].sort((a, b) => b.localeCompare(a));
console.log("Nume sortate de la Z la A:", nameSortZA);

// task7
function sortArrayByProperty(arr, key, order) {
    if (order === 'ASC') {
      return arr.sort((a, b) => (a[key] < b[key] ? -1 : 1));
    } else if (order === 'DSC') {
      return arr.sort((a, b) => (a[key] > b[key] ? -1 : 1));
    } else {
      throw new Error('Ordinea de sortare trebuie să fie "ASC" sau "DSC".');
    }
}
  
const data = [
    { nume: 'Ion', age: 44 },
    { nume: 'Maria', age: 47 },
    { nume: 'Ana', age: 55 },
];
  
console.log(sortArrayByProperty(data, 'age', 'ASC'));
console.log(sortArrayByProperty(data, 'nume', 'DSC'));
  

// task9
for (const val of names) {
  console.log(val);
}

// task10
const objectJSON = JSON.stringify(person)
const cloneObject = JSON.parse(objectJSON)

console.log("Clona obiectului:", cloneObject)

// task11
const clonedObjectByFunc = Object.assign(person)
console.log("Clona obiectului:", clonedObjectByFunc)