const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  return Object.keys(sampleObject).includes(key);
}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
