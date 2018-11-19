let input = "5 5 3 3 E MMRMMRMRRM".split(" ");
const N = "[↑]";
const S = "[↓]";
const E = "[→]";
const W = "[←]";
let direction = "";
rover = input.slice(2, 5);
console.log("Initial starting point of rover: ", rover);

// Create Plateau

Array.matrix = function(numrows, numcols, initial) {
  let arr = [];
  for (let i = 0; i < numrows; ++i) {
    let columns = [];
    for (let j = 0; j < numcols; ++j) {
      columns[j] = initial;
    }
    arr[i] = columns;
  }
  return arr;
};

const mars = Array.matrix(input[0], input[1], "[]");


function directionDisplay(rover) {
  switch (rover[2]) {
    case "N":
      direction = N;
      break;

    case "E":
      direction = E;
      break;

    case "W":
      direction = W;
      break;

    case "S":
      direction = S;
      break;

    default:
      break;
  }
}

function rotate(rover, turn) {
  switch (rover[2]) {
    case "N":
      if (turn == "L") {
        rover[2] = "W";
      } else if (turn == "R") {
        rover[2] = "E";
      }
      break;
    case "E":
      if (turn == "L") {
        rover[2] = "N";
      } else if (turn == "R") {
        rover[2] = "S";
      }
      break;
    case "S":
      if (turn == "L") {
        rover[2] = "E";
      } else if (turn == "R") {
        rover[2] = "W";
      }
      break;
    case "W":
      if (turn == "L") {
        rover[2] = "S";
      } else if (turn == "R") {
        rover[2] = "N";
      }
      break;
    default:
      break;
  }
}

let moves = input[5].split("");
console.log("These are the moves: ", moves);

for (let i = 0; i < moves.length; i++) {
  const move = moves[i];
  console.log(move);
  if (move == "M") {
    switch (rover[2]) {
      case "N":
        console.log("Moving: ", N);
        rover[0] = parseInt(rover[0]) + 1;
        break;
      case "S":
        rover[0] = parseInt(rover[0]) - 1;
        console.log("Moving: ", S);
        break;
      case "E":
        rover[1] = parseInt(rover[1]) + 1;
        console.log("Moving: ", E);
        break;
      case "W":
        rover[1] = parseInt(rover[1]) - 1;
        console.log("Moving: ", W);
        break;

      default:
        break;
    }
  } else {
    console.log("rover", rover);
    rotate(rover, move);
  }
}

directionDisplay(rover);

mars[rover[0]][rover[1]] = direction;

console.log(mars);
