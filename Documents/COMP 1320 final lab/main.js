// Observe the list of people below
const people = [ { name: "John Doe", age: 16 },
                 { name: "Thomas Calls", age: 19 },
                 { name: "Liam Smith", age: 20 },
                 { name: "Jessy Pinkman", age: 18 }
];

// Observe the coffeeLovers list containing people who are coffee lovers
const coffeeLovers = ["John Doe", "Liam Smith", "Jessy Pinkman"];
​
// use map, filter, and reduce to do the following:
/*
1. Filter all people above the age of 18 (use a function called ageAbove18)
2. Transform the people array so all people in the array who are in coffeeLovers have a property
   in their object called coffeeLover, set either to true or false. (Use a function called addCoffeeLoverProperty)
3. Get the total summed age of all people who are coffee lovers and above the age of 18 (Use a function called ageReducer)
*/


​​//This  function filters to see which of the people are above the age of 18. If they are 18, then .filter will add them to their own array.
const ageAbove18 = (people) => {
    return people.age > 18
};
//This function is supposed to take the filtered array, and alter it so that only the people who love coffee AND are over 18 can be in this map altered array.
const addCoffeeLoverProperty = () => {
    for(let i = 0; i <= coffeeLovers.length; i++) {
        if (coffeeLovers[i] == true) {
            return coffeeLovers
        }
    }
};
​// This function is supposed to look at our final array, and add up the ages of each person in the array.
const ageReducer = (total,num) => {
    return total + num
};
​
const coffeeLoversAbove18 = people.filter(ageAbove18).map(addCoffeeLoverProperty);
​
const totalAgeOfCoffeeLoversAbove18 = coffeeLoversAbove18.reduce(ageReducer);
 
console.log(totalAgeOfCoffeeLoversAbove18);


