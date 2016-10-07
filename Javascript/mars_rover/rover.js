
// set start position and direction
var myRover = {
  position: [0,0], 
  direction: 'N'
};

// tell the rover to go forward
function goForward(rover) {
  switch(rover.direction) {

      // if rover is facing north
      case 'N':
        // increase Y axis position by 1 (move one square north)
      if (rover.position[1] < 9) {
        rover.position[1]++
        // go back to 0 on Y axis if rover gets to edge of grid
      } else {
        rover.position[1] = 0;
      }
      break;

      // if rover is facing east
    case 'E':
        // increase X axis by 1 (move one square east)
      if (rover.position[0] < 9) {
        rover.position[0]++
        // go back to 0 on X axis if rover gets to edge of grid
      } else {
        rover.position[0] = 0;
      }
      break;

      // if rover is facing south
    case 'S':
        // decrease Y axis by 1 (move one square south)
      if (rover.position[1] > 0) {
        rover.position[1]--
        // go back to 9 on Y axis if rover gets to edge of grid
      } else {
        rover.position[1] = 9;
      }
      break;

      // if rover is facing west
    case 'W':

        // decrease X axis by 1 (move one square west)
      if (rover.position[0] > 0) {
        rover.position[0]--
        // go back to 9 on X axis if rover gets to edge of grid
      } else {
        rover.position[0] = 9;
      }
      break;
  };
  // report new position
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

// same as goForward but in reverse!
function goBackward(rover) {
    switch(rover.direction) {
      case 'N':
        if (rover.position[1] > 0) {
          rover.position[1]--
        } else {
          rover.position[1] = 9;
        }
      break;
      case 'E':
        if (rover.position[0] > 0) {
        rover.position[0]--
        } else {
        rover.position[0] = 9;
        }
      break;
      case 'S':
        if (rover.position[1] < 9) {
        rover.position[1]++
        } else {
        rover.position[1] = 0;
        }
       break;
      case 'W':
        if (rover.position[0] < 9) {
        rover.position[0]++
        } else {
        rover.position[0] = 0;
        }
        break;
    };
    console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
  }

// change direction of rover by rotating one right
function turnRight(rover){
  switch(rover.direction) {
    case 'N':
      rover.direction = 'E'
      break;
    case 'E':
      rover.direction = 'S'
      break;
    case 'S':
      rover.direction = 'W'
      break;
    case 'W':
      rover.direction = 'N'
      break;
  };
    // report new direction
    console.log("Rover is facing: " + rover.direction)
}

// change direction of rover by rotating one left
function turnLeft(rover){
   switch(rover.direction) {
    case 'N':
      rover.direction = 'W'
      break;
    case 'E':
      rover.direction = 'N'
      break;
    case 'S':
      rover.direction = 'E'
      break;
    case 'W':
      rover.direction = 'S'
      break;
  };
    // report new direction
    console.log("Rover is facing: " + rover.direction)
}

// take a sequence of commands and apply them
function sequenceMove(rover, sequence){
  // turn sequence into an array
  var sequenceArray = sequence.split('');

  //iterate through the array and call the corresponding functions
  for(var i=0, length = sequenceArray.length; i < length; i++){
    switch (sequenceArray[i]){
      case 'f':
        goForward(rover);
      break;
      case 'b':
        goBackward(rover);
      break;
      case 'r':
        turnRight(rover);
      break;
      case 'l':
        turnLeft(rover);
      break;
    }
  }
  // Report final position and direction
  console.log("Rover End Position: [" + rover.position[0] + ", " + rover.position[1] + "] and facing " + rover.direction)
}

// I struggled with the bonus exercises. That's my next challenge!