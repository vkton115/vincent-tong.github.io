// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./vincent-tong.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    //use filter function to return an array of only the male customers
    var males = _.filter(array, function(customer){
            return customer.gender === "male";
    });
    return males.length;
};

var femaleCount = function(array) {
    //use reduce function to return the number of female customers
    var numFemales = _.reduce(array, function(females, customer, index){
        // determine if the current customer has a gender of female
        if (customer.gender === "female"){
            // if true, add 1 to the females accumulator value
            females += 1; // females = 0 + 1
        }
        return females;
    }, 0); // return the number of female customers
    return numFemales;
};

var oldestCustomer = function (array) {
    let oldestObj = _.reduce(array, function (previous, current) {
      if (previous.age > current.age) {
        return previous;
      } else {
        return current;
      }
    });
    return oldestObj.name;
  };

var youngestCustomer = function (array) {
  let youngestObj = _.reduce(array, function (previous, current) {
    if (previous.age < current.age) {
      return previous;
    } else {
      return current;
    }
  });
  return youngestObj.name;
};

var averageBalance = function (array){
}
//   var totalBalance = 0;
//   var balance = _.reduce(array, function(accumulator, customer){
//     totalBalance = totalBalance + customer.balance;
//     accumulator += 1;
//     return totalBalance;
//   },0);
//   return balance/accumulator;
// }

var firstLetterCount = function(array, letter){
  var letterCount = _.reduce(array, function(names, customer, index){
    if (customer.name[0] === letter.toUpperCase()){
      names += 1;
    }
    return names;
  }, 0);
  return letterCount;
};



var friendFirstLetterCount = function(array, Customer, letter){
  var count = _.filter(array, function(customer){
    if (customer.name === Customer){
      for (let i = 0; i < customer.friends.length; i++){
        if (customer.friends[i].name[0] === letter.toUpperCase()){
          return true;
        }
      }
    }
  })
  return count.length;
}
//   var friendCount = _.reduce(array, function(names, customers, index){
//     if (customers.name === customer){
//       for (var friends in customer){
//         if (friends.name[0] === letter.toUpperCase()){
//           names += 1;
//         }
//         return names;
//       }
//     }
//   }, 0);
//   return friendCount;
// };

var friendsCount = function (array, name){
}
//   var friends = _.filter(array, function(customer){
//     for (var friends in customer){
//       if (friends === name){
//         return true;
//       }
//     }
// });
// return friends;
// };

var topThreeTags;

var genderCount = function (array){
}
//   let genderCount = _.reduce(array, function (males, females, nonbinary, customer, index){
//     if (customer.gender === "male"){
//       males += 1;
//     } else if (customer.gender === "female"){
//       females += 1;
//     } else if (customer.gender === "non-binary"){
//       nonbinary += 1;
//     }
//     return {
//       male: males,
//       female: females,
//       "non-binary": nonbinary,
//     }
//   },0);
//   return genderCount;
// };


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
