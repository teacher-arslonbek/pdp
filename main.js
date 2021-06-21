const endPoint = "http://jsonplaceholder.typicode.com/users";

// function showUser(userID) {
//   fetch(`${endPoint}/${userID}`)
//     .then((response) => response.json())
//     .then((users) => console.log(users))
//     .catch((error) => {
//       console.log(error);
//     });

// }

// showUser(10);

// async function showUserWithAsync(userID) {
//   const response = await fetch(`${endPoint}/${userID}`);
//   const users = await response.json();
//   console.log(users);
// }

// showUserWithAsync(10);

const fruits = {
  gilos: {
    price: 30,
    color: "red",
  },
  olma: {
    price: 25,
    color: "green",
  },
  apelsin: {
    price: 45,
    color: "orange",
  },
  limon: {
    price: 60,
    color: "yellow",
  },
};

const getFruit = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fruit = fruits[name];
      if (fruit) resolve(fruit);
      else reject(new Error("Not fount is fruit"));
    }, 1000);
  });
};

const showFruitsWithPromise = (name1, name2) => {
  getFruit(name1)
    .then((fruit1) => {
      console.log("done - 1");
      getFruit(name2)
        .then((fruit2) => {
          console.log("done - 2");
          console.log([fruit1, fruit2]);
        })
        .catch((err) => {
          console.error(err.message);
        });
    })
    .catch((err) => {
      console.error(err.message);
    });
};

// showFruitsWithPromise("lim", "anjir");

const showFruitsWithAsync = async (name1, name2) => {
  try {
    const fruit1 = await getFruit(name1); // found error
    console.log("done-1");
    const fruit2 = await getFruit(name2);
    console.log("done-2");
    console.log([fruit1, fruit2]);
  } catch (err) {
    console.error(err.message);
  }
};

showFruitsWithAsync("lim", "olma");
