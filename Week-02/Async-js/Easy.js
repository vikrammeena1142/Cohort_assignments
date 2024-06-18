const fs = require("fs");
// 01 Create a counter in JavaScript
// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript It should go up as time goes by in intervals of 1 second

// function Counter1(){
//     var counter = 0
//     setInterval(()=>{
//         console.clear()
// counter++
// console.log(counter)
//     },1000)
// }
// Counter1()
let count = 0;
const timer = () => {
  count += 1;
  // console.log(`count: ${count}`);
};

// setInterval(timer, 1000);
// 02 Counter without setInterval
// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// (Hint: setTimeout)
let initialCount = 0;
const timer2 = () => {
  // console.log(`timer: ${initialCount}`);
  initialCount++;
  setTimeout(timer2, 1000);
};
// timer2()

// 03 Write code to read contents of a file and print it to the console. You can use the fs library to as a black box, the goal is to understand async tasks. Try to do an expensive operation below the file read and see how it affects the output. Make the expensive operation more and more expensive and see how it affects the output.


const fileReader = async (filePath) => {
  try {
    const fileData = fs.readFileSync(filePath, "utf-8");

    //expensive operation after file reading
    let a = 1;
    for (let index = 0; index < 100000000; index++) {
      a += index;
    }
    console.log(fileData);
  } catch (error) {
    console.log("Error occurred while reading");
  }
};

// fileReader("./file.txt");
// Write to a file
// Using the fs library again, try to write to the contents of a file. You can use the fs library to as a black box, the goal is to understand async tasks.


fs.writeFile("custom.txt", "this is file data", (err) => {
  if (err) throw err;
});