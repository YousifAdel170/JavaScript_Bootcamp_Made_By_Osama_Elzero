let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
  };
  
//   // Needed Output
//   Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
//   3
//   true

let myMap = new Map(Object.entries(myInfo));
console.log(myInfo);
console.log(myMap.size);
console.log(myMap.has("role"));