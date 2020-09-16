// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS:
const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: '#2f6a49',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur',
  favouriteWeapon: 'knife'
};

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: '#7b497f',
  description: 'He is a bit whimsical and odd.',
  age: 53,
  image: 'assets/plum.png',
  occupation: 'Professor',
  favouriteWeapon: 'axe' 
};

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: '#9b2c15',
  description: 'She is strong and mysterious',
  age: 41,
  image: 'assets/scarlet.png',
  occupation: 'Superhero',
  favouriteWeapon: 'dumbBell'
};

const mrsPeacock = {
  firstName: 'Elanor',
  lastName: 'Peacock',
  color: '#04b7d3',
  description: 'A real socialite.',
  age: 52,
  image: 'assets/peacock.png',
  occupation: 'Headhunter',
  favouriteWeapon: 'poison'
};

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: '#d1a93c',
  description: 'He is fascinated by weapons.',
  age: 66,
  image: 'assets/mustard.png',
  occupation: 'Colonel',
  favouriteWeapon: 'pistol'
};

const mrsWhite = {
  firstName: 'Lily',
  lastName: 'White',
  color: '#ddafd9',
  description: 'She is quite strict and knows how to get things done.',
  age: 68,
  image: 'assets/white.png',
  occupation: 'Retired project manager',
  favouriteWeapon: 'candleStick'
};

//CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'a rope',
  weight: 10,
  flexibility: 3,
  color: '#7f4d33'
};

const knife = {
  name: 'a knife',
  weight: 1,
  flexibility: 9,
  color: '#2f6a49'
};

const candleStick = {
  name: 'a candle stick',
  weight: 2,
  flexibility: 7,
  color: '#ddafd9'
};

const dumbBell = {
  name: 'a dumbbell',
  weight: 20,
  flexibility: 6,
  color: '#9b2c15'
};

const poison = {
  name: 'poison',
  weight: 0,
  flexibility: 10,
  color: '#04b7d3'
};

const axe = {
  name: 'an axe',
  weight: 12,
  flexibility: 3,
  color: '#7b497f'
};

const bat = {
  name: 'a bat',
  weight: 3,
  flexibility: 7,
  color: '#abb782'
};

const trophy = {
  name: 'a trophy',
  weight: 5,
  flexibility: 3,
  color: '#fce853'
};

const pistol = {
  name: ' a pistol',
  weight: 1,
  flexibility: 9,
  color: '#d1a93c'
};

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.
const diningRoom = "Dining Room";

const conservatory = "Conservatory";

const kitchen = "Kitchen";

const study = "Study";

const library = "Library";

const billiardRoom = "Billiard Room";

const lounge = "Lounge";

const ballRoom = "Ball Room";

const hall = "Hall";

const spa = "Spa";

const livingRoom = "Living Room";

const observatory = "Observatory";

const theater = "Theater";

const guestHouse = "Guest House";

const patio = "Patio";

//CONSOLE LOG TO TEST:
console.log(mrsWhite.description);
console.log(candleStick.flexibility);

// STEP 2. NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:
const suspects = [
  mrGreen,
  professorPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard,
  mrsWhite
];

const weapons = [
  rope,
  knife,
  candleStick,
  dumbBell,
  poison,
  axe,
  bat,
  trophy,
  pistol
];

const rooms = [
  diningRoom,
  conservatory,
  kitchen,
  study,
  library,
  billiardRoom,
  lounge,
  ballRoom,
  hall,
  spa,
  livingRoom,
  observatory,
  theater,
  guestHouse,
  patio
];

console.log(suspects);
console.log(rooms);
console.log(weapons);
//console log the first suspect in the suspects array:
console.log(suspects[0]);
//console log the last room in the rooms array:
console.log(rooms[14]); //How to do it if I dont know how many elements I have in my string?
console.log(rooms.length); //writes 15 in console
//FIND OUT HOW TO PRINT THE LAST ITEM IN THE ROOMS-ARRAY!



// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => { //I don't understand the syntax of this function. I could not have written it myself.
  return array[Math.floor(Math.random() * array.length)] //What does array.length do here? I know length is the length of the array but not why it is in the function.
}
console.log(randomSelector(rooms)); //prints random room/suspect/weapon

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.
const mystery = {
  killer: "",
  weapon: "",
  room: "",
};

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects); //mystery.killer selects the property killer in mystery object and sets this equal to a randomly selected suspect. 
  //console.log(mystery);
  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerName').innerHTML = `Name: ${mystery.killer.firstName} ${mystery.killer.lastName}`
  document.getElementById('killerAge').innerHTML = `Age: ${mystery.killer.age}`
  document.getElementById('killerOccupation').innerHTML = `Occupation: ${mystery.killer.occupation}`
  document.getElementById('killerDescription').innerHTML = `Description: ${mystery.killer.description}`
  document.getElementById('killerImage').src = `${mystery.killer.image}`
}
//Added eventlistener below instead of "onclick" in HTML. Don't know which way is the best way to do it. This only works if the eventlistener is outside of the function. First param: type of event. Second param: the function to call on event.
document.getElementById('killerCard').addEventListener('click', pickKiller);
//pickKiller();
//console.log(mystery.killer); //Why does this return undefined in the console, but still it changes the first card in the browser and shows all the info about random killer above!?
//console.log(`pickKiller.mystery.killer : ${pickKiller.mystery.killer}`); //Trying what Van did at the lecture, @about 18 min in, but doeasn't work?!?

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.
//If pickKiller function is excecuted/card is clicked then do this function pickWeapon:
const pickWeapon = () => {
  //Randomly select a weapon from weapons and add it to the mystery object
  mystery.weapon = randomSelector(weapons);
  document.getElementById('weaponCard').style.background = mystery.weapon.color
  document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`
  document.getElementById('weaponWeight').innerHTML = `Weight: ${mystery.weapon.weight}`
  document.getElementById('weaponFlexibility').innerHTML = `Flexibility: ${mystery.weapon.flexibility}`
  //Add image here for weapon-card later
  //Add colour to each weapon also?
}
document.getElementById('weaponCard').addEventListener('click', pickWeapon);

//Add something that makes this: If pickKiller AND pickWeapon function is excecuted/cards are clicked then do this function on the pickroom:
const pickRoom = () => {
  //Randomly select a room from rooms and add it to the mystery object
  mystery.room = randomSelector(rooms);
  document.getElementById('roomName').innerHTML = `${mystery.room}`
  //Add image here for room-card later
}
document.getElementById('roomCard').addEventListener('click', pickRoom);

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

//If 
const revealMystery = (mystery) => {
  //Invoke when button in html is clicked and show elements from mystery object in text.
  //Put also some kind of if-statement(?) here that conditions this to reveal ONLY if the three cards above has been clicked.
document.getElementById('mystery').innerHTML = `The murder was committed by ${mystery.killer.firstName} in the ${mystery.room} with ${mystery.weapon.name}` 
}