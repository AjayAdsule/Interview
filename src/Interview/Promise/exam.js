const promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Done");
  }, 1000);
  setTimeout(() => {
    reject(new Error("Something went wron"));
  }, 500);
});

promise
  .then((result) => console.log(result))
  .catch((err) => {
    console.error(err);
  });
