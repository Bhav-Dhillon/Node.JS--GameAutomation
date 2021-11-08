// import robotjs library 
var robot = require('robotjs');

function main()
{
    console.log("Starting...");
    sleep(4000);

    //infinite while loop
    while (true)
    {
        var tree = findTree(); 

        // if we cant find a tree, break, and write an error message 
        if (tree == false)
        {
            console.log('Could not find tree :(');
            break;
        } 

        // chop down the tree we found
        robot.moveMouse(tree.x, tree.y);
        sleep(250);
        robot.mouseClick();
        dropLogs(); 
        sleep(8000);
    }
    

    console.log("Done.");
}

function sleep(ms) 
{
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function testScreenCapture()
{
    var img = robot.screen.capture(0,0, 5120, 2880);
    var pixel_color = img.colorAt(0,0);
    console.log(pixel_color); 
}

function findTree()
{
    var x = 742 , y = 211 , width = 1700 , height = 850; 
    var img = robot.screen.capture(x, y, width, height);

    var tree_colors = ["705634", "6d5432", "765b37", "7d6039", "7a5d39", "735835"]

    for(var i = 0; i < 100; i++)
    {
        var random_x = getRandomInt(742, width-1); 
        var random_y = getRandomInt(211, height-1); 
        var sample_color = img.colorAt(random_x, random_y);

        if(tree_colors.includes(sample_color))
        {
            var screen_x = random_x; 
            var screen_y = random_y; 

            console.log("Found a tree at: " + screen_x + ", " + screen_y + " color: " + sample_color);
            return {x: screen_x, y: screen_y}; 
        }
    }
    // did not find the color in our screen shot
    return false; 
}

function dropLogs()
{
    var inventory_x = 2400;
    var inventory_y = 1050;
    var drop_x = 2400;
    var drop_y = 1050 + 70;

    sleep(1000);
    robot.moveMouseSmooth(inventory_x, inventory_y); 
    sleep(100); 
    robot.mouseClick("right");
    robot.moveMouseSmooth(drop_x, drop_y); 
    sleep(100); 
    robot.mouseClick();
}

//main();

function woodcut_by_pixel()
{
    sleep(2000); 
    while (true)
    {
    robot.moveMouseSmooth(917, 717); 
    sleep(100); 
    robot.mouseClick(); 
    dropLogs(); 
    robot.moveMouseSmooth(1525, 747);
    sleep(100);
    robot.mouseClick(); 
    dropLogs(); 
    }

}

woodcut_by_pixel(); 



