/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(n);
    }, n * 1000);
  });
}

//   wait(10).then((n) => console.log(`Promise resolved after ${n} seconds`));

module.exports = wait;
/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

async function sleep(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);

    
  });
}
// sleep(10000).then(() => {
//   console.log("waiting....");
// });
module.exports = sleep;
/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond(t) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("First Promise");
      }, t * 1000);
    });
  }
  
  function waitTwoSecond(t) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Second Promise");
      }, t * 1000);
    });
  }
  
  function waitThreeSecond(t) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Third Promise");
      }, t * 1000);
    });
  }
  
 async  function calculateTime(t1, t2, t3) {
    const startTime = new Date().getTime();
  
    return Promise.all([waitOneSecond(t1), waitTwoSecond(t2), waitThreeSecond(t3)]).then(
      (result) => {
        const endTime = new Date().getTime();
        console.log(result);
        console.log(
          `took ${endTime - startTime} milliseconds to resolve all promises`
        );
        return endTime - startTime;
      }
    );
  }
//   calculateTime(waitOneSecond,waitTwoSecond,waitThreeSecond)
  module.exports = { calculateTime };
  
/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("First Promise");
    }, t * 1000);
  });
}

function wait2(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Second Promise");
    }, t * 1000);
  });
}

function wait3(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("third Promise");
    }, t * 1000);
  });
}

async function calculateTime(t1, t2, t3) {
  const startTime = new Date().getTime();
  return wait1(t1)
    .then(() => {
      console.log("first promise done");
      return wait2(t2);
    })
    .then(() => {
      console.log("second promise done");
      return wait3(t3);
    })
    .then(() => {
      console.log("third promise done");
      const endTime = new Date().getTime();
      return endTime - startTime;
    });
}

// function calculateTime(t1, t2, t3) {
//   const startTime = new Date().getTime();

//   return wait1(t1)
//     .then(() => {
//       console.log("First promise done");
//       return wait2(t2);
//     })
//     .then(() => {
//       console.log("Second promise done");
//       return wait3(t3);
//     })
//     .then(() => {
//       const endTime = new Date().getTime();
//       console.log("Third promise done");
//       console.log(`took ${endTime - startTime} milliseconds`);
//       return endTime - startTime;
//     });
// }
calculateTime(wait1,wait2,wait3)
module.exports = calculateTime;

