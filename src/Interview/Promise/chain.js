// fetch("https://api.github.com/users/Swaraj54")
//   .then((res) => {
//     return res.json();
//   })
//   .then((res) => {
//     console.log(res);
//     const img = document.createElement("img");
//     img.src = res.avatar_url;
//     document.body.append(img);
//   });
// function demo() {
//   return new Promise((resolve, reject) => {
//     throw new Error("Whoops");
//     resolve("10");
//   });
// }
// demo()
//   .catch((err) => {
//     console.log(`We cathch the error ${err}`);
//   })
//   .then((res) => {
//     console.log("We are on next then block", res);
//   });

const add = async () => {
  return 1;
};
add().then((res) => console.log(res));
