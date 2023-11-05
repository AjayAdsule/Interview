function doSomeThingh(msg, cd) {
  cd(msg);
}

doSomeThingh("We are using callbac", (msg) => {
  console.log(msg);
  doSomeThingh("This is second Callback", function (msg) {
    console.log(msg);
    doSomeThingh("We are in third callback", (msg) => {
      console.log(`This is ${msg}`);
      doSomeThingh("We are in four callback", (msg) => {
        console.log(`This is ${msg}`);
        doSomeThingh("We are in five callback", (msg) => {
          console.log(`This is ${msg}`);
          doSomeThingh("We are in six callback", (msg) => {
            console.log(`This is ${msg}`);
            doSomeThingh("We are in seven callback", (msg) => {
              console.log(`This is ${msg}`);
              doSomeThingh("We are in eight callback", (msg) => {
                console.log(`This is ${msg}`);
                doSomeThingh("We are in nine callback", (msg) => {
                  console.log(`This is ${msg}`);
                  doSomeThingh("We are in ten callback", (msg) => {
                    console.log(`This is ${msg}`);
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
