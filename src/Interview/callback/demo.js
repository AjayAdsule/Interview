// function loadScript(src, callBack) {
//   let script = document.createElement("script");
//   script.src = src;
//   script.onload = () => callBack(null, script);
//   script.onerror = () => callBack(new Error("Error while loading the script"));
//   document.body.append(script);
// }
// loadScript("/src/Interview/callback/script1.js", (error, script) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log(`Script is loaded ${script.src}`);
//     loadScript("/src/Interview/callback/script.js", (error, script) => {
//       if (error) {
//         console.error(error);
//       } else {
//         console.log(`Second script is loaded ${script.src}`);
//       }
//     });
//   }
// });

// function isOdd(number) {
//   return number % 2 !== 0;
// }
// function isEven(num) {
//   return num % 2 === 0;
// }

// function filter(num, callback) {
//   let result = [];
//   for (const nums of num) {
//     if (callback(nums)) {
//       result.push(nums);
//     }
//   }
//   return result;
// }
// let arr = [10, 2, 1, 3, 5, 45, 12, 25, 3];
// console.log(filter(arr, isOdd));
// console.log(filter(arr, isEven));

function one(callback) {
  setTimeout(() => {
    console.log("fetch data from server");
    callback();
  }, 2000);
}
function two() {
  console.log("data is fetch successfully");
}
one(two);
