// import robotjs library
const robot = require("robotjs");

//Dynamically get a new position for casting the alch spell. An array of x,y pixel co-ordinate pairs where cast alch works.And then pass in a random index of those values  
castAlchX = [667, 670, 673, 676, 662, 665, 664, 663];
castAlchY = [287, 290, 293, 296, 283, 285, 282, 286];

//FUNCTIONS

function findAlchSpell() 
{
  //Gets random number that will be used as index for X,Y arrays
  let z = Math.trunc(Math.random() * castAlchX.length); 
  robot.moveMouseSmooth(castAlchX[z], castAlchY[z]);
}

function sleep(ms) 
{
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

function castAlch() 
{
  sleep(getRandomArbitrary(300, 400));
  console.log('Casting Alch');
  findAlchSpell();
  sleep(getRandomArbitrary(400, 700));
  robot.mouseClick();
  sleep(getRandomArbitrary(400, 700));
}

function main() 
{
  //Delay to get situated
  console.log("Starting...");
  sleep(3000);

  //Casts i alchs
  for (let i = 1; i < 101; i++)
  {
    console.log(`Loop repitition ${i}`);
    castAlch();
    robot.mouseClick();
    sleep(getRandomArbitrary(400, 750));
  }
  console.log("Done.");
}

//Calling Main:
main();




function getRandomArbitrary(min, max) 
// {
//   return Math.random() * (max - min) + min;
// }

// function moveRight() 
// {
//   robot.moveMouseSmooth(700, 280);
// }

// function moveDown() 
// {
//   robot.moveMouseSmooth(708, 316);
// }

// function getRandomInt(max) 
// {
//   return Math.floor(Math.random() * max);
// }

// function alch1item()
// {
//   castAlch();
//   robot.mouseClick();
//   sleep(getRandomArbitrary(400, 750));
//   // findItem1();
// }





// function findItem1()
// {
//   console.log('Clicking Item 1');
//   robot.mouseClick();
//   sleep(getRandomArbitrary(400, 750));
// }

// function findItem2()
// {
//   console.log('Finding Item 2');
//   moveRight();
//   sleep(getRandomArbitrary(400, 800));
//   console.log('Clicking Item 2');
//   robot.mouseClick();
//   sleep(getRandomArbitrary(400, 700));
// }

// function findItem3()
// {
//   console.log('Finding Item 3');
//   moveDown();
//   sleep(getRandomArbitrary(400, 800));
//   console.log('Clicking Item 3');
//   robot.mouseClick();
//   sleep(getRandomArbitrary(400, 700));
// }







// function alch3items() 
// {
//   castAlch();
//   findItem1();
//   castAlch();
//   findItem2();
//   castAlch();
//   findItem3();
// }

// function alch2items() 
// {
//   findAlchSpell();
//   sleep(getRandomArbitrary(1000, 1300));
//   robot.mouseClick();
//   sleep(getRandomArbitrary(1000, 2000));
//   robot.mouseClick();
//   sleep(getRandomArbitrary(1000, 2000));
//   robot.mouseClick();
//   sleep(getRandomArbitrary(1000, 1500));
//   moveRight();
//   sleep(getRandomArbitrary(1000, 1400));
//   robot.mouseClick();
//   sleep(getRandomArbitrary(1000, 1700));
// }