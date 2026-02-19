
// Objective: Practice array manipulation using functional patterns (filter, map, reduce, and destructuring) by processing real data from an API.
// Filter: Only include users whose id is an even number.
// Transform: Create a new array of objects containing only the id, name, and the city (extracted from the nested address object).
// Add: Insert a "Guest User" at the beginning of the list without mutating the original result.
// Statistics: Calculate the total number of characters in all usernames combined using reduce.

fetch('https://jsonplaceholder.typicode.com/users/')
  .then(response => response.json())
  .then(users => {
      // YOUR CODE STARTS HERE
      console.log("--- Processed Users ---");
      // 1. Filter even IDs

      const evenIds = users.filter((user) => (user.id%2) == 0);
      console.log(evenIds);

      // 2. Map to clean objects {id, name, city}

      const transform = users.map((user) => ({
        id: `${user.id}`,
        name: `${user.name}`,
        city: `${user.address.city}`,
      }));
      console.log(transform);

      // 3. Add Guest User at the start using Spread (...)

      const guestUser = {
          "id": 0,
          "name": "Guest User",
          "username": "guest",
          "email": "guest@april.biz",
          "address": {
            "street": "Barcelona street",
            "suite": "Apt. 200",
            "city": "Barcelona",
            "zipcode": "00000",
            "geo": {
              "lat": "-1",
              "lng": "2"
            }
          },
          "phone": "111111111",
          "website": "website.org",
          "company": {
            "name": "Company",
            "catchPhrase": "catchphrase",
            "bs": "qwertyuiop"
          }
      }
      const spread = [guestUser, ...users]
      console.log(spread);
      
      console.log("--- Statistics ---");
      // 4. Reduce to count total characters in names

      const reduce = users.reduce((total, user) => total + user.username.length, 0);
      console.log(reduce);

  });
