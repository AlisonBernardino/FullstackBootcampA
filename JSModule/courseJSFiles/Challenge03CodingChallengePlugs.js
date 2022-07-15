// Challenge 03 - Coding challenge plugs

// Description:
/*
A coders group was classified to the last challenge period in USA.
But, inside the hotel bedroom, all the 4 participants will be inside the same room
with only 1 energy plug available.

They builded a plan:
Buy energy cables with extra plugs (1 per member)
to turn on all the tech devices to finish the challenge.
[CD...]
They can also plug one energy cables together to increase
the energy plugs quantity availability.  
But the combined plugs results in a lot of plugs quantity. 

Build a code to receive the energy cable plugs quantity, 
and show the maximum devices connection value to be plugged
to the energy chain.

>>> Input
A line with 04 integer numbers (Item1, Item2, Item3, Item4) 
showing the energy cables plugs quantity (2 ≤ Ti ≤ 6).

>>> Output
Your code should show a single line with a single integer value
indicating the maximum devices connection quantity to be connected
to the main energy chain simultaneously.
*/

let lines = gets().split("\n");

let targetLine = lines.shift().split(' ');

let plugs = 5;
let total = 0;

for (let index = 1; index < plugs; index++) {

total = total + parseInt(targetLine.slice(-index));

}

total = total - 3;

console.log(total);