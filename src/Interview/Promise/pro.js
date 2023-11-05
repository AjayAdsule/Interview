const pro = fetch("https://api.github.com/users/Swaraj54")
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.error(err));
