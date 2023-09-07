// Promises in Javascript
// Synchronous vs Asynchronous Code
// Sync --It will run step by step
// console.log("start");!
// console.log("Subscribe to Akhil");
// console.log("Finish");

//Async --js execute synchronus code first than asynchronus code
// Async1
// console.log("start");
// setTimeout(() => {
// console.log("Subscribe to Akhil");
// }, 1000);
// console.log("Finish");
//output
//start
//Finish
//Subscribe to Akhil

//Async2
// console.log("start");
// function importantAction(username) {
//     setTimeout(() => {
// return `Subscribe to ${username}`;
// }, 1000);
// }
// const message = importantAction("Roadside Coder");
// console.log(message);//this outputs "undefined" //how we can make this run? --> we can use callbacks check next example
// console.log("stop");

//Using CALLBACKS
// console.log("start");
// function importantAction1(username, cb) {
//     setTimeout(() => {
//    cb(`Subscribe to ${username}`);
// }, 1000);
// }
// function likeTheVideo(video, cb) {
//     setTimeout(() => {
//    cb(`Like this ${video}`);
// }, 1000);
// }
// function shareTheVideo(share, cb) {
//     setTimeout(() => {
//    cb(`share this ${share}`);
// }, 1000);
// }
// //nesting of this callback had made it messy its called callback hell and to solve this we use promoises
// const message1 = importantAction1("Akhil chaudhary", function(message){
//     console.log(message);
//     likeTheVideo("you are here", function(action){
//         console.log(action);
//         shareTheVideo("you should", function(action){
//             console.log(action);
//         })
//     })
// });
// console.log("stop");

//promises
//it basically represent the success and failure of asynchronous event and its resulting value
// console.log("start");
// const sub = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const result = false;
//     if (result) resolve("Subscribed to me");
//     else reject(new Error("Why aren't you subscribed to to this?"));
//   }, 2000);
// });
// console.log(sub);//just to observe
// sub
//   .then((res) => {
//     console.log(res);//to catch the result
//   })
//   .catch((err) => {
//     console.error(err);// to catch the error
//   });
// console.log("stop");

//Now the earlier example of callback hell using promise
console.log("start");
function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Subscribe to ${username}`);
    }, 1000);
  });
}
function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Like the ${video} video`);
    }, 1000);
  });
}
function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Share the ${video} video`);
    }, 1000);
  });
} //now this look as promise hell but we can write promise in another way as promise chainning
// importantAction("Akhil Chaudhary").then(res=>{
//       console.log(res);
//       likeTheVideo("you are here").then(res => {
//         console.log(res);
//         shareTheVideo("you should").then(res =>{
//             console.log(res);
//         })
//       })
// }).catch((err) =>{console.log(err)})

//Promise Chaining// imp from the interview prespective
// importantAction("Akhil chaudhary")
//   .then((res) => {
//     console.log(res);
//     return likeTheVideo("Javascript Interview Questions");
//   })
//   .then((res) => {
//     console.log(res);
//     return shareTheVideo("Javascript Interview Questions");
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.error(err));

//we can use promise combinator promise.all
//but in promise.all it gonna run all promise in parallel and return the array with all fulfiled promises and if one promise fail complete promisea.all fails.
// Promise.all([
//   importantAction("Akhil chaudhary"),
//   likeTheVideo("Javascript Interview Questions"),
//   shareTheVideo("Javascript Interview Questions"),
// ])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error("err : promise failed", err);
//   });
// console.log("stop");

//promise.race return the first to get filfiled or rejected.
// Promise.race([
//   importantAction("Akhil chaudhary"),
//   likeTheVideo("Javascript Interview Questions"),
//   shareTheVideo("Javascript Interview Questions"),
// ])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error("err : promise failed", err);
//   });

//promise.allSettled it return all array with every failed and resolved promises
// Promise.allSettled([
//   importantAction("Akhil chaudhary"),
//   likeTheVideo("Javascript Interview Questions"),
//   shareTheVideo("Javascript Interview Questions"),
// ])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error("err : promise failed", err);
//   });

//similar to promise.race it will return the first to pass and ignore the reject one untill all are rejected than returns promises failed
// Promise.any([
//   importantAction("Akhil chaudhary"),
//   likeTheVideo("Javascript Interview Questions"),
//   shareTheVideo("Javascript Interview Questions"),
// ])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error("err : promise failed", err);
//   });

//Async await is the more modern way to handle promises
// const result = async () => {
//   try {
//     const message1 = await importantAction("Akhil chaudhary");
//     const message2 = await likeTheVideo("Javascript Interview Questions");
//     const message3 = await shareTheVideo("Javascript Interview Questions");

//     console.log({ message1, message2, message3 });
//   } catch (error) {
//     console.error("promises failed", error);
//   }
// };
// result();
// console.log("stop");

//Ques is to create a first promise which get resolve to a text first and then we have to create a second promise that will resolved our first promise that we have create earlier so then we have to resolve are second promise and output of which we will pass to resolve the first promise and print first
//promise chaining ques

// const firstPromise = new Promise((resolve, reject) => {
//   resolve("First");
// });

// const secondPromise = new Promise((resolve, reject) => {
//   resolve(firstPromise);
// });

// secondPromise
//   .then((res) => res)
//   .then((res) => {
//     console.log(res);
//   });

//Ques 8: Rewrite this example code `async/await`
// Instead of`.then/catch

// function loadJson(url) {
//   return fetch(url).then((response) => {
//     if (response.status == 200) {
//       return response.json();
//     } else {
//       throw new Error(response.status);
//     }
//   });
// }

// Using async/await
// async function loadJson(url) {
//   let response = await fetch(url);
//   if (response.status == 200) {
//     let json = await response.json();
//     return json;
//   }
//   throw new Error(response.status);
// }

// loadJson("https://fakeurl.com/no-such-user.json").catch((err) =>
//   console.log(err)
// );

//Solve promise recurssively
function promsRecu(funcPromises) {
  if (funcPromises.length === 0) return;
  const currentFunc = funcPromises.shift();
  currentFunc
    .then((res) => console.log(res))
    .catch((err) => console.error(err));

  promsRecu(funcPromises);
}

promsRecu([
  importantAction("Akhil Chaudhary"),
  likeTheVideo("javascript"),
  shareTheVideo("interview"),
]);
