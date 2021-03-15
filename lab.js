//HW Async/Await
// async function getRandomNumber() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(Math.floor(Math.random() * 8)), 500)
//   });
//   let result = await promise;

//   console.log(result);
// }
// getRandomNumber();

//HW Fetch
// async function city(cityName) {
//   fetch(`https://geocode.xyz/${cityName}?json=1`)
//     .then(response => response.json())
//     .then(result => {
//       console.log(result);
//       console.log(`The latitude is ${result.latt}`);
//       console.log(`The longitude is ${result.longt}`);
//     })
//     .catch(error => console.log('error', error));
// }

// city('miami')