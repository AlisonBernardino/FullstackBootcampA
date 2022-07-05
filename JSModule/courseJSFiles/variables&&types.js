// Variables && types
var title = "AlphaSoftware";
let version = "Beta";

if (title === "AlphaSoftware") {
  let version = "Demo";
  var title = "OfficePlus";
  version = "Official";

  console.log(title, version);
}

console.log(title, version);


// Constants
const softwareRequisite = 'Intel Core i7 11th generation';

// The line 23 can't be processed
// due to "constant" context 
// and it will thrown an error.
softwareRequisite = 'None';