/*
 * Programming Quiz: JuliaJames (4-1)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `x` with a starting value of `1`
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should use a conditional statement
 * - Your code should increment `x` by `1` each time the loop executes
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
 
var x = 1;

// while loop with a stop condition
while (x <= 20) {
    if (x % 3 === 0 && x % 5 === 0) {
        console.log("JuliaJames");
    }else if (x % 5 === 0) {
        console.log("James");
    }else if (x % 3 === 0) {
        console.log("Julia");
    }
    else {
        console.log(x);
    }
    // increment x at the end of each loop
    x = x + 1 ; 
}

//

/*
//99 bottles of juice on the wall! 99 bottles of juice! Take one down, pass it around... 98 bottles of juice on the wall!
//98 bottles of juice on the wall! 98 bottles of juice! Take one down, pass it around... 97 bottles of juice on the wall!
//...
//2 bottles of juice on the wall! 2 bottles of juice! Take one down, pass it around... 1 bottle of juice on the wall!
//1 bottle of juice on the wall! 1 bottle of juice! Take one down, pass it around... 0 bottles of juice on the wall!
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `num` with a starting value of `99`
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


var num = 99;

while (num >=1) {
    // Last iteration. Note occurances of bottle, bottle, bottleS
    if (num === 1) {
        console.log(num + " bottle of juice on the wall! "
                    + num + " bottle of juice! Take one down, pass it around... "
                    + (num-1) + " bottles of juice on the wall!");
    }
    // Second-last iteration. Note occurances of bottleS, bottleS, bottle
    else if (num === 2){
        console.log(num + " bottles of juice on the wall! "
                    + num + " bottles of juice! Take one down, pass it around... "
                    + (num-1) + " bottle of juice on the wall!");
    }
    // All other iterations. Note occurances of bottleS, bottleS, bottleS
    else {
        console.log(num + " bottles of juice on the wall! "
                    + num + " bottles of juice! Take one down, pass it around... "
                    + (num-1) + " bottles of juice on the wall!");
    }
    num = num - 1;
}

//
//NASA's countdown to launch includes checkpoints where NASA engineers complete certain technical tasks. During the final minute, NASA has 6 tasks to complete:

//Orbiter transfers from ground to internal power (T-50 seconds)
//Ground launch sequencer is go for auto sequence start (T-31 seconds)
//Activate launch pad sound suppression system (T-16 seconds)
//Activate main engine hydrogen burnoff system (T-10 seconds)
//Main engine start (T-6 seconds)
//Solid rocket booster ignition and liftoff! (T-0 seconds)
//NOTE: "T-50 seconds" read as "T-minus 50 seconds".
//
//Directions:
//Write a while loop that counts down from 60 seconds and:
//
//If there's a task being completed, it prints out the task
//If there is no task being completed, it prints out the time as T-x seconds
//Use the task and time descriptions described above.
/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


// Let us take an iteration variable, that represent the remaining Time in seconds
n = 60

// While loop with a stop condition
while (n >= 0) {
    if (n === 50) {
        console.log("Orbiter transfers from ground to internal power");
    }
    else if (n === 31) {
        console.log("Ground launch sequencer is go for auto sequence start");
    }
    else if (n === 16) {
        console.log("Activate launch pad sound suppression system");
    }
    else if (n === 10) {
        console.log("Activate main engine hydrogen burnoff system");
    }
    else if (n === 6) {
        console.log("Main engine start");
    }
    else if (n === 0) {
        console.log("Solid rocket booster ignition and liftoff!");
    }
    else{
        console.log("T-"+n+" seconds");
    }

    //Never forget to decrement/increment the iteration variable in a while loop
    // Otherwise, you loop will run infinite iterations
    n = n-1;
}


//nested loops
for (var x = 0; x < 3; x = x + 1) {
  for (var y = 0; y < 2; y = y + 1) {
    console.log(x + "," + y);
  }
}